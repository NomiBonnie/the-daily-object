Set-Location "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object"

# Check mercedes image exists
Write-Output "Mercedes image exists: $(Test-Path 'public\images\mercedes-35hp.jpg')"
Write-Output "Mercedes size: $((Get-Item 'public\images\mercedes-35hp.jpg' -ErrorAction SilentlyContinue).Length)"

# Git operations
git add .
git status
git commit -m "Fix: Stool 60 image, replace Death Dealer with Mercedes 35HP, Vessel exterior image, Royal Crescent portrait image"
git push origin main
