# 🎨 Premium Portfolio Setup Guide

Your portfolio has been completely redesigned with a **premium black, gold, and silver theme** with advanced animations and luxury styling. Follow this guide to add your custom content.

---

## 📸 Step 1: Add Your Project Images

Your projects need images to look stunning. You have several options:

### Option A: Use Images from Your Assets
Place project images in `assets/images/` with these names:
- `project-1.jpg` - CODDS project
- `project-2.jpg` - NeuroFocus project
- `project-3.jpg` - Low-Light Enhancement project
- `project-4.jpg` - Age & Gender Estimation project
- (Add more for additional projects)

### Option B: Rename Existing WhatsApp Images
Your current images can be used:
```
WhatsApp Image 2026-02-08 at 9.55.41 AM.jpeg → project-1.jpg
WhatsApp Image 2026-02-08 at 9.55.43 AM.jpeg → project-2.jpg
etc.
```

### Option C: Take Screenshots
- Screenshot your GitHub repository for each project
- Screenshot your project's output/results
- Save as PNG or JPG in `assets/images/`

---

## 🚀 Step 2: Link GitHub Projects

### Current Project Pages:
- **projects.html** - Full projects showcase
- **experience.html** - Work experience & internships
- **resume.html** - Resume & skills

### To Add GitHub Project Links:
1. Open `projects.html`
2. Find the project card you want to update
3. Update the GitHub link:
```html
<a href="https://github.com/Taran-heera/YOUR-PROJECT-NAME" target="_blank">
```

---

## 📄 Step 3: Add Your Resume

### To Add Resume PDF:
1. Place your resume PDF in `assets/` folder
2. Name it: `Taran_Resume.pdf`
3. Update link in `resume.html`:
```html
<a href="assets/Taran_Resume.pdf" download class="btn btn-primary">Download Resume</a>
```

---

## 🎯 Design Features

Your new portfolio includes:

### ✨ Premium Theme
- **Color Scheme**: Black (#0a0a0a) + Gold (#d4af37) + Silver (#c0c0c0)
- **Accents**: White highlights for contrast
- **Fonts**: Professional sans-serif with elegant spacing

### 💫 Advanced Animations
- **Hover Effects**: Smooth transitions on cards and buttons
- **Glowing Effects**: Gold glow on project cards
- **Stagger Animations**: Cards fade in with timing
- **Shine Effects**: Profile image has shimmer animation
- **Gradient Backgrounds**: Luxury gradient overlays

### 📱 Fully Responsive
- Desktop, tablet, and mobile optimized
- Touch-friendly buttons and spacing
- Flexible grid layouts

---

## 🖼️ Image Upload Instructions

### Via GitHub Web:
1. Go to your GitHub repository
2. Click `assets/` → `images/` folder
3. Click "Add files" → "Upload files"
4. Drag & drop your images
5. Commit changes

### Via Command Line:
```bash
# Copy images to assets/images/ first, then:
cd "c:\Users\admin\Desktop\taran portfolio"
git add assets/images/
git commit -m "Add project images"
git push
```

---

## 📋 File Structure Ready for Content

```
assets/
├── images/
│   ├── profile.jpeg        ✓ (Already added)
│   ├── project-1.jpg       (Add your images)
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
├── css/
│   └── style.css           ✓ (Updated - Premium theme)
└── js/
    └── main.js             ✓ (Ready)
```

---

## 🎨 Customization Tips

### Change Colors:
Edit `assets/css/style.css` variables:
```css
:root {
  --primary: #d4af37;        /* Gold */
  --secondary: #c0c0c0;      /* Silver */
  --bg-dark: #0a0a0a;        /* Black */
}
```

### Add More Skill Tags:
In `index.html`, add to skills list:
```html
<span class="skill-tag">Your Skill Here</span>
```

### Update About Me:
Edit the hero-description section in `index.html` to add your personal touch.

---

## 🔄 Pushing to GitHub

After adding your images and updates:

```bash
cd "c:\Users\admin\Desktop\taran portfolio"
git add .
git commit -m "Add project images and content"
git push
```

Your changes will be live at:
```
https://taran-heera.github.io/Taran-Pal-Singh-Heera---Portfolio/
```

---

## 🌟 What's New in This Design

### Navigation
- Premium uppercase nav with gold accent
- Smooth underline hover effects
- Sticky header with gold border

### Hero Section
- Side-by-side layout: Image + Text
- Professional profile image with glow
- Shimmer animation on image
- More natural, personal about text

### Project Cards
- Gradient overlays on hover
- Advanced shadow effects
- Smooth card lift animation
- Gold highlights

### Buttons
- Solid gold primary buttons
- Outlined secondary buttons
- Smooth hover transitions
- Professional hover effects

### Footer
- Clean, simplified design
- Just your name (no "AI" credits)
- Gold social icon borders
- Premium appearance

---

## ✅ Checklist Before Going Live

- [ ] Add project images to `assets/images/`
- [ ] Update GitHub links in `projects.html`
- [ ] Add resume PDF to `assets/`
- [ ] Update LinkedIn and GitHub URLs if changed
- [ ] Check all pages look good locally
- [ ] Push to GitHub
- [ ] Wait 2-3 minutes for deployment
- [ ] View your live site

---

## 📞 Support

Your portfolio is now ready to showcase your AI/ML work in style!

**Live URL:** `https://taran-heera.github.io/Taran-Pal-Singh-Heera---Portfolio/`

Enjoy your premium portfolio! 🚀
