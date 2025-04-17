# 💥 Lab: *Fix the Portfolio!*

## 🎯 Objective
You're taking over a student portfolio site that’s full of broken CSS.  
Your job is to **fix layout issues, repair responsiveness**, and **clean up the mess** using:

- The **cascade**
- **Selectors & specificity**
- **Media queries**
- **Bootstrap**
- **Flexbox or Grid**

It should look like 
![./assets/CSS_Fail_Lab.png][fail lab]
---

## 🧩 Starter Files
```
broken-portfolio-lab/
├── index.html        ← Already written, messy layout
├── style.css         ← Broken and badly organized
```

---

## 😵‍\u💫 What’s Broken?

| Area               | Problem Type |
|--------------------|--------------|
| Hero Section       | Uses inline styles + `!important` hacks, overriding Bootstrap classes |
| Navigation         | Breaks on small screens (no responsive layout, nav items float offscreen) |
| About Section      | Fonts are inconsistent, and margin/padding look messy |
| Projects Section   | Grid is broken (cards stack wrong on mobile), Bootstrap grid not used properly |
| Footer             | Sits awkwardly in the middle on large screens |

---

## 🧪 Your Mission

### 🧱 1. Layout & Spacing
- Use Bootstrap grid or Flexbox properly
- Make sure cards are aligned and spaced evenly
- Remove inline styles and use class-based styling

### 🎨 2. Visual Styling
- Use better fonts and consistent sizes
- Fix color contrast issues (light gray text on white background)

### 📱 3. Responsive Design
- Use media queries to fix text size and layout issues on mobile
- Make the nav collapse into a stacked layout or use Bootstrap’s navbar

### 🧠 4. Cascade & Specificity
- Clean up unnecessary `!important`
- Reorganize selectors so styles apply consistently

---

## 🔎 Optional Stretch Goals
- Make a light/dark mode toggle
- Add hover effects to project cards
- Add a working contact form layout (no backend needed)

---

## 🧪 BONUS "Easter Eggs" (Optional to Discover & Fix)
- A `display: none;` on the main content by mistake
- A media query that says `max-width: 160px` (so it never runs)
- An unused CSS rule for `.hidden-navbar` that is accidentally applied

---

## 🚀 Submission Instructions
1. Save all changes
2. Ensure your HTML is semantic and valid
3. Push your project to GitHub (or zip and upload if instructed)

### Git Quick Start (if needed):
```bash
git init
git add .
git commit -m "Fix broken portfolio layout and styling"
git remote add origin https://github.com/your-username/broken-portfolio-lab.git
git branch -M main
git push -u origin main
```

---

## 🌟 Stretch Yourself Further
- Turn this into your **actual portfolio** after fixing it
- Replace content with your own photo, bio, and projects
- Add animations or interactive elements