# affectionner.me

Personal portfolio of Magdaléna Haľková — Wor(l)d addict.

---

## Project structure

```
affectionner/
├── index.html               ← main page (edit content here)
├── style.css                ← all styles (colours, layout, components)
├── script.js                ← desktop interactions (drag, open/close windows)
├── images/                  ← drop your photos here
│   └── README.md
├── .vscode/
│   ├── settings.json        ← editor config + colour theme
│   └── extensions.json      ← recommended extensions
├── affectionner.code-workspace  ← open this in VSCode
└── README.md
```

---

## Getting started

1. **Open the workspace**
   Double-click `affectionner.code-workspace` — or in VSCode:
   `File → Open Workspace from File…`

2. **Install recommended extensions**
   VSCode will prompt you — click **Install All**
   Most important: **Live Server** (ritwickdey.LiveServer)

3. **Preview in browser**
   Right-click `index.html` → **Open with Live Server**
   Or click **Go Live** in the bottom status bar.
   The page reloads automatically as you save.

---

## Quick edit guide

### Colours
All colours are CSS variables at the top of `style.css`:
```css
:root {
  --coral:  #F4614A;   /* primary accent */
  --blue:   #3EC8D4;   /* secondary accent */
  --blush:  #F2B8B0;   /* soft pink */
  --cream:  #FDF0EC;   /* background */
  --dark:   #1A1A1A;   /* text */
  --muted:  #7A6A66;   /* secondary text */
}
```
Change one value → updates everywhere instantly.

### Content
Every text field in `index.html` has an `<!-- EDIT -->` comment next to it.
Search for `EDIT` in VSCode (`Ctrl+F` / `Cmd+F`) to jump to editable fields.

### Adding a photo to the gallery
Replace a placeholder slot in `index.html`:
```html
<!-- BEFORE -->
<div class="g-slot"><div class="g-inner">🖼<br>event</div></div>

<!-- AFTER -->
<div class="g-slot">
  <img src="images/my-event-photo.jpg"
       alt="World Usability Day 2024"
       style="width:100%;height:100%;object-fit:cover;border-radius:6px;">
</div>
```
Drop the image file into the `images/` folder first.

### Adding a recommendation
Copy one of the `.rec-card` blocks in `index.html` and fill in the quote, name, and title.

### Removing the WIP banner
When the site is ready to go live, delete this block from `index.html`:
```html
<!-- WORK IN PROGRESS BANNER — remove this block when site is live -->
<div style="...">
  ...work in progress — come back soon...
</div>
```

### Adding a new role window
1. Add a folder button in the sidebar (`index.html`)
2. Add a `.win` block with `id="win-yourname"`
3. Optionally add a `.img-win` block with `id="img-yourname"`
4. The `tog('yourname')` function handles the rest automatically

---

## Deployment

This is a static site — one folder, no build step, no dependencies.

**Option A — drag and drop**
Upload the whole folder to any static host:
- [Netlify Drop](https://app.netlify.com/drop) — drag folder, get URL instantly
- [Vercel](https://vercel.com) — connect GitHub or drag folder

**Option B — GitHub Pages**
1. Push folder to a GitHub repo
2. Settings → Pages → Source: main branch / root
3. Point affectionner.me DNS to GitHub Pages

**Option C — your hosting provider**
Upload via FTP/SFTP. Make sure `index.html` is at the root.

---

## Notes

- All pixel art images are embedded as base64 in `index.html` — no external image files needed for the character illustrations
- The `images/` folder is for your own photos (gallery, etc.)
- The site is fully self-contained — works offline, no CDN dependencies
- Font: `Courier New` (system font, no Google Fonts needed)

---

*"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better." — Beckett*
