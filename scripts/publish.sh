#!/usr/bin/env bash
set -euo pipefail

# Publish layers-ui to npm in one command.
# Usage:
#   ./scripts/publish.sh          # patch bump (default)
#   ./scripts/publish.sh minor
#   ./scripts/publish.sh major
#   ./scripts/publish.sh patch --dry-run

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

BUMP="${1:-patch}"
DRY_RUN=false

if [[ "${2:-}" == "--dry-run" || "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  if [[ "${1:-}" == "--dry-run" ]]; then
    BUMP="patch"
  fi
fi

echo "→ Building layers-ui..."
npm run build

if [[ "$DRY_RUN" == true ]]; then
  echo "→ Dry run (no version bump, no publish)"
  npm publish --dry-run --access public
  exit 0
fi

echo "→ Bumping version ($BUMP)..."
npm version "$BUMP" --no-git-tag-version

VERSION="$(node -p "require('./package.json').version")"
echo "→ Publishing layers-ui@$VERSION to npm..."
npm publish --access public

echo "✓ Published layers-ui@$VERSION"
echo "  Update consumers: npm install layers-ui@^$VERSION"
