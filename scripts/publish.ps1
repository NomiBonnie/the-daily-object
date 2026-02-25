# daily-object-publish.ps1 — Automated build, deploy, and verify
# Usage: .\publish.ps1 [-SkipBuild] [-DryRun]
param(
    [switch]$SkipBuild,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$projectDir = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object"
Set-Location $projectDir

Write-Host "`n=== Daily Object Publish ===" -ForegroundColor Cyan

# 1. Check for uncommitted changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit 0
}
Write-Host "Changes detected:" -ForegroundColor Green
$status | ForEach-Object { Write-Host "  $_" }

# 2. Validate images (dual-copy check)
Write-Host "`n--- Image Validation ---" -ForegroundColor Cyan
$displayImages = Get-ChildItem "public/images/*.jpg","public/images/*.png" -ErrorAction SilentlyContinue
$fullImages = Get-ChildItem "public/images/full/*.jpg","public/images/full/*.png" -ErrorAction SilentlyContinue
$displayNames = $displayImages | ForEach-Object { $_.Name }
$fullNames = $fullImages | ForEach-Object { $_.Name }

$missingFull = $displayNames | Where-Object { $_ -notin $fullNames }
if ($missingFull) {
    Write-Host "WARNING: Display images missing from full/:" -ForegroundColor Red
    $missingFull | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}

# Check image sizes
foreach ($img in $displayImages) {
    $sizeKB = [math]::Round($img.Length / 1KB)
    $color = if ($sizeKB -gt 600) { "Red" } else { "Green" }
    Write-Host ("  {0}: {1} KB" -f $img.Name, $sizeKB) -ForegroundColor $color
    if ($sizeKB -gt 600) {
        Write-Host "    ^ WARNING: Display image > 600KB, should be compressed!" -ForegroundColor Red
    }
}

# Check image dimensions/ratio
foreach ($img in $displayImages) {
    try {
        $ffOut = & ffmpeg -i $img.FullName -hide_banner 2>&1 | Select-String "Stream.*Video"
        if ($ffOut -match '(\d{2,5})x(\d{2,5})') {
            $w = [int]$Matches[1]; $h = [int]$Matches[2]
            $ratio = [math]::Round($w / $h, 2)
            $warning = if ($ratio -gt 2.0) { " ❌ ULTRA-WIDE (>2:1) — bad for mobile!" } elseif ($ratio -gt 1.8) { " ⚠️ Wide" } else { "" }
            Write-Host ("  {0}: {1}x{2} (ratio {3}){4}" -f $img.Name, $w, $h, $ratio, $warning)
        }
    } catch {}
}

# 3. TypeScript check
Write-Host "`n--- TypeScript Check ---" -ForegroundColor Cyan
$tscResult = & npx tsc --noEmit 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "TypeScript errors:" -ForegroundColor Red
    $tscResult | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    exit 1
}
Write-Host "TypeScript: OK" -ForegroundColor Green

# 4. Build
if (-not $SkipBuild) {
    Write-Host "`n--- Vite Build ---" -ForegroundColor Cyan
    & npx vite build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "Build: OK" -ForegroundColor Green
}

# 5. Commit & Push
if ($DryRun) {
    Write-Host "`n[DRY RUN] Would commit and push. Exiting." -ForegroundColor Yellow
    exit 0
}

Write-Host "`n--- Git Commit & Push ---" -ForegroundColor Cyan
git add .
$today = (Get-Date).ToString("MM-dd")
# Try to extract title from recent changes
$commitMsg = "Update $today content"
git commit -m $commitMsg
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Push: OK" -ForegroundColor Green

# 6. Wait & Verify
Write-Host "`n--- Waiting 90s for GitHub Actions deploy ---" -ForegroundColor Cyan
Start-Sleep -Seconds 90

try {
    $response = Invoke-WebRequest -Uri "https://nomibonnie.github.io/the-daily-object/" -UseBasicParsing -TimeoutSec 15
    if ($response.StatusCode -eq 200) {
        Write-Host "Site is live: OK" -ForegroundColor Green
    }
} catch {
    Write-Host "Site check failed: $_" -ForegroundColor Red
}

Write-Host "`n=== Done ===" -ForegroundColor Cyan
