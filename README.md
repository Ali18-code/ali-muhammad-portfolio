# Ali Muhammad Panhwar — Engineering Portfolio

A modern, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed specifically to meet tech industry and recruiter standards for **Aspiring AI/ML Engineers**.

---

## ⚡ Quick Start (Local Development)

To run this website locally on your computer:

```bash
# 1. Navigate to the project directory
cd d:\Portfolio

# 2. Start the local Vite development server
npm run dev
# (or in Windows PowerShell: npm.cmd run dev)
```

Open your browser and navigate to `http://localhost:3000` to preview your live portfolio.

---

## 📝 Updating Your Information in 10 Seconds

All profile data, links, projects, skills, education, and internship details are centralized in:

📂 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To update anything (add a new project, change social links, or update your bio), simply edit this single file!

---

## 🚀 How to Publish for Free (Global 24/7 Hosting)

### Option 1: Vercel (Recommended — Takes 2 Minutes)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   # Create a repository on GitHub (e.g. named 'portfolio') and link it:
   git remote add origin https://github.com/Ali18-code/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Keep the default settings (Framework: Vite) and click **"Deploy"**.
5. Vercel will give you a live URL (e.g. `https://ali-panhwar.vercel.app`) with automatic HTTPS and instant updates every time you push code to GitHub!

---

### Option 2: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm.cmd install --save-dev gh-pages
   ```
2. In `vite.config.js`, set base:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repository name
     plugins: [react()],
   });
   ```
3. Run `npm.cmd run build` and deploy.

---

## 🛠️ Tech Stack & Architecture
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark Minimal Theme `#080c14`, Electric Cyan `#06b6d4`, Emerald `#10b981`)
- **Icons:** Lucide React
- **Typography:** Inter + JetBrains Mono
- **Responsive:** 100% Mobile & Desktop optimized
