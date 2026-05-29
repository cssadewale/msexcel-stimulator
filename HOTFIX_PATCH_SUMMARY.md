# Topbar Freeze Hotfix — Short Patch Summary

Date: 2026-05-29
Version: v5.0.3

## What was added
A late-load runtime patch was appended near the bottom of these HTML files, right before `</body>`:
- `index.html`
- `DataSheet-Pro-v3.html`
- `404.html`

Patch marker:
```html
<!-- MSES_TOPBAR_FREEZE_HOTFIX_2026_05_29 -->
```

## What the patch does
- closes startup overlays before Help/About/Home/Report/Pack/Ops/Search actions run
- prevents onboarding and welcome modals from remaining open together
- reuses existing `HMG Dashboard` and `About the Author` sheets where possible
- patches enterprise console and workbook search launches so they do not stack over startup overlays
- marks first-run flow as completed when appropriate

## Cache update
`service-worker.js` cache name changed to:
```js
const CACHE_NAME = 'ms-excel-stimulator-free-v2-hotfix-20260529';
```

## Minimal files required for this hotfix
If you only want the bare minimum patch set, push these files:
- `index.html`
- `DataSheet-Pro-v3.html`
- `404.html`
- `service-worker.js`

## Recommended full push set
Push the full `MS Excel/` package so all deployment, PWA, branding, docs, and QA files stay in sync.
