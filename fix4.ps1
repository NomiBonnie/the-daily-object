$file = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\src\App.tsx"
$c = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
$c = $c.Replace("`r`n", "`n")

$old = "                    window.location.hash = ''`n                    history.replaceState(null, '', window.location.pathname)`n                    window.scrollTo({ top: 0, behavior: 'smooth' })"
$new = "                    navigate('/')`n                    window.scrollTo({ top: 0, behavior: 'smooth' })"
$c = $c.Replace($old, $new)

if ($c.Contains("window.location")) { Write-Host "WARN: still has window.location" } else { Write-Host "OK: all clean" }

$c = $c.Replace("`n", "`r`n")
[System.IO.File]::WriteAllText($file, $c, (New-Object System.Text.UTF8Encoding $false))
