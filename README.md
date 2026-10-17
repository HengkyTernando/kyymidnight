# kyymidnight

A lightweight, responsive single-page portfolio built with semantic HTML,
vanilla CSS, JavaScript modules, and locally vendored Anime.js. The original
transparent mascot poses are used through the `<coding-mascot>` web component.

## Run locally

From this folder in PowerShell:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000> in your browser. Stop the server with `Ctrl+C`.
Serving over HTTP lets the browser load JavaScript modules and the mascot PNGs.

## Anime.js

Anime.js 3.2.2 is pinned in `package.json` and vendored in
`public/vendor/anime.es.js`, so the site animations do not rely on a CDN at
runtime. To refresh the local copy after installing dependencies, run
`npm install` and `npm run vendor:anime`. The package license is kept alongside
the vendored library.

## Personalize

Edit `site-content.js` to update skills, projects, interests, learning topics,
and contact details. WhatsApp, Instagram, and TikTok links are configured in
`site-content.js`. The SiswaMart card is a visual recreation of
its live homepage, using the site's food illustration in
`public/images/projects/siswamart-food.png`; its link opens
<https://siswamartid.my.id/>. The kyymidnight card uses the original mascot
artwork.

All 15 original mascot PNGs are in `public/images/mascots/`. Use
`<coding-mascot pose="thinking"></coding-mascot>` with any of the pose names:
`neutral`, `happy`, `sleeping`, `alert`, `waving`, `thinking`, `cool`,
`focused`, `coding`, `calm`, `napping`, `running`, `idea`, `love`, and `back`.
