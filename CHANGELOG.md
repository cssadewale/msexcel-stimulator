# MS Excel Stimulator — Changelog


## v5.1.0 — Free-Tools Productivity Expansion (2026-05-29)

### Summary
This minor release extends the workbook with new free, browser-only productivity and documentation features without removing any existing functionality.

### Added
- searchable Feature Catalog in the app
- keyboard-first Command Palette (`Ctrl+/`)
- Workbook Health sheet generator
- Data Profile sheet generator for the active sheet
- embedded Deployment Playbook modal
- `FEATURE_SYSTEM_REFERENCE.md`
- `DEPLOYMENT_STEP_BY_STEP.md`
- `FREE_TOOLS_ONLY_NOTE.md`

### Updated
- README, DEPLOYMENT, and USER_GUIDE references bumped to `v5.1.0`
- service-worker cache version updated so hosted users receive the new enhancement layer
- documentation now more clearly states the no-AI-API architecture choice

---

## v5.0.3 — Topbar Freeze Hotfix (2026-05-29)

### Summary
This hotfix resolves topbar action freezes and interaction dead-ends affecting the Help-side button cluster on the hosted build.

### Fixed
- prevented the onboarding modal and branded welcome modal from remaining open together on first launch
- patched Help, About, Home, Report, Pack, Ops, and Search titlebar actions to close startup overlays before running
- optimized Home/About navigation paths to reuse existing branded sheets instead of rebuilding them unnecessarily
- bumped the service worker cache key so hosted users receive the new HTML/JS immediately after deployment

---

## v5.0.2 — Publishing Helpers & Release Support (2026-05-22)

### Summary
This patch adds live publishing support files, hosted QA guidance, and release handoff helpers to the `MS Excel Stimulator/` folder.

### Added
- `.nojekyll`
- `netlify.toml`
- `_headers`
- `404.html`
- `robots.txt`
- `LIVE_PUBLISH_WALKTHROUGH.md`
- `HOSTED_QA_CHECKLIST.md`
- `PUBLISHER_HANDOFF.md`
- refreshed zip release for this version

### Updated
- README, DEPLOYMENT, and USER_GUIDE bumped to `v5.0.2`
- package inventory expanded with publish-helper files
- release guidance aligned with GitHub Pages / Netlify workflows

---

## v5.0.1 — Publishing Guides & QA Validation (2026-05-22)
- dedicated GitHub Pages and Netlify publishing guides
- release notes file
- QA report

## v5.0.0 — MS Excel Stimulator Enterprise Rebrand (2026-05-22)
- product rename to MS Excel Stimulator
- enterprise console, workbook index, data dictionary, and audit export
- logical worksheet expansion to 2000 × 1200
- smart render window
