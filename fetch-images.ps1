$unsplash = (Get-Content "C:\Users\kaixin_yy\.config\unsplash\config.json" | ConvertFrom-Json).access_key
$pexels = (Get-Content "C:\Users\kaixin_yy\.config\pexels\config.json" | ConvertFrom-Json).api_key
$outDir = "C:\Users\kaixin_yy\.openclaw\workspace\the-daily-object\public\media\feidish"

$searches = @(
    @{name="fun-nintendo-switch"; queries=@("nintendo switch controller","nintendo switch joycon")},
    @{name="fun-slack"; queries=@("slack app","team communication software")},
    @{name="fun-porsche-911"; queries=@("porsche 911 interior","porsche 911 steering wheel")},
    @{name="esthetic-braun-t3"; queries=@("braun radio vintage","braun dieter rams radio")},
    @{name="esthetic-porsche-993"; queries=@("porsche 993","porsche 911 993 classic")},
    @{name="esthetic-apple-xdr"; queries=@("apple pro display xdr","apple display monitor")},
    @{name="innovative-iphone"; queries=@("iphone original first","iphone touchscreen")},
    @{name="innovative-dyson"; queries=@("dyson bladeless fan","dyson air multiplier")},
    @{name="innovative-stripe"; queries=@("stripe payment","online payment code")},
    @{name="detail-macos-corners"; queries=@("macbook screen macos","macos interface")},
    @{name="detail-leica-m"; queries=@("leica camera","leica m rangefinder")},
    @{name="detail-notion"; queries=@("notion app","notion productivity")},
    @{name="inherent-porsche-911"; queries=@("porsche 911 evolution","porsche 911 classic modern")},
    @{name="inherent-apple-roundrect"; queries=@("apple products collection","apple device lineup")},
    @{name="inherent-muji"; queries=@("muji store products","muji minimalist")},
    @{name="simple-google"; queries=@("google search page","google homepage")},
    @{name="simple-braun-et66"; queries=@("braun calculator","braun et66 calculator")},
    @{name="simple-muji-cd"; queries=@("muji cd player wall","muji minimalist design")},
    @{name="honest-muji-label"; queries=@("muji product label","muji natural material")},
    @{name="honest-patagonia"; queries=@("patagonia jacket outdoor","patagonia clothing")},
    @{name="honest-teenage-engineering"; queries=@("teenage engineering op-1","synthesizer portable")}
)

$results = @()
foreach ($s in $searches) {
    $found = $false
    foreach ($q in $s.queries) {
        if ($found) { break }
        try {
            $r = Invoke-RestMethod -Uri "https://api.unsplash.com/search/photos?query=$([uri]::EscapeDataString($q))&per_page=3&client_id=$unsplash" -ErrorAction Stop
            if ($r.results.Count -gt 0) {
                $url = $r.results[0].urls.regular
                $results += @{name=$s.name; url=$url; source="unsplash"}
                Write-Host "OK: $($s.name) from unsplash: $q"
                $found = $true
            }
        } catch {
            Write-Host "ERR: unsplash $q - $_"
        }
    }
    if (-not $found) {
        # Try pexels
        foreach ($q in $s.queries) {
            if ($found) { break }
            try {
                $r = Invoke-RestMethod -Uri "https://api.pexels.com/v1/search?query=$([uri]::EscapeDataString($q))&per_page=3" -Headers @{Authorization=$pexels} -ErrorAction Stop
                if ($r.photos.Count -gt 0) {
                    $url = $r.photos[0].src.large
                    $results += @{name=$s.name; url=$url; source="pexels"}
                    Write-Host "OK: $($s.name) from pexels: $q"
                    $found = $true
                }
            } catch {
                Write-Host "ERR: pexels $q - $_"
            }
        }
    }
    if (-not $found) {
        Write-Host "MISS: $($s.name)"
    }
    Start-Sleep -Milliseconds 200
}

# Download all
Write-Host "`n--- Downloading ---"
foreach ($r in $results) {
    $outFile = Join-Path $outDir "$($r.name).jpg"
    try {
        Invoke-WebRequest -Uri $r.url -OutFile $outFile -ErrorAction Stop
        $size = (Get-Item $outFile).Length
        Write-Host "Downloaded: $($r.name) ($([math]::Round($size/1KB))KB)"
    } catch {
        Write-Host "DOWNLOAD FAIL: $($r.name) - $_"
    }
}

Write-Host "`n--- Compressing ---"
Add-Type -AssemblyName System.Drawing
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
foreach ($file in (Get-ChildItem $outDir -Filter "*.jpg")) {
    $size = $file.Length
    if ($size -gt 400KB) {
        try {
            $img = [System.Drawing.Image]::FromFile($file.FullName)
            # Resize if too large
            $maxW = 1200
            $w = $img.Width
            $h = $img.Height
            if ($w -gt $maxW) {
                $newH = [int]($h * $maxW / $w)
                $resized = New-Object System.Drawing.Bitmap($maxW, $newH)
                $g = [System.Drawing.Graphics]::FromImage($resized)
                $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $g.DrawImage($img, 0, 0, $maxW, $newH)
                $g.Dispose()
                $img.Dispose()
                $img = $resized
            }
            $tempFile = $file.FullName + ".tmp"
            $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 70)
            $img.Save($tempFile, $encoder, $params)
            $img.Dispose()
            Remove-Item $file.FullName
            Rename-Item $tempFile $file.Name
            $newSize = (Get-Item $file.FullName).Length
            Write-Host "Compressed: $($file.Name) $([math]::Round($size/1KB))KB -> $([math]::Round($newSize/1KB))KB"
        } catch {
            Write-Host "COMPRESS FAIL: $($file.Name) - $_"
        }
    } else {
        Write-Host "OK: $($file.Name) already $([math]::Round($size/1KB))KB"
    }
}

Write-Host "`nDone! Total files: $((Get-ChildItem $outDir -Filter '*.jpg').Count)"
