# Mustafa Abughareebeh - Portfolio (Static Website)

This folder contains a simple, responsive personal portfolio website using the brand colors:
- Navy: `#004aad`
- Yellow: `#fdd04c`

## Quick start
- Double click `index.html` to open it in a browser.
- For the best results (and working links), open the folder in VS Code and use the "Live Server" extension.

## Deploy on GitHub Pages (recommended)
1. Create a GitHub repository (e.g., `mustafa-portfolio`).
2. Upload all files in this folder (keep the `assets/` directory).
3. In GitHub: **Settings → Pages → Build and deployment → Source**
   - Select **Deploy from a branch**
   - Branch: `main` (or `master`) / Folder: `/root`
4. Your site will be live at: `https://<username>.github.io/<repo>/`

## What to edit
- `index.html`: content, project links, certificate links
- `styles.css`: colors/spacing
- `assets/`: CV, certificates, slide decks, profile photo

## Add your profile photo
Current placeholder image:
- `assets/profile.svg`

To use your real photo:
1. Put your image in `assets/` (recommended: square JPG/PNG, e.g., `profile.jpg`).
2. In `index.html`, find:
   - `src="assets/profile.svg"`
3. Replace it with:
   - `src="assets/profile.jpg"`

Tip: a square image (800x800) will look best.
