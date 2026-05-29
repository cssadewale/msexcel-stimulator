# MS Excel Stimulator — Deployment Step by Step

**Release:** v5.1.0  
**Date:** 2026-05-29

## 1. Important principle
This product uses only free-based tools. It does not rely on any AI API because AI API billing is not cost effective for the intended deployment model.

## 2. Files you must keep together
Do not deploy only `index.html` by itself. Keep these files together:
- `index.html`
- `DataSheet-Pro-v3.html`
- `xlsx.full.min.js`
- `manifest.json`
- `service-worker.js`
- `404.html`
- `.nojekyll`
- `_headers`
- `robots.txt`
- `netlify.toml`
- all brand image files
- the full `icons/` folder
- documentation files if you want the hosted package to remain complete

## 3. Pre-deployment local test
### Option A — quick browser test
1. Open the package folder.
2. Double-click `index.html`.
3. Confirm the interface loads.
4. Test core buttons: Help, About, Home, Report, Pack, Ops, Search.

### Option B — proper local HTTP test
1. Open a terminal inside the package folder.
2. Run:
   ```bash
   python3 -m http.server 8080
   ```
3. Open:
   ```
   http://127.0.0.1:8080/
   ```
4. Test:
   - service worker registration
   - PWA-related behavior
   - XLSX import/export
   - dashboard pages
   - Feature Catalog
   - Command Palette
   - Workbook Health
   - Data Profile

## 4. GitHub Pages — exact steps
1. Sign in to GitHub.
2. Create a new repository or open your existing repository.
3. Upload the contents of the package folder to the repository root.
4. Make sure `icons/` remains a real folder and is not flattened.
5. Commit the files to the `main` branch.
6. Open the repository.
7. Click **Settings**.
8. In the left menu, click **Pages**.
9. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
10. Under **Branch**, choose:
    - branch: `main`
    - folder: `/ (root)`
11. Click **Save**.
12. Wait for GitHub Pages to build the site.
13. Open the generated URL.
14. Hard refresh the page once.
15. Test the live site.

## 5. Netlify — exact steps
1. Open `https://app.netlify.com/drop`.
2. Drag the entire prepared package folder into the drop zone.
3. Wait until Netlify gives you a URL.
4. Open that URL.
5. Hard refresh the page once.
6. Test the main actions and workbook features.
7. If the deployment is correct, claim the site with your free Netlify account.

## 6. Cloudflare Pages — exact steps
1. Create or open a free Cloudflare account.
2. Open **Workers & Pages**.
3. Click **Create application**.
4. Choose **Pages**.
5. Create a static upload project.
6. Upload the prepared package files.
7. Wait for deployment.
8. Open the live URL.
9. Hard refresh once.
10. Run live QA.

## 7. Local network deployment
1. Open a terminal in the package folder.
2. Run:
   ```bash
   python3 -m http.server 8080
   ```
3. Find your computer IP address.
4. On another device in the same network, open:
   ```
   http://YOUR-IP:8080/
   ```
5. Use this only for private LAN testing.

## 8. Post-deployment cache refresh
Because the app uses a service worker, always do this after deploying an updated release:
1. Open the live site.
2. Hard refresh:
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
3. If the old build still appears:
   - open DevTools
   - go to **Application**
   - open **Service Workers**
   - unregister the old worker
   - clear site storage
   - reload the page

## 9. Minimum hosted QA checklist
Test these after deployment:
- app loads without blank screen
- Help opens
- About opens
- Home opens
- Report opens
- Pack exports
- Ops opens
- Search opens
- Feature Catalog opens
- Deployment Playbook opens
- Command Palette opens with `Ctrl+/`
- Workbook Health sheet can be generated
- Data Profile sheet can be generated
- XLSX save/open works
- dashboard and About sheet still work
- service worker does not trap an older build

## 10. Common mistakes to avoid
- uploading only `index.html`
- forgetting `xlsx.full.min.js`
- forgetting the `icons/` folder
- forgetting to hard-refresh after deployment
- testing PWA features only through `file://`
- editing or removing service-worker-related files without updating the release package

## 11. Recommendation
For simplicity and zero-cost deployment:
- use **GitHub Pages** if the project already lives on GitHub
- use **Netlify** if you want fast drag-and-drop deployment
- use **Cloudflare Pages** if you prefer Cloudflare hosting tools

## 12. Final note
The platform remains static-hosting friendly, free-tool based, and cost-conscious. No AI API is required for deployment or normal operation.
