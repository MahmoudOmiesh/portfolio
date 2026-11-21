# Coding standards

Judgement calls for reviewing a diff. Anything mechanical belongs in `.oxlintrc.json` or `lefthook.yml` instead.

- **Reuse first.** Before accepting a new pipeline, loop or helper, check for an existing one in the repo (`useCanvas`, `dither.ts`, `pageHead`, `caseStudies`) or a library that already does it. Flag hand-rolled code a dependency or shared helper would shrink.
- **Hooks own their stability.** A hook that takes a callback or options keeps the latest value in a ref; callers never need `useCallback` to stop it re-initialising.
- **Listing pages stay light.** Modules the home page imports carry metadata only. MDX articles and other heavy content load from the page that shows them.
- **Hydration mismatches get fixed, not hidden.** `suppressHydrationWarning` needs a reason the PR states; time-dependent text hydrates from a build-time value (`__BUILD_YEAR__`) or a `useSyncExternalStore` server snapshot.
- **Generated files move with their source.** A change to the Nile scene, `profile.ts` or `scripts/og.tsx` ships with the regenerated card and favicons; a change to `resume.tex` ships with the rebuilt PDF.
- **Linked fields stay linked.** Values that must agree (a route and its slug, a type and the plugin that emits it) come from one source rather than being written twice.
- **Motion is checked in motion.** UI changes with transitions come with timed frames from `bun run shot --frames`, not only end states.
