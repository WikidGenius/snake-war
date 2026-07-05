# Implementation Notes

## Engine and Platform

- Babylon.js for browser-native 3D rendering.
- TypeScript for maintainable game code.
- Vite for fast development and GitHub Pages builds.
- GitHub Actions for repeatable static deployment.

## Repository Layout

```text
.github/workflows/pages.yml  GitHub Pages workflow
src/main.ts                  Stage 1 game code
src/style.css                Responsive HUD and touch controls
```

The first milestone avoids large binary assets. It uses procedural primitive meshes, simple materials, generated audio tones, and CSS UI so the repository remains small and GitHub Pages friendly.

The input layer supports standard gamepads through the browser Gamepad API, with keyboard and touch fallbacks. On iPad, Safari generally exposes controller state after the page receives a gamepad interaction, so the title screen reminds testers to press a controller button before starting.

## Next Improvements

- Add a pause menu and restart flow.
- Add compressed audio effects.
- Replace primitive characters with compressed low-poly glTF models.
- Add saved best time and score.
- Split future stages into separate scene modules.
- Add Playwright smoke tests after the first deployment is stable.
