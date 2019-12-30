# lgbt-space.ch for Franz
This is a inofficial Franz recipe for https://www.lgbt-space.ch.

## Features
* Opens `Activity` page by default.

## Installation
run following commands in powershell:
```PowerShell

Invoke-WebRequest "https://github.com/ahaenggli/franz-recipe-lgbt-space/archive/master.zip" -OutFile $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip"
unzip -j -o -d $env:APPDATA"\Franz\recipes\dev\lgbt-space" $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip" 
del $env:APPDATA"\Franz\recipes\dev\lgbt-space.zip"

```
