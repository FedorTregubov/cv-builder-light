#!/usr/bin/env sh

# abort on errors
set -e

# lint
npm run lint
npm run typecheck

# test
npm run test:unit

# build
rm -rf ./dist
npm run build

# init subtree and push gh-pages-branch
git checkout gh-pages
git add dist -f
git commit -m 'deploy' # TODO: add release number here
git subtree push --prefix dist origin gh-pages --force
