#!/bin/bash
cd bin
dir=$(pwd)
cd ../engine
nohup $dir/nlu-start.bat &
nohup $dir/core-start.bat &
nohup $dir/ui-start.bat &
cd ..