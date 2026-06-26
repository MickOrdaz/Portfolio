$ffmpeg = "C:\Users\bluem\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"

Get-ChildItem -Path "images" -Filter "*.gif" -Recurse | ForEach-Object {
    $out = $_.FullName -replace '\.gif$', '.mp4'
    Write-Host "Converting: $($_.Name)"
    & $ffmpeg -i $_.FullName -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an $out -y 2>$null
    if (Test-Path $out) {
        Write-Host "Done: $([math]::Round((Get-Item $out).Length/1MB,2)) MB"
    } else {
        Write-Host "FAILED: $($_.Name)"
    }
}
Write-Host "All done!"
