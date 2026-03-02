$file = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\src\App.tsx"
$c = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
$c = $c.Replace("`r`n", "`n")

# 1. Replace handleDateClick's hash line
$c = $c.Replace("      window.location.hash = " + '`' + "/" + '$' + "{dateStr}" + '`', "      navigate(" + '`' + "/" + '$' + "{dateStr}" + '`' + ")")
# Check
if ($c.Contains("navigate(``")) { Write-Host "OK: handleDateClick" } else { Write-Host "FAIL: handleDateClick" }

# 2. Replace navigateToDesign's hash line
$c = $c.Replace("    window.location.hash = " + '`' + "/" + '$' + "{design.date}" + '`', "    navigate(" + '`' + "/" + '$' + "{design.date}" + '`' + ")")
if (!$c.Contains("window.location.hash = ``")) { Write-Host "OK: navigateToDesign" } else { Write-Host "FAIL: navigateToDesign" }

# 3. Replace "go to today" blocks (window.location.hash = '')
$old3 = "                window.location.hash = ''`n                history.replaceState(null, '', window.location.pathname)`n                window.scrollTo({ top: 0, behavior: 'smooth' })"
$new3 = "                navigate('/')`n                window.scrollTo({ top: 0, behavior: 'smooth' })"
$count = ([regex]::Matches($c, [regex]::Escape("window.location.hash = ''"))).Count
Write-Host "Found $count instances of hash=''"
$c = $c.Replace($old3, $new3)

# 4. Add footer link
$oldFooter = "            Sanono Studio"
$c = $c.Replace(
  "          </p>`n        </div>`n      </footer>",
  "          </p>`n          <Link`n            to=`"/design-principles`"`n            className=`"inline-block mt-3 text-xs font-light tracking-[0.15em] uppercase text-neutral-300 dark:text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors`"`n          >`n            Design Principles`n          </Link>`n        </div>`n      </footer>"
)

# Final checks
if ($c.Contains("window.location.hash")) { Write-Host "WARN: still has window.location.hash" } else { Write-Host "OK: clean" }
if ($c.Contains("Design Principles")) { Write-Host "OK: footer link" } else { Write-Host "FAIL: footer" }

# Convert back to CRLF for Windows
$c = $c.Replace("`n", "`r`n")
[System.IO.File]::WriteAllText($file, $c, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Saved."
