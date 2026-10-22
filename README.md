# NetSpecForge — public website

Static marketing site for NetSpecForge, licensed on-premises network-engineering
software (design, size, validate, diagnose, document) — a product of
Perfection IT Services (https://perfection-it.com, ABN 25 839 782 423).

Zero build step. Zero npm dependencies. Google Fonts (Inter) for typography,
vanilla JS only — the site loads instantly and works offline once served.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Single-page landing site |
| `404.html` | Not-found page (also the Azure navigation-fallback target) |
| `style.css` | All styling; palette as CSS custom properties |
| `favicon.svg` | Hand-written icon (no external assets) |
| `robots.txt` | Crawler policy |
| `sitemap.xml` | Sitemap (canonical domain) |
| `staticwebapp.config.json` | Azure Static Web Apps config + security headers |
| `.github/workflows/azure-static-web-apps.yml` | Azure SWA deployment workflow |

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server 8080
```

then browse to http://localhost:8080

## Create the private GitHub repo and push (run these yourself)

`gh` is installed but NOT authenticated, and there is no GITHUB_TOKEN, so this
was not done for you. From the site directory, after authenticating:

```
cd C:\Users\Administrator.HOMEDC\Documents\netspecforge-site
gh auth login
gh repo create netspecforge --private --source . --remote origin --push
```

`gh auth login` prompts are interactive: choose GitHub.com, HTTPS, and
authenticate with a browser/device code. Adjust the repo name (`netspecforge`)
if you want a different one.

## Deploy to Azure Static Web Apps

1. Azure portal > Create a Static Web App, linked to the new GitHub repo.
   - App location: `/`
   - Output location: leave empty (zero-build static site)
2. GitHub repo > Settings > Secrets and variables > Actions > add secret
   `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from the
   Azure portal (your Static Web App > Deployment tokens).
3. The included workflow runs on push to `main` and deploys automatically.
   Edit the placeholders at the top of
   `.github/workflows/azure-static-web-apps.yml` if your layout differs.

## Notes

- The "Get NetSpecForge" CTA is an honest placeholder: it anchors to the `#get`
  section, which explains the Windows / Ubuntu / Debian builds. No fake
  download URLs or version numbers exist anywhere in the site.
- Status colours are always paired with a text label (PASS / WARNING / FAIL /
  INSUFFICIENT DATA), consistent with the product's own validation rules.

<!-- verification: redeploy trigger -->
