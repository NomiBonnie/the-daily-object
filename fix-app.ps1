$file = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\src\App.tsx"
$c = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# 1. Add router imports
$c = $c.Replace(
  "import { useState, useEffect, useRef, useCallback } from 'react'",
  "import { useState, useEffect, useRef, useCallback } from 'react'`nimport { useLocation, useNavigate, Link } from 'react-router-dom'"
)

# 2. Replace initFromHash block
$old = @"
  // Initialize from hash: #/2026-02-14 -> archive view with that date
  const initFromHash = () => {
    const hash = window.location.hash
    const match = hash.match(/^#\/(\d{4}-\d{2}-\d{2})$/)
    if (match) {
      const dateStr = match[1]
      const found = designs.some(d => d.date === dateStr)
      if (found) {
        return { view: 'archive' as View, date: new Date(dateStr + 'T12:00:00') }
      }
    }
    return { view: 'today' as View, date: new Date() }
  }
  const init = initFromHash()
"@

$new = @"
  // Initialize from URL path: /2026-02-14 -> archive view with that date
  const location = useLocation()
  const navigate = useNavigate()
  const initFromPath = () => {
    const match = location.pathname.match(/^\/(\d{4}-\d{2}-\d{2})$/)
    if (match) {
      const dateStr = match[1]
      const found = designs.some(d => d.date === dateStr)
      if (found) {
        return { view: 'archive' as View, date: new Date(dateStr + 'T12:00:00') }
      }
    }
    return { view: 'today' as View, date: new Date() }
  }
  const init = initFromPath()
"@

$c = $c.Replace($old, $new)

# 3. Replace handleDateClick hash setting
$c = $c.Replace(
  "      window.location.hash = ``/`${dateStr}``",
  "      navigate(``/`${dateStr}``)"
)

# 4. Replace navigateToDesign hash setting
$c = $c.Replace(
  "    window.location.hash = ``/`${design.date}``",
  "    navigate(``/`${design.date}``)"
)

# 5. Replace "go to today" - there are two instances
$oldToday1 = @"
                window.location.hash = ''
                history.replaceState(null, '', window.location.pathname)
                window.scrollTo({ top: 0, behavior: 'smooth' })
"@
$newToday1 = @"
                navigate('/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
"@
$c = $c.Replace($oldToday1, $newToday1)

# 6. Add design principles link in footer
$oldFooter = @"
          <p className="text-xs font-light tracking-wide text-neutral-400 dark:text-neutral-600">
            Sanono Studio • World-class design, one object at a time
          </p>
"@
$newFooter = @"
          <p className="text-xs font-light tracking-wide text-neutral-400 dark:text-neutral-600">
            Sanono Studio • World-class design, one object at a time
          </p>
          <Link
            to="/design-principles"
            className="inline-block mt-3 text-xs font-light tracking-[0.15em] uppercase text-neutral-300 dark:text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors"
          >
            Design Principles
          </Link>
"@
$c = $c.Replace($oldFooter, $newFooter)

[System.IO.File]::WriteAllText($file, $c, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Done. Checking changes..."

# Verify key changes exist
if ($c.Contains("useLocation")) { Write-Host "OK: useLocation added" } else { Write-Host "FAIL: useLocation" }
if ($c.Contains("useNavigate")) { Write-Host "OK: useNavigate added" } else { Write-Host "FAIL: useNavigate" }
if ($c.Contains("navigate('/')")) { Write-Host "OK: navigate('/') found" } else { Write-Host "FAIL: navigate" }
if ($c.Contains("Design Principles")) { Write-Host "OK: footer link added" } else { Write-Host "FAIL: footer" }
if ($c.Contains("window.location.hash")) { Write-Host "WARN: still has window.location.hash" } else { Write-Host "OK: no more window.location.hash" }
