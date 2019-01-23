@echo off
cd bin
set current_path="%cd%"
cd ../engine
start cmd /k "%current_path%\nlu-start.bat /t"
start cmd /k "%current_path%\core-start.bat /t"
start cmd /k "%current_path%\ui-start.bat /t"
