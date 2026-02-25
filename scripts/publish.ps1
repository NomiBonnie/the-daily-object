# daily-object-publish.ps1 — Automated build, deploy, and verify
# Usage: .\publish.ps1 -Message "Add 02-26: Panton Chair" [-SkipBuild] [-DryRun]
param(
    [Parameter(Mandatory)][string]$Message,
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

# 2. Validate ONLY changed/new images (not all 25+)
Write-Host "`n--- Image Validation (changed files only) ---" -ForegroundColor Cyan
$changedImages = $status | Where-Object { $_ -match '\.(jpg|png)$' } | ForEach-Object { ($_ -replace '^\s*\??\??\s*', '').Trim().Trim('"') }

foreach ($imgPath in $changedImages) {
    if (-not (Test-Path $imgPath)) { continue }
    $img = Get-Item $imgPath
    $sizeKB = [math]::Round($img.Length / 1KB)
    
    # Size check
    $isDisplay = $imgPath -notmatch 'full/'
    if ($isDisplay -and $sizeKB -gt 600) {
        Write-Host "  WARNING: $($img.Name) = $sizeKB KB (display image > 600KB!)" -ForegroundColor Red
    } else {
        Write-Host "  $($img.Name): $sizeKB KB" -ForegroundColor Green
    }

    # Ratio check
    try {
        $ffOut = & ffmpeg -i $img.FullName -hide_banner 2>&1 | Select-String "Stream.*Video"
        if ($ffOut -match '(\d{2,5})x(\d{2,5})') {
            $w = [int]$Matches[1]; $h = [int]$Matches[2]
            $ratio = [math]::Round($w / $h, 2)
            $warning = if ($ratio -gt 2.0) { " ❌ ULTRA-WIDE (>2:1)" } elseif ($ratio -gt 1.8) { " ⚠️ Wide" } else { "" }
            Write-Host "    ${w}x${h} (ratio $ratio)$warning"
        }
    } catch {}
}

# 3. Dual-copy check (display images must have full/ counterpart)
$displayImages = $changedImages | Where-Object { $_ -match 'public/images/[^/]+\.(jpg|png)$' }
foreach ($dp in $displayImages) {
    $name = Split-Path $dp -Leaf
    $fullPath = "public/images/full/$name"
    if (-not (Test-Path $fullPath)) {
        Write-Host "  WARNING: $name missing from full/ (no lightbox original!)" -ForegroundColor Red
    }
}

# 4. TypeScript check
Write-Host "`n--- TypeScript Check ---" -ForegroundColor Cyan
$tscResult = & npx tsc --noEmit 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "TypeScript errors:" -ForegroundColor Red
    $tscResult | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    exit 1
}
Write-Host "TypeScript: OK" -ForegroundColor Green

# 5. Build
if (-not $SkipBuild) {
    Write-Host "`n--- Vite Build ---" -ForegroundColor Cyan
    & npx vite build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "Build: OK" -ForegroundColor Green
}

# 6. Commit & Push
if ($DryRun) {
    Write-Host "`n[DRY RUN] Would commit: $Message" -ForegroundColor Yellow
    exit 0
}

Write-Host "`n--- Git Commit & Push ---" -ForegroundColor Cyan
git add .
git commit -m $Message
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Push: OK" -ForegroundColor Green

# 7. Wait & Verify
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
