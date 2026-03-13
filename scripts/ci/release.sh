#!/bin/bash
set -e

# Configure git for the release
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

# Run release-it in CI mode (non-interactive)
# It will use the configuration from .release-it.json
pnpm release-it --ci
