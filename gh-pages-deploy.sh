#!/usr/bin/env sh

# abort on errors
set -e

# lint
npm run lint

# type-check
npm run typecheck

# test
npm run test:unit

# build
rm -rf ./dist
npm run build

# init subtree and push gh-pages-branch
git checkout gh-pages
git add dist -f
git commit --no-verify -m 'deploy' # TODO: add release number here
git push origin `git subtree split --prefix dist master`:gh-pages --force
