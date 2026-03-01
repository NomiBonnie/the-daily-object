Set-Location "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object"
npx vite build 2>&1
git add -A 2>&1
git commit -m "Fix calendar size - constrain to max-w-md" 2>&1
git push origin main 2>&1
Write-Host "DONE"
