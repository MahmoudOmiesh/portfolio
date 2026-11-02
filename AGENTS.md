<!-- intent-skills:start -->

## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:

- Run `bunx --no-install --package @tanstack/intent intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `bunx --no-install --package @tanstack/intent intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.

<!-- intent-skills:end -->

# Portfolio

- Serve a build with `cd .output && NODE_ENV=production bun server/index.mjs`. Without `NODE_ENV=production` every page returns 500.
- Don't change site copy unless asked.
- Screenshots use made-up demo data, never real people or customers. Export them as webp at 2x.
- Prefer shadcn components. Keep the unused exports in `src/components/ui`.
- No code comments, except for a why the code can't show.
- Commits carry no `Co-Authored-By` trailer or any agent attribution.
