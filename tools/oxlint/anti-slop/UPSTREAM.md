# Upstream

- Source: https://github.com/dmmulroy/anti-slop (`skills/install-anti-slop/assets/anti-slop`)
- Copied from the locally installed `install-anti-slop` skill with its `scripts/install.mjs`, skill folder hash `97962dc9fad565ca7695bf57805d9d0138ce1def` (skills CLI lock, updated 2026-10-16). The exact upstream commit is unknown.
- Installed paths: `tools/oxlint/anti-slop/` (generic plugin at `index.ts`; the Effect plugin is copied but not registered because the repo does not depend on `effect`).
- Local deviations: none. `tools/oxlint/anti-slop/**` is ignored by both oxlint and oxfmt so the vendored code keeps its upstream formatting.
