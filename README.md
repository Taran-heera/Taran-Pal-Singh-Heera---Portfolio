# 🚀 Taran Pal Singh Heera - AI & ML Portfolio

A premium, dark-themed personal portfolio website showcasing AI/ML projects, experience, and skills.

## 📁 Features

✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
✅ **Dark Theme** - Premium, professional dark mode with blue and pink accents
✅ **Smooth Animations** - Beautiful fade-in animations and smooth scrolling
✅ **Project Showcase** - Display all AI/ML projects with GitHub links
✅ **Experience Timeline** - Detailed work experience and internships
✅ **Skills Section** - Comprehensive technical skills display
✅ **Contact Form** - Easy way to get in touch
✅ **SEO Optimized** - Clean HTML structure and meta tags
✅ **GitHub Pages Ready** - Deploy instantly to GitHub Pages

## 📂 Folder Structure

```
taran-portfolio/
├── index.html              # Home page (About Me)
├── projects.html           # Projects showcase
├── experience.html         # Work experience & education
├── resume.html             # Detailed resume
├── contact.html            # Contact form
│
├── assets/
│   ├── images/
│   │   └── profile.jpg     # Your profile photo
│   │
│   ├── css/
│   │   └── style.css       # Main styling (dark theme)
│   │
│   └── js/
│       └── main.js         # JavaScript functionality
│
└── README.md               # This file
```

## 🎨 Color Scheme

- **Primary**: `#00d4ff` (Cyan)
- **Secondary**: `#ff006e` (Pink)
- **Accent**: `#ffd60a` (Yellow)
- **Background**: `#0a0e27` (Dark Blue)
- **Card Background**: `#1a1f3a` (Lighter Dark Blue)

## 🚀 Quick Start

### 1. Add Your Profile Image
Place your profile photo in `assets/images/profile.jpg`

### 2. Update Content
Edit the HTML files with your:
- Personal information
- Project details
- Experience/internships
- Skills
- Contact information

### 3. Add GitHub Links
Update the GitHub repository URLs in:
- `projects.html` - Project links
- `index.html` - Social links
- `contact.html` - GitHub profile link

### 4. Deploy to GitHub Pages

#### Option A: Using GitHub Pages
1. Create a repository named `username.github.io`
2. Push all files to the repository
3. Your portfolio will be live at `https://username.github.io`

#### Option B: Project Repository
1. Create any repository name (e.g., `portfolio`)
2. Push files to the `main` branch
3. Go to Settings → Pages → Source → `main` branch
4. Your portfolio will be live at `https://username.github.io/portfolio`

#### Option C: Using GitHub Actions
Add this to `.github/workflows/deploy.yml` for auto-deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🔧 Customization

### Change Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #00d4ff;        /* Change cyan to your color */
  --secondary: #ff006e;      /* Change pink to your color */
  --bg-dark: #0a0e27;        /* Change dark background */
}
```

### Add More Pages
1. Create a new HTML file
2. Copy the header and footer from existing pages
3. Update the navigation menu
4. Link it in other pages

### Update Contact Information
Edit the contact details in:
- `contact.html` - Contact page
- `index.html` - Footer
- All pages footer

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔒 Privacy & SEO

- All social links are properly set
- Meta tags are included
- Clean semantic HTML
- Mobile-friendly design
- Fast loading times

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Next Steps

1. ✅ Replace `assets/images/profile.jpg` with your photo
2. ✅ Update all HTML content with your information
3. ✅ Update GitHub links to your repositories
4. ✅ Test locally: Open `index.html` in browser
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

## 💡 Tips

- Keep images optimized (compressed)
- Update projects regularly
- Add new experiences as they happen
- Keep contact information updated
- Monitor GitHub for engagement

## 📝 License

This portfolio template is free to use and modify. Feel free to customize it for your needs!

## 🤝 Support

Have questions or need help?
- Email: taranpalsingh53@gmail.com
- LinkedIn: linkedin.com/in/taran-pal-singh-heera
- GitHub: github.com/Taran-heera

---

**Made with ❤️ using HTML, CSS, and JavaScript**

Last Updated: February 2026
