# 💄 Madhumita's Makeover Studio & Academy

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**A premium, fully responsive bridal makeup studio website — delivered as a freelance project.**
Multilingual · Parallax · Advanced Animations · Netlify Forms · Zero Dependencies

[🌐 Live Demo](https://madhumita-makeover.netlify.app) · [📸 Screenshots](#-screenshots) · [✨ Features](#-features) · [🚀 Deploy](#-deployment)

</div>

---

## 📌 Project Overview

Production-ready **freelance website** built for **Madhumita's Makeover Studio & Academy** — an award-winning bridal makeup artist based in Kolkata, West Bengal.

The goal was to deliver a luxury-grade website that reflects the premium nature of bridal artistry — cinematic visuals, smooth scroll animations, a working multilingual switcher, and a live booking form — all in **pure HTML, CSS, and JavaScript with zero frameworks or build tools.**

| Detail | Info |
|--------|------|
| **Client** | Madhumita's Makeover Studio & Academy, Kolkata |
| **Type** | Freelance · Static Website |
| **Stack** | HTML5, CSS3, Vanilla JavaScript |
| **Deployment** | Netlify |
| **Languages Supported** | English · Bengali (বাংলা) · Hindi (हिंदी) |
| **Status** | ✅ Delivered & Live |

---

## ✨ Features

### 🎨 Design & UI
- Full-screen hero with real bridal photography, parallax scroll effect, and blur overlay
- Masonry portfolio gallery grid with hover zoom and label reveal
- Custom gold cursor with smooth lagging ring follow
- Floating gold particle animation in hero section
- Scroll progress bar in brand gold
- Sticky navbar that compresses and darkens on scroll with glassmorphism blur
- Floating WhatsApp button with pulse glow animation

### 🌍 Multilingual
- 3-language switcher — **English / বাংলা / हिंदी**
- Every single line of content translates instantly on click
- Language strings cleanly separated in `js/translations.js`

### 📄 Sections (20 Total)
| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | First impression · CTA buttons · Live stats |
| 2 | About | Artist profile · certifications · brand philosophy |
| 3 | Portfolio | Masonry gallery · filter tabs |
| 4 | Services | 6 service cards with duration info |
| 5 | Pricing | 3 transparent packages with ₹ pricing |
| 6 | Testimonials | 3 bride reviews · parallax bg |
| 7 | Why Choose Us | 6 trust pillars |
| 8 | Hygiene & Safety | Sanitization standards |
| 9 | Service Locations | Google Maps embed + area list |
| 10 | Academy | Courses · awards · certifications |
| 11 | FAQ | Accordion-style Q&A |
| 12 | Blog | 3 beauty article cards |
| 13 | Social Media | Links to all platforms |
| 14 | Contact | Info + Netlify booking form |
| 15 | Footer | Links · copyright · social icons |

### ⚙️ Technical
- Scroll-triggered reveal animations (fade up / left / right) via `IntersectionObserver`
- CSS `background-attachment: fixed` parallax on 4 sections
- Netlify Forms integration — no backend needed
- FAQ accordion built in vanilla JS
- Fully responsive — mobile breakpoints at 900px
- Google Fonts loaded via CDN (Cormorant Garamond + Jost)
- No npm, no webpack, no React — opens directly in browser

---

## 📁 Folder Structure

```
madhumita-makeover/
├── index.html              ← All 20 sections
├── netlify.toml            ← Netlify deploy + headers config
├── README.md
├── css/
│   └── style.css           ← All styles + animations + responsive
├── js/
│   ├── translations.js     ← EN / BN / HI language strings
│   └── main.js             ← Cursor · scroll · particles · FAQ · form
└── assets/
    └── images/             ← Replace with client's real photos
```

---

## 🖥️ Run Locally

No installation required. Three options:

**Option 1 — Direct open**
```bash
# Just double-click index.html in your file manager
```

**Option 2 — VS Code Live Server (recommended)**
```
Right-click index.html → Open with Live Server
```

**Option 3 — Python server**
```bash
cd madhumita-makeover
python -m http.server 3000
# Open http://localhost:3000
```

---

## 🚀 Deployment

### Netlify — Drag & Drop (2 minutes)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site → Deploy manually**
3. Drag the entire `madhumita-makeover/` folder into the drop zone
4. Your site is live with a free `.netlify.app` URL ✅

### Netlify — GitHub Auto Deploy
```bash
# 1. Push this repo to GitHub
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/madhumita-makeover-studio.git
git push -u origin main

# 2. Go to Netlify → Add new site → Import from Git
# 3. Connect GitHub → Select repo → Deploy
# Every push to main auto-deploys ✅
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#c9a96e` |
| Gold Light | `#e8d5b0` |
| Background Dark | `#0e0a04` |
| Body Font | Jost (300–500) |
| Heading Font | Cormorant Garamond (300, italic) |
| Border Radius | None (sharp luxury aesthetic) |

---

## 📋 Client Customization Checklist

- [ ] Replace phone number (`98000 00000`) in `index.html`
- [ ] Replace email (`madhumita@makeoverstudio.in`) in `index.html`
- [ ] Update studio address in Contact section
- [ ] Replace Unsplash image URLs with real client photos
- [ ] Update pricing figures in Pricing section
- [ ] Add real social media URLs (Instagram, Facebook, YouTube)
- [ ] Replace Google Maps embed URL with exact studio location
- [ ] Add `favicon.svg` in `assets/` folder

---

## 📦 Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic structure, Netlify form attributes |
| CSS3 | Custom properties, Grid, Flexbox, `@keyframes`, `backdrop-filter` |
| Vanilla JS | IntersectionObserver, cursor, particles, i18n, FAQ accordion |
| Google Fonts | Cormorant Garamond + Jost via CDN |
| Netlify | Hosting + Forms (no backend) |
| Unsplash | Placeholder photography (replace with client photos) |

---

## 👨‍💻 Built By

**Manas** — Cloud & DevOps Engineer · Freelance Web Developer  
📍 Kolkata, India  
🔗 [GitHub](https://github.com/YOUR_USERNAME) · [LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN)

> *This project was built and delivered as a freelance engagement. Client identity shared with permission.*

---

## 📄 License

This project is delivered exclusively to the client.  
The source code is shared on GitHub **for portfolio purposes only.**  
Not licensed for reuse, resale, or redistribution without permission.

---

<div align="center">
  <sub>Built with precision · Delivered with pride · Kolkata 2025</sub>
</div>
