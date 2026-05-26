# MS Excel Stimulator — Live Publish Walkthrough

## What you need before starting
- A GitHub account for GitHub Pages
- Optionally, a Netlify account for a permanent Netlify site
- The complete `MS Excel Stimulator/` folder
- A modern browser such as Chrome or Edge

---

## Option 1 — Publish to GitHub Pages

### Step 1: Create a repository
1. Sign in to GitHub.
2. Click **New repository**.
3. Repository name suggestion: `ms-excel-stimulator`.
4. Set visibility to **Public**.
5. Click **Create repository**.

### Step 2: Upload the release files
1. Open the repository root.
2. Click **Add file → Upload files**.
3. Open the `MS Excel Stimulator/` folder on your computer.
4. Drag **all files and folders inside it** into GitHub.
5. Ensure the `icons/` folder uploads correctly.
6. Click **Commit changes**.

### Step 3: Enable GitHub Pages
1. Open **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Select **main** branch.
4. Select **/ (root)** folder.
5. Click **Save**.

### Step 4: Wait for deployment
1. Wait 1–3 minutes.
2. Refresh the Pages section.
3. GitHub will display a live URL.

### Step 5: Open and test
1. Open the live URL.
2. Hard-refresh once.
3. Run the hosted QA checklist in `HOSTED_QA_CHECKLIST.md`.

---

## Option 2 — Publish to Netlify

### Step 1: Open Netlify Drop
1. Go to `https://app.netlify.com/drop`.

### Step 2: Upload the folder
1. Drag the **entire `MS Excel Stimulator/` folder** onto the drop area.
2. Wait for upload and deployment.
3. Netlify will generate a public URL.

### Step 3: Test the live URL
1. Open the live URL.
2. Hard-refresh once.
3. Run the hosted QA checklist in `HOSTED_QA_CHECKLIST.md`.

### Step 4: Optional permanent site
1. Click **Claim your site**.
2. Sign in or create a free Netlify account.
3. Save the generated site under your account.

---

## Option 3 — Publish to Cloudflare Pages

### Step 1: Create Pages project
1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Create a **Pages** project.
4. Choose manual asset upload if available.

### Step 2: Upload contents
1. Upload all files from `MS Excel Stimulator/`.
2. Keep the `icons/` folder structure.
3. Deploy and note the `.pages.dev` URL.

### Step 3: Test live URL
1. Open the URL.
2. Hard-refresh once.
3. Run `HOSTED_QA_CHECKLIST.md`.

---

## If something looks outdated after publish
- Hard refresh with `Ctrl+F5`
- Clear browser site data
- Re-open the site in an incognito/private window

---

## Recommendation
- Use **GitHub Pages** for a simple portfolio-style permanent URL
- Use **Netlify** for fastest drag-and-drop deployment
- Use **Cloudflare Pages** if you want another free HTTPS host
