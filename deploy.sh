#!/usr/bin/env bash

# build
vite build

# push deployment
cd dist
git init
git add -A
git commit -m 'deployment'
git push -f git@github.com:stephenhoran/Satisfactory-Explorer.git master:gh-pages
