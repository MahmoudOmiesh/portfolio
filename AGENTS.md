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

- Routes, `head`, SEO or deploy changes: load Intent's `@tanstack/router-core#router-core/ssr` and `@tanstack/start-client-core#start-core/deployment` first.
- The résumé source is `resume/resume.tex`. Edit it here, not in Overleaf. `bun run resume` builds it into `public/resume.pdf` with tectonic, and the pre-commit hook does the same whenever the source is staged. Keep the `\ifPDFTeX` block: tectonic runs XeTeX, and `fontenc` there swaps XCharter for Computer Modern.
- The site URL, email, name and role live only in `src/content/profile.ts`.
- The hero is a pixel-art Nile scene drawn by `src/components/nile/scene.ts`, a pure renderer; `nile-scene.tsx` feeds it the hour from `profile.location`. Pixel canvases go through `useCanvas` in `src/components/canvas.ts`, which owns the clock, pointer and reduced motion. `bun run og` renders `src/assets/opengraph-image.png` from the scene at sunset with Satori, plus the favicons, which are separate pixel art in `scripts/og.tsx`; the pre-commit hook reruns it when the scene, profile or script is staged. The card is imported rather than kept in `public/` so its URL changes with its content and link previews drop their cached copy. `@fontsource/schibsted-grotesk` exists only for Satori, which can't read the variable font the site uses.
- See a change in a browser with `bun run build && bun run start` (port 4317), then `bun run shot` (`--help` lists hover, element crops and timed frames for motion). Shots land in `.shots/`. `magick` converts to webp; PIL and `cwebp` are not installed.
- For a visual-direction request, show 2–3 prototypes with `html_render` before editing `src/`.
- Review diffs against `CODING_STANDARDS.md`.
- Don't change site copy unless asked.
- Screenshots use made-up demo data, never real people or customers. Export them as webp at 2x.
- Prefer shadcn components. Keep the unused exports in `src/components/ui`.
- No code comments, except for a why the code can't show.
- Commits carry no `Co-Authored-By` trailer or any agent attribution.
