param(
    [Parameter(Mandatory = $true)]
    [string]$ScriptPath,

    [string]$AfterEffectsDir = "D:\AE2025\Adobe After Effects 2025\Support Files",

    [string]$AfterFX = ""
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($AfterFX)) {
    $AfterFX = Join-Path -Path $AfterEffectsDir -ChildPath "AfterFX.com"
}

if (-not (Test-Path -LiteralPath $AfterFX)) {
    throw "AfterFX.com was not found: $AfterFX"
}

if (-not (Test-Path -LiteralPath $ScriptPath)) {
    throw "JSX script was not found: $ScriptPath"
}

$resolvedScript = (Resolve-Path -LiteralPath $ScriptPath).Path
Write-Host "Running AE JSX: $resolvedScript"
& $AfterFX -r $resolvedScript

if ($LASTEXITCODE -ne 0) {
    throw "AfterFX.com exited with code $LASTEXITCODE"
}

Write-Host "AE JSX command completed."
