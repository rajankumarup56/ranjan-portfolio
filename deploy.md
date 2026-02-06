# Portfolio Deployment Guide (GitHub Pages)

This document explains how this portfolio is deployed and how future updates are managed.

---

## 📁 Repository Structure

- `index.html` → Main entry point
- `css/` → All styling files  
  - `main.css`
  - `devops.css`
  - `backend.css`
- `js/` → JavaScript logic  
  - `toggle.js`
- `assets/` → Images, icons, media (optional)
- Hosted using **GitHub Pages**

---

## 🚀 Deployment Steps (GitHub Pages)

### 1️⃣ Create Repository
- GitHub repo name:  
  **`ranjan-portfolio`**
- Visibility: **Public**
- Initialize with **README.md**

---

### 2️⃣ Upload Files
Push the following into the repository root:
- `index.html`
- `css/`
- `js/`
- `assets/` (optional but recommended)

Example:
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/ranjan-portfolio.git
git push -u origin main
