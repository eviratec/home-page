#!/bin/sh

d=`date +%Y%m%d%H%M%S`

cd ..

node_modules/grunt/node_modules/.bin/grunt build

cd build
tar -cz . -f ../build-${d}.tar.gz

cd ..
cp build-${d}.tar.gz build-latest.tar.gz
