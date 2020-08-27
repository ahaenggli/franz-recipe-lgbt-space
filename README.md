# lgbt-space.ch for Franz
This is a inofficial Franz recipe for https://www.lgbt-space.ch.

## Features
* Opens `Activity` page by default.

## Installation
run following commands in powershell:
```PowerShell

mkdir $env:APPDATA"\Franz\recipes\dev\"
Invoke-WebRequest "https://github.com/ahaenggli/franz-recipe-lgbt-space/archive/master.zip" -OutFile $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip"
Expand-Archive $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip" -DestinationPath $env:APPDATA"\Franz\recipes\dev\"
del $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip"

```
