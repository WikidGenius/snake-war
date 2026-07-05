# Publishing Serpent's Ascent

The game source is browser-playable from GitHub Pages.

## Option A: Fast branch deployment

Use this when you want the URL live with the current static source files.

1. Open the repository settings.
2. Go to **Pages**.
3. Set **Build and deployment** to **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save.

After GitHub finishes publishing, test:

```text
https://WikidGenius.github.io/snake-war/
```

This works because `index.html` currently uses an import map for Babylon.js and loads `src/main.js` directly.

## Option B: Best-practice Vite deployment

Use this when you want GitHub Actions to install dependencies, build `dist/`, and publish the built static site.

1. Add this file at `.github/workflows/pages.yml`.
2. In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually.

```yaml
name: Deploy Serpent's Ascent to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v7

      - name: Set up Node
        uses: actions/setup-node@v6
        with:
          node-version-file: .node-version

      - name: Install dependencies
        run: npm install --no-audit --no-fund

      - name: Build
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v6

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

## Local validation

```bash
npm install
npm run build
npm run preview
```

## iPad test path

1. Pair the controller with the iPad.
2. Open the Pages URL in Safari.
3. Press any controller button once so Safari exposes gamepad state.
4. Tap **Start Game**.
