# Anchor Church London Website

A responsive, multi-page website for Anchor Church London. It includes the home, about, visitor, ministries, church life, and contact pages, with a GitHub Pages publishing workflow already configured.

## Important item to confirm

The Sunday service time is intentionally shown as `Time to be confirmed`. Replace that text after the church confirms the correct time.

## Recommended repository setup

Create a separate GitHub repository for the church, such as `anchor-church-london`. This keeps the church website, access, history, and future handoff separate from personal projects.

## Open and run in VS Code

1. Install [Node.js 22 LTS](https://nodejs.org/) and [Visual Studio Code](https://code.visualstudio.com/).
2. Extract this project folder.
3. In VS Code, choose **File > Open Folder** and select the extracted folder.
4. Open **Terminal > New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev:static
   ```

6. Open the local address shown in the terminal.

Stop the local website with `Ctrl+C` in the terminal.

## Publish with GitHub Pages

1. On GitHub, create a new empty repository named `anchor-church-london`.
2. Do not add a README, `.gitignore`, or license when creating it.
3. In the VS Code terminal, run the following. Replace `YOUR-GITHUB-USERNAME` with your actual username:

   ```bash
   git init
   git add .
   git commit -m "Create Anchor Church London website"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/anchor-church-london.git
   git push -u origin main
   ```

4. In the GitHub repository, open **Settings > Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy Anchor Church website** to finish.

The workflow automatically detects the repository name, so project-site links and images work under a URL such as:

`https://YOUR-GITHUB-USERNAME.github.io/anchor-church-london/`

## Build files for Hostinger

When the church is ready to use Hostinger, run:

```bash
npm run build:static
```

This creates an `out` folder. Upload the contents of `out` into the domain's `public_html` folder in Hostinger. Do not upload `node_modules`.

## Where to make common changes

- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Visitor page and service information: `app/visit/page.tsx`
- Ministries: `app/ministries/page.tsx`
- Church Life: `app/church-life/page.tsx`
- Contact information: `app/contact/page.tsx`
- Colours, spacing, animation, and responsive design: `app/globals.css`
- Header/navigation: `app/components/Header.tsx`
- Footer: `app/components/Footer.tsx`
- Logo and family banner: `public/images`

## Contact form behaviour

The contact form opens the visitor's normal email application with the message filled in. This keeps the site fully static and compatible with GitHub Pages. The church email address is `anchorchurchlc1@gmail.com`.

## Before final public launch

- Confirm and replace the Sunday service time everywhere it appears.
- Confirm the street address and church email one final time.
- Add approved church photos to the Church Life page.
- Add official Facebook, Instagram, or YouTube links when provided.
- Connect the custom domain only after the GitHub Pages version is approved.
