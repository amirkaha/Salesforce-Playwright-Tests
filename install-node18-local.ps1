$dest = Join-Path $env:LOCALAPPDATA 'node18-local'
if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
}
$nodeZip = Join-Path $env:TEMP 'node-v18.20.0-win-x64.zip'
$nodeDir = Join-Path $dest 'node-v18.20.0-win-x64'
if (-not (Test-Path (Join-Path $nodeDir 'node.exe'))) {
    Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.20.0/node-v18.20.0-win-x64.zip' -OutFile $nodeZip
    Expand-Archive -Path $nodeZip -DestinationPath $dest -Force
    Remove-Item -Path $nodeZip -Force
}
$env:PATH = "$nodeDir;" + $env:PATH
Write-Host "Using node:"
node -v
Write-Host "Using npm:"
npm -v
Set-Location 'C:\Users\Amir\Documents\Playwright Framework'
npx playwright install
npx playwright test src/tests/google.spec.ts
