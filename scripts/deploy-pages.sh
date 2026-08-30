#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Builds the site for a GitHub Pages project site and publishes it to the
# gh-pages branch. The base path is taken from the git remote, so it follows
# the repository name automatically and cannot drift from it.
#
#   ./scripts/deploy-pages.sh
#
# Afterwards the production build is restored, so the working tree is left
# holding the same dist/ it had before.
# ---------------------------------------------------------------------------
set -euo pipefail

cd "$(dirname "$0")/.."

REMOTE=$(git config --get remote.origin.url)
REPO=$(basename -s .git "$REMOTE")
STAGE=$(mktemp -d)

echo "→ building for base /$REPO/"
npm run build:pages

cp -r dist/. "$STAGE/"

echo "→ publishing to gh-pages"
git -C "$STAGE" init -q
git -C "$STAGE" checkout -q -b gh-pages
git -C "$STAGE" remote add origin "$REMOTE"
git -C "$STAGE" add -A
git -C "$STAGE" commit -q -m "Publish the built site for GitHub Pages

Static output of \`npm run build:pages\`, based at /$REPO/.
Generated — edit the source on the working branch, not here."
git -C "$STAGE" push -f -q origin gh-pages

rm -rf "$STAGE"

echo "→ restoring the production build"
npm run build >/dev/null

echo "done — https://$(basename "$(dirname "$REMOTE")").github.io/$REPO/"
