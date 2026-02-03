# 🚀 GitHub Pages Deployment Guide

## 5-Minute Setup

### Step 1: Add Profile Image
```
Place your photo at: assets/images/profile.jpg
Size: 300x300px (square)
Format: JPG
```

### Step 2: Create GitHub Repository

**Go to GitHub** → New Repository

**Option A - Personal Site** (Recommended if first time)
```
Repository Name: username.github.io
Replace username with YOUR GitHub username
Example: taran-heera.github.io
Description: My AI & ML Portfolio
Public: Yes
```

**Option B - Portfolio Project**
```
Repository Name: portfolio
Description: My AI & ML Portfolio
Public: Yes
```

### Step 3: Upload Files

**Using GitHub Web (Easiest)**:
1. Go to your new repository
2. Click "Add file" → "Upload files"
3. Drag & drop all files and folders
4. Commit changes

**OR Using Git Command Line**:
```bash
# Navigate to your portfolio folder
cd "path/to/taran portfolio"

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio upload"

# Set main branch
git branch -M main

# Add remote (Option A - Personal Site)
git remote add origin https://github.com/username/username.github.io.git

# OR (Option B - Portfolio Repo)
git remote add origin https://github.com/username/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

**For Option A** (username.github.io):
- Automatic! Check `https://username.github.io` in 1-2 minutes

**For Option B** (portfolio repo):
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main`, Folder: `/ (root)`
4. Save
5. Check `https://username.github.io/portfolio` in 1-2 minutes

---

## 🔍 Verify It Works

Visit your live site:
- **Option A**: `https://username.github.io`
- **Option B**: `https://username.github.io/portfolio`

You should see:
- ✅ Your profile image
- ✅ Dark theme styling
- ✅ All navigation links working
- ✅ Smooth animations

---

## 📝 Custom Domain (Optional)

Want a custom domain like `taran.dev`?

1. Buy domain from GoDaddy, Namecheap, or Google Domains
2. Go to GitHub Settings → Pages
3. Custom domain: `yourdomain.com`
4. Update DNS at your domain provider
5. Follow GitHub's DNS setup guide

---

## 🔄 Making Updates

After you make changes:

```bash
# Stage changes
git add .

# Commit
git commit -m "Update projects section"

# Push
git push
```

Your site updates in 1-2 minutes automatically!

---

## 🎯 Before Sharing Your Link

**Checklist**:
- [ ] Profile image loaded
- [ ] All pages accessible
- [ ] Links are working
- [ ] Mobile view looks good
- [ ] Dark theme displaying correctly
- [ ] Contact form functional
- [ ] No console errors (F12)

---

## 📊 After Deployment

1. **Update GitHub README**
   - Add portfolio link
   - Write a brief bio
   - Link to your projects

2. **Share Your Portfolio**
   - LinkedIn
   - Twitter/X
   - Email signature
   - Resume

3. **Monitor Analytics** (Optional)
   - Google Analytics
   - GitHub insights
   - Traffic to projects

---

## 🐛 Troubleshooting

### Site Not Live?
- Wait 2-3 minutes
- Hard refresh (Ctrl+Shift+R)
- Check GitHub Pages settings

### Images Missing?
- Check file path: `assets/images/profile.jpg`
- Image must be in correct folder

### Links Broken?
- Verify GitHub URLs are correct
- Check relative paths in HTML

### Styling Not Working?
- Clear browser cache
- Check CSS file is in `assets/css/`
- Verify file permissions

---

## 📱 Test on Mobile

Use DevTools in browser:
1. Open your portfolio
2. Press F12
3. Click device icon (top-left)
4. Select mobile device
5. Verify responsive design

---

## ✨ Next Steps

1. **Daily**:
   - Work on new projects
   - Update your portfolio

2. **Weekly**:
   - Add project details
   - Update GitHub links
   - Push changes

3. **Monthly**:
   - Review portfolio
   - Update skills
   - Add achievements

---

## 🎓 Resources

- **GitHub Pages Docs**: pages.github.com
- **Git Tutorial**: git-scm.com
- **Markdown Guide**: markdownguide.org
- **HTML/CSS**: developer.mozilla.org

---

## 🚀 You're Live!

Congratulations! Your portfolio is now live on the internet!

Share it with:
- ✅ Recruiters
- ✅ Potential employers
- ✅ Collaborators
- ✅ Your network

---

**Happy deploying! 🎉**

---

## Emergency Contacts

- **GitHub Support**: https://github.com/support
- **GitHub Community**: https://github.community
- **Stack Overflow**: Tag with `github-pages`

---

Last Updated: February 2026
