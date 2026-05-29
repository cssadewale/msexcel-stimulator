# Topbar Freeze Hotfix Report

Date: 2026-05-29

## Issue investigated
On the hosted MS Excel Stimulator build, clicking the titlebar buttons from **Help** onward could leave the interface appearing frozen or unresponsive.

Affected cluster:
- ❓ Help
- 👤 About
- 🏠 Home
- 🖨️ Report
- 📦 Pack
- 🏢 Ops
- 🔎 Search

## Root causes identified from source review

### 1. First-run modal collision
Two different startup systems were active in the page:
- onboarding modal (`modal-onboarding-plus`)
- branded welcome modal (`modal-brand-welcome`)

Both could be opened during first load, creating stacked full-screen overlays and interaction dead-ends.

### 2. Action handlers did not clear startup overlays
The affected topbar actions could run while startup overlays remained open, so new modals/sheet navigation were triggered under or alongside existing overlays.

### 3. Branded sheet navigation rebuilt pages unnecessarily
The branded dashboard/about navigation paths were rebuilding premium sheets even when those sheets already existed. That adds avoidable work and can feel like a freeze on slower devices.

### 4. Stale service-worker cache risk
Even after fixing the HTML, hosted users could still receive an older cached version unless the cache key changed.

## Fix applied

### Files patched
- `index.html`
- `DataSheet-Pro-v3.html`
- `404.html`
- `service-worker.js`
- `CHANGELOG.md`

### Hotfix behavior added
A late-load runtime patch now:
- prevents the onboarding and welcome modals from remaining open together
- closes startup overlays before Help/About/Home/Report/Pack/Ops/Search actions run
- marks the startup flow as completed once the user proceeds through the welcome flow
- reuses existing `HMG Dashboard` / `About the Author` sheets where possible instead of rebuilding them unnecessarily
- wraps enterprise search/console actions so they do not launch on top of startup overlays

### Cache invalidation
The service worker cache key was updated to:
- `ms-excel-stimulator-free-v2-hotfix-20260529`

## Deploy notes
After publishing the updated files:
1. hard-refresh the browser
2. if needed, unregister the old service worker once
3. reload the page so the new cache key takes over

## Expected result after deployment
- no more stacked startup overlays blocking interaction
- Help-side topbar actions should open cleanly
- Home/About navigation should feel lighter because existing branded sheets are reused
- users should receive the hotfix instead of a stale cached build
