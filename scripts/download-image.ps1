# download-image.ps1 — Download image with dual-copy + auto-compression
# Usage: .\download-image.ps1 -Url "https://..." -Name "panton-chair.jpg"
param(
    [Parameter(Mandatory)][string]$Url,
    [Parameter(Mandatory)][string]$Name
)

$ErrorActionPreference = "Stop"
$projectDir = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object"
$fullDir = "$projectDir\public\images\full"
$displayDir = "$projectDir\public\images"

# Ensure dirs exist
New-Item -ItemType Directory -Path $fullDir -Force | Out-Null

# Step 1: Download original to full/
Write-Host "Downloading original to full/$Name ..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $Url -OutFile "$fullDir\$Name" -Headers @{"User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

$sizeKB = [math]::Round((Get-Item "$fullDir\$Name").Length / 1KB)
Write-Host "Original size: $sizeKB KB" -ForegroundColor $(if ($sizeKB -gt 600) { "Yellow" } else { "Green" })

# Step 2: Check dimensions
$ffOut = & ffmpeg -i "$fullDir\$Name" -hide_banner 2>&1 | Select-String "Stream.*Video"
if ($ffOut -match '(\d{2,5})x(\d{2,5})') {
    $w = [int]$Matches[1]; $h = [int]$Matches[2]
    $ratio = [math]::Round($w / $h, 2)
    Write-Host "Dimensions: ${w}x${h} (ratio: $ratio)"
    if ($ratio -gt 2.0) {
        Write-Host "WARNING: Ultra-wide ratio ($ratio) — bad for mobile! Consider a different image." -ForegroundColor Red
    }
}

# Step 3: Compress or copy
if ($sizeKB -gt 600) {
    Write-Host "Compressing display copy (q:v 3, max 1200px) ..." -ForegroundColor Yellow
    & ffmpeg -i "$fullDir\$Name" -vf "scale='min(1200,iw)':-1" -q:v 3 "$displayDir\$Name" -y 2>&1 | Out-Null
    $newSize = [math]::Round((Get-Item "$displayDir\$Name").Length / 1KB)
    Write-Host "Compressed: $sizeKB KB -> $newSize KB" -ForegroundColor Green
} else {
    Write-Host "Under 600KB, copying original as-is." -ForegroundColor Green
    Copy-Item "$fullDir\$Name" "$displayDir\$Name"
}

Write-Host "`nDone! Files:" -ForegroundColor Cyan
Write-Host "  Display: public/images/$Name ($([math]::Round((Get-Item "$displayDir\$Name").Length / 1KB)) KB)"
Write-Host "  Full:    public/images/full/$Name ($sizeKB KB)"
