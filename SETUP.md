# 🎯 Portfolio Setup & Deployment Guide

## ✅ What's Included

Your premium portfolio has been created with:

```
✓ index.html          - Home/About page with hero section
✓ projects.html       - 6 AI/ML projects showcase with GitHub links
✓ experience.html     - Internship experience + education
✓ resume.html         - Professional resume page (printable)
✓ contact.html        - Contact form + social links
✓ style.css           - Premium dark theme styling
✓ main.js             - Smooth animations & interactivity
✓ README.md           - Documentation
✓ .gitignore          - Git configuration
```

---

## 🖼️ STEP 1: Add Your Profile Image

1. Get your best professional photo
2. Resize to **300x300 pixels** (square format)
3. Save as **`profile.jpg`**
4. Place in: `assets/images/profile.jpg`

**Recommended Image Size**: 300px × 300px, JPG format, ~100KB

---

## 📝 STEP 2: Update Your Information

### In **index.html**:
- [ ] Hero section heading & subtitle
- [ ] About description (already filled from resume)
- [ ] Skills list (already added)
- [ ] CTA buttons

### In **projects.html**:
- [ ] Update project descriptions
- [ ] Add real GitHub links: `https://github.com/Taran-heera/PROJECT-NAME`
- [ ] Update tech stack tags
- [ ] Add live demo links (if available)

**Example GitHub Link**:
```html
<a href="https://github.com/Taran-heera/CODDS" target="_blank">View Code →</a>
```

### In **experience.html**:
- [ ] Update internship dates
- [ ] Update company names & details
- [ ] Add responsibility descriptions
- [ ] Update education institution

### In **resume.html**:
- [ ] Update resume content
- [ ] Add certifications
- [ ] Update technical skills
- [ ] Verify dates and positions

### In **contact.html**:
- [ ] Email: `taranpalsingh53@gmail.com` → Your email
- [ ] LinkedIn: Update profile URL
- [ ] GitHub: Update profile URL

---

## 🌐 STEP 3: Deploy to GitHub Pages

### Option A: GitHub Pages Site (`username.github.io`)

1. **Create Repository**
   - Go to GitHub
   - Create new repo: `username.github.io`
   - Replace `username` with your GitHub username

2. **Initialize Git** (in project folder)
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. **Your site is live at**:
   ```
   https://username.github.io
   ```

### Option B: Project Portfolio Repo

1. **Create Repository**
   - Go to GitHub
   - Create repo: `portfolio` (any name)

2. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repo Settings
   - Scroll to "Pages"
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/ (root)`
   - Save

4. **Your site is live at**:
   ```
   https://username.github.io/portfolio
   ```

---

## 🧪 STEP 4: Test Locally

1. **Open in Browser**
   - Right-click `index.html`
   - Select "Open with" → Your browser

2. **Or use Live Server** (VS Code)
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"
   - Opens at `http://localhost:5500`

3. **Test All Pages**
   - Click navigation links
   - Verify all images load
   - Check mobile view (F12 → Device Toolbar)
   - Test contact form

---

## 🎨 STEP 5: Customize Colors (Optional)

Edit `assets/css/style.css`:

```css
:root {
  --primary: #00d4ff;      /* Cyan - change this */
  --primary-dark: #0099cc; /* Dark Cyan */
  --secondary: #ff006e;    /* Pink - change this */
  --accent: #ffd60a;       /* Yellow - change this */
  --bg-dark: #0a0e27;      /* Dark Blue */
  --bg-card: #1a1f3a;      /* Card Blue */
}
```

**Popular Color Combinations**:

**Purple Theme**:
```css
--primary: #9d4edd;
--secondary: #3a0ca3;
--accent: #ff006e;
```

**Green Theme**:
```css
--primary: #00d9ff;
--secondary: #00ff00;
--accent: #ffff00;
```

**Orange Theme**:
```css
--primary: #ff6b35;
--secondary: #f7931e;
--accent: #ffd60a;
```

---

## 📋 Checklist Before Deploy

- [ ] Profile image added to `assets/images/profile.jpg`
- [ ] All HTML files updated with your info
- [ ] GitHub links point to your actual repositories
- [ ] Contact email is your email address
- [ ] LinkedIn URL is your profile
- [ ] No broken links
- [ ] Mobile view tested
- [ ] All pages load correctly
- [ ] Git repository created
- [ ] Push to GitHub completed

---

## 🚀 Commands Quick Reference

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Create main branch
git branch -M main

# Add remote
git remote add origin https://github.com/username/repo.git

# Push to GitHub
git push -u origin main

# Push future updates
git push
```

---

## 🔧 Git Workflow (After Initial Setup)

```bash
# 1. Make changes to your files
# 2. Stage changes
git add .

# 3. Commit with message
git commit -m "Update projects"

# 4. Push to GitHub
git push
```

---

## 📱 Mobile Optimization Tips

1. ✅ Already responsive (mobile-friendly)
2. ✅ All images optimize automatically
3. ✅ Touch-friendly navigation
4. ✅ Fast loading on mobile

---

## 🔗 Important Links

- **GitHub Desktop** (easier alternative to command line):
  https://desktop.github.com

- **VS Code** (recommended editor):
  https://code.visualstudio.com

- **Live Server Extension** (for testing):
  Search in VS Code extensions

---

## ❓ Common Issues & Fixes

### Images Not Loading
- Make sure `profile.jpg` is in `assets/images/`
- Check file path is correct
- Verify image format is JPG

### Links Not Working
- Check GitHub URLs are correct
- Remove spaces from URLs
- Test links before deploying

### Dark Theme Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check `style.css` is in correct folder

### Mobile View Broken
- Open DevTools (F12)
- Click device toolbar
- Test on different screen sizes

---

## 📞 Support & Questions

- **Email**: taranpalsingh53@gmail.com
- **GitHub Issues**: Add to your repo
- **LinkedIn**: Send message

---

## 🎓 Learning Resources

- **HTML/CSS**: MDN Web Docs
- **GitHub Pages**: GitHub Docs
- **Git Basics**: GitHub Guides
- **Web Design**: Dribbble, CodePen

---

## 🎉 You're All Set!

Your premium portfolio is ready to impress employers and showcase your AI/ML skills!

**Next Steps**:
1. Add profile image
2. Update content
3. Test locally
4. Deploy to GitHub
5. Share with your network!

---

**Happy coding! 🚀**
