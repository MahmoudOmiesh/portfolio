#!/bin/sh
pattern='(^|[^a-zA-Z0-9_-])-?(text|leading|tracking|m[trblxy]?|p[trblxy]?|gap(-[xy])?|w|h|size|max-w|min-w|max-h|min-h|rounded)-\['

if grep -rnE "$pattern" src --include='*.ts' --include='*.tsx' --include='*.css' --include='*.mdx' \
  --exclude-dir=ui --exclude=routeTree.gen.ts; then
  echo "Use Tailwind's named scale instead of arbitrary values (see AGENTS.md)." >&2
  exit 1
fi
