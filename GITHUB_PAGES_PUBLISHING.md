# MS Excel Stimulator — Publishing Guide

**Author:** Adewale Samson Adeagbo  
**Role:** DataTech Builder | Data Scientist | Educator  
**Portfolio:** https://cssadewale.pages.dev  
**HMG Concepts:** https://hmgconcepts.pages.dev  
**GitHub:** https://github.com/cssadewale  
**Linked profile:** https://linked.com/in/adewalesamsonadeagbo  
**Email:** buildingmyictcareer@gmail.com  
**Phone:** 2348100866322, 2348094481488

**Current release:** `v5.0.1`  
**Product name:** `MS Excel Stimulator`

---

## Purpose
This file gives the exact GitHub Pages publishing steps for the release-ready `MS Excel Stimulator/` package.

## Files to publish
Upload the **contents** of the `MS Excel Stimulator/` folder to the repository root, preserving the `icons/` subfolder.

## Step-by-step process
1. Sign in to GitHub.
2. Click **New repository**.
3. Repository name suggestion: `ms-excel-stimulator`.
4. Set it to **Public**.
5. Create the repository.
6. Open the repository root in the web interface.
7. Upload these files from `MS Excel Stimulator/`:
   - `index.html`
   - `DataSheet-Pro-v3.html`
   - `xlsx.full.min.js`
   - `manifest.json`
   - `service-worker.js`
   - `brand-photo.jpg`
   - `brand-headshot-pro.png`
   - `brand-logo-transparent-optimized.png`
   - `favicon-16.png`
   - `favicon-32.png`
   - `apple-touch-icon.png`
   - `README.md`
   - `DEPLOYMENT.md`
   - `USER_GUIDE.md`
   - `CHANGELOG.md`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
8. Commit the upload to the `main` branch.
9. Open **Settings → Pages**.
10. Under **Source**, choose **Deploy from a branch**.
11. Select branch **main** and folder **/ (root)**.
12. Save.
13. Wait for the Pages URL to be generated.
14. Open the site and run the deployment testing matrix from `DEPLOYMENT.md`.

## After publishing
- Hard refresh once so the service worker updates.
- Open **HMG Dashboard** and **About the Author**.
- Test **Print Report**, **Brand Pack Export**, **Workbook Index**, **Data Dictionary**, and **Workbook Search**.

## Recommended repository structure
```text
ms-excel-stimulator/
├── index.html
├── DataSheet-Pro-v3.html
├── xlsx.full.min.js
├── manifest.json
├── service-worker.js
├── brand-photo.jpg
├── brand-headshot-pro.png
├── brand-logo-transparent-optimized.png
├── favicon-16.png
├── favicon-32.png
├── apple-touch-icon.png
├── README.md
├── DEPLOYMENT.md
├── USER_GUIDE.md
├── CHANGELOG.md
└── icons/
    ├── icon-192.png
    └── icon-512.png
```
