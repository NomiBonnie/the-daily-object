# download-image.ps1 - Download image with dual-copy + auto-compression
param(
    [Parameter(Mandatory)][string]$Url,
    [Parameter(Mandatory)][string]$Name
)

$ErrorActionPreference = "Stop"
$projectDir = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object"
$fullDir = Join-Path $projectDir "public\images\full"
$displayDir = Join-Path $projectDir "public\images"

New-Item -ItemType Directory -Path $fullDir -Force | Out-Null

Write-Host "Downloading original to full/$Name ..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $Url -OutFile (Join-Path $fullDir $Name) -Headers @{"User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

$sizeKB = [math]::Round((Get-Item (Join-Path $fullDir $Name)).Length / 1KB)
Write-Host "Original size: ${sizeKB} KB" -ForegroundColor Green

# Compress or copy
if ($sizeKB -gt 600) {
    Write-Host "Compressing display copy ..." -ForegroundColor Yellow
    $src = Join-Path $fullDir $Name
    $dst = Join-Path $displayDir $Name
    $null = cmd /c "ffmpeg -i `"$src`" -vf `"scale='min(1200,iw)':-1`" -q:v 3 `"$dst`" -y 2>&1"
    $newSize = [math]::Round((Get-Item $dst).Length / 1KB)
    Write-Host "Compressed: ${sizeKB} KB -> ${newSize} KB" -ForegroundColor Green
} else {
    Write-Host "Under 600KB, copying as-is." -ForegroundColor Green
    Copy-Item (Join-Path $fullDir $Name) (Join-Path $displayDir $Name)
}

$dispSize = [math]::Round((Get-Item (Join-Path $displayDir $Name)).Length / 1KB)
Write-Host "Done! Display: ${dispSize}KB, Full: ${sizeKB}KB" -ForegroundColor Cyan
