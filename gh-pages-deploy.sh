#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# init and push gh-pages repo
git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:FedorTregubov/cv-builder-light.git main:gh-pages

# return to the previous directory
cd -