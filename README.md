# Serpent's Ascent — Stage 1

Playable browser prototype for **Serpent's Ascent**, published from `snake-war` to GitHub Pages.

## Play URL

After GitHub Pages is enabled for GitHub Actions and the deploy workflow succeeds:

```text
https://WikidGenius.github.io/snake-war/
```

## Current vertical slice

You are a neon-green baby snake in a stylized suburban backyard. Eat **10 mice with glowing pink noses**, avoid Bluey, gardeners, and the lawnmower, then trigger the first evolution placeholder.

## Controls

| Input | Action |
|---|---|
| Left stick / WASD | Move |
| Right stick / arrows / touch drag | Camera |
| RT / Shift | Dash |
| LT / Alt | Stalk |
| X / Space | Bite nearby mouse |
| Y / E | Dramatic Flop |
| D-pad Up / P | Predator Vision scent trails |

For iPad testing, pair the controller first, open the Pages URL in Safari, press any controller button once, then start the game.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The Vite base path is `/snake-war/` so built assets resolve from the GitHub Pages project URL.

## Deployment

The repository includes `.github/workflows/pages.yml`. In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Pushes to `main` will build and publish `dist/`.
