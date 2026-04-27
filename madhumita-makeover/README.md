# Madhumita's Makeover Studio & Academy

10-star bridal makeup professional website with multilingual support (EN / বাংলা / हिंदी).

## Folder Structure

```
madhumita-makeover/
├── index.html          ← Main HTML (all sections)
├── netlify.toml        ← Netlify deploy config
├── css/
│   └── style.css       ← All styles + animations
├── js/
│   ├── translations.js ← EN / BN / HI language strings
│   └── main.js         ← Cursor, scroll, particles, FAQ, form
└── assets/
    └── images/         ← Put your own bridal photos here
```

## How to Run Locally

No build tools needed. Just open `index.html` in your browser:

```bash
# Option 1 — Direct open
Double-click index.html

# Option 2 — Use VS Code Live Server extension (recommended)
# Right-click index.html → Open with Live Server

# Option 3 — Python simple server
cd madhumita-makeover
python -m http.server 3000
# Then open http://localhost:3000
```

## How to Deploy on Netlify

### Method 1 — Drag & Drop (Easiest)
1. Go to https://netlify.com and sign up / log in
2. Click **"Add new site" → "Deploy manually"**
3. Drag the entire `madhumita-makeover` folder into the drop zone
4. Your site is live instantly! ✅

### Method 2 — GitHub + Netlify (Best for updates)
1. Push this folder to a GitHub repo
2. Go to Netlify → **"Add new site" → "Import from Git"**
3. Connect your GitHub → Select repo → Click **Deploy**
4. Every time you push to GitHub, Netlify auto-deploys ✅

## Contact Form
The contact form uses **Netlify Forms** — it works automatically after deploy.
Form submissions appear in your Netlify dashboard under **Forms**.
No backend code needed!

## Customization Checklist
- [ ] Replace `+91 98000 00000` with real phone number (index.html)
- [ ] Replace `madhumita@makeoverstudio.in` with real email (index.html)
- [ ] Replace the studio address in the Contact section (index.html)
- [ ] Replace Unsplash image URLs with your own real bridal photos
- [ ] Update pricing if needed (index.html — Pricing section)
- [ ] Update social media links (Instagram, Facebook, YouTube, Pinterest)
- [ ] Add your real Google Maps embed URL in the Locations section
- [ ] Add favicon.svg in assets/ folder

## Languages Supported
- English (EN) — Default
- Bengali (বাংলা)
- Hindi (हिंदी)

To add more languages, edit `js/translations.js` and add a new language object + button in `index.html`.
