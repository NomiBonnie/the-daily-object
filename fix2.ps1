$file = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\src\App.tsx"
$c = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# Check line endings
$crlfCount = ([regex]::Matches($c, "`r`n")).Count
$lfCount = ([regex]::Matches($c, "(?<!`r)`n")).Count
Write-Host "CRLF: $crlfCount, bare LF: $lfCount"

# Normalize to LF
$c = $c.Replace("`r`n", "`n")

# 2. Replace initFromHash
$old2 = "  // Initialize from hash: #/2026-02-14 -> archive view with that date`n  const initFromHash = () => {`n    const hash = window.location.hash`n    const match = hash.match(/^#\/(\d{4}-\d{2}-\d{2})$/)`n    if (match) {`n      const dateStr = match[1]`n      const found = designs.some(d => d.date === dateStr)`n      if (found) {`n        return { view: 'archive' as View, date: new Date(dateStr + 'T12:00:00') }`n      }`n    }`n    return { view: 'today' as View, date: new Date() }`n  }`n  const init = initFromHash()"

$new2 = "  // Initialize from URL path`n  const location = useLocation()`n  const navigate = useNavigate()`n  const initFromPath = () => {`n    const match = location.pathname.match(/^\/(\d{4}-\d{2}-\d{2})$/)`n    if (match) {`n      const dateStr = match[1]`n      const found = designs.some(d => d.date === dateStr)`n      if (found) {`n        return { view: 'archive' as View, date: new Date(dateStr + 'T12:00:00') }`n      }`n    }`n    return { view: 'today' as View, date: new Date() }`n  }`n  const init = initFromPath()"

if ($c.Contains($old2)) {
  $c = $c.Replace($old2, $new2)
  Write-Host "OK: initFromHash replaced"
} else {
  Write-Host "FAIL: initFromHash not found"
  # Debug: show lines around it
  $lines = $c.Split("`n")
  for ($i = 62; $i -lt 80; $i++) {
    Write-Host "$($i): [$($lines[$i])]"
  }
}

[System.IO.File]::WriteAllText($file, $c, (New-Object System.Text.UTF8Encoding $false))
