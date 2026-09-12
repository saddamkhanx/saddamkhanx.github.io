# Minimal Academic Portfolio

A lightweight, responsive, and minimalist academic portfolio website designed for researchers, students, and academics.

Live Demo & Host: [GitHub Pages](https://pages.github.com)

---

## Features

- **Minimal & Distraction-Free**: Clean typography and hierarchy inspired by top academic researcher websites.
- **Zero Dependencies**: Pure semantic HTML5, modern CSS, and lightweight vanilla JavaScript. No build step or Node/Ruby toolchain needed.
- **Dark & Light Mode**: Automatic system preference detection (`prefers-color-scheme`) with a manual toggle stored in `localStorage`.
- **Academic Sections**:
  - Bio / About with social badges (GitHub, LinkedIn, Email, CV download).
  - Education (BSc in Software Engineering at Daffodil International University).
  - Contact & Office information.
- **Academic SEO & Meta**: Highwire Press / OpenGraph / Twitter meta tags for indexing and link previews.
- **Automated GitHub Pages Deployment**: Included GitHub Actions workflow (`.github/workflows/deploy.yml`) for continuous deployment on push.

---

## Deploying to GitHub Pages

### Option 1: User Site (`saddamkhanx.github.io`) — Recommended
Your website will be published directly at: **`https://saddamkhanx.github.io/`**

1. Go to [GitHub: Create a New Repository](https://github.com/new).
2. Set the repository name to: **`saddamkhanx.github.io`**.
3. Choose **Public** and do **NOT** check "Initialize this repository with a README".
4. Run the following commands in this directory:
   ```bash
   git remote add origin https://github.com/saddamkhanx/saddamkhanx.github.io.git
   git branch -M main
   git push -u origin main
   ```
5. On GitHub, navigate to **Settings** > **Pages**:
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Your site will deploy automatically within 1–2 minutes!

### Option 2: Project Site (e.g., `academic-portfolio`)
Your website will be published at: **`https://saddamkhanx.github.io/academic-portfolio/`**

1. Create a public repository on GitHub named `academic-portfolio`.
2. Push your code:
   ```bash
   git remote add origin https://github.com/saddamkhanx/academic-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In **Settings** > **Pages**, ensure **Source** is set to **GitHub Actions**.

---

## Customization Guide

### 1. Personal Information & Links
Open `index.html` and update:
- Your name, subtitle, and biography in the `<section id="about">` block.
- Profile links: LinkedIn profile URL, GitHub profile URL, and email.

### 2. Profile Photo
- Place your photo inside `assets/` (e.g. `assets/photo.jpg`).
- In `index.html`, replace `src="assets/avatar.svg"` with `src="assets/photo.jpg"`.

### 3. Curriculum Vitae (CV)
- Drop your resume/CV as `assets/cv.pdf`. The "CV (PDF)" link is already pre-configured to download it.

### 4. Adding / Editing Publications
In `index.html`, duplicate or edit an `<article class="pub-item">` block:
- Modify the title, venue, and author list (use `<span class="author-me">Saddam Khan</span>` to highlight your name).
- Update the `<pre><code>` block inside `<div class="bibtex-box">` with your BibTeX entry.

---

## Local Development & Preview

You can preview the site locally using any static web server:

**Using Python:**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Or directly open `index.html`** in any web browser.
