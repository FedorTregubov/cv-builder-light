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

git subtree push --prefix dist origin gh-pages
# return to the previous directory
cd -

git checkout master
