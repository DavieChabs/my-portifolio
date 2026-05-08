# ⚡ Quick Start Guide

Get your portfolio up and running in 2 minutes!

## 🚀 Step 1: Install Dependencies

Open terminal in the portfolio folder and run:

```bash
npm install
```

This will install all required packages:
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

**Time**: ~2-3 minutes

---

## 🎮 Step 2: Start Development Server

```bash
npm run dev
```

Your browser will automatically open to `http://localhost:3000`

You should see:
- ✅ Animated hero section with your name
- ✅ Dark mode toggle in the top-right
- ✅ Smooth scrolling navigation
- ✅ All sections loading correctly

**Ctrl+C** to stop the development server

---

## 🎨 Step 3: Customize Content

Edit these files to personalize your portfolio:

### 1. Hero Section - `src/components/Hero.jsx`
- Change your name (line 32)
- Update title and bio
- Update social media links

### 2. About Section - `src/components/About.jsx`
- Update bio text (lines 39-51)
- Modify strengths list (line 9)

### 3. Skills - `src/components/Skills.jsx`
- Update skill categories (line 10-15)
- Modify proficiency levels (line 115-130)

### 4. Projects - `src/components/Projects.jsx`
- Update project information (line 9-45)
- Add project links and GitHub URLs
- Change project categories

### 5. Education - `src/components/Education.jsx`
- Update degree info (line 6-17)
- Add/remove certifications (line 19-24)
- Update learning goals (line 98-103)

### 6. Contact - `src/components/Contact.jsx`
- Update email (line 8)
- Update location (line 12)
- Change social media profiles (line 210-216)

### 7. Footer - `src/components/Footer.jsx`
- Verify all social links are correct (line 57-62)

---

## 🌙 Step 4: Test Features

- **Dark Mode**: Click the moon/sun icon in the navbar
- **Navigation**: Click any nav link, page smoothly scrolls
- **Mobile**: Resize browser to test responsiveness
- **Contact Form**: Try submitting the contact form
- **Scroll Animation**: Scroll down and watch elements animate in

---

## 📦 Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder with your production-ready site.

---

## 🌐 Step 6: Deploy

### Quick Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. Click "Deploy"

✨ Your portfolio is live!

**For other deployment options**, see `DEPLOYMENT.md`

---

## 📝 Important Files Structure

```
my-portfolio/
├── src/
│   ├── components/          ← Edit these files to customize
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             ← Main app file
│   ├── index.css           ← Global styles
│   └── main.jsx            ← React entry point
├── index.html              ← Page title & meta tags
├── package.json            ← Dependencies
├── vite.config.js          ← Vite settings
├── tailwind.config.js      ← Tailwind colors & styling
└── README.md               ← Full documentation
```

---

## 🎯 Customization Tips

### Add Your Profile Picture
1. Add image to `public/` folder (create if needed)
2. In Hero.jsx, add: `<img src="/your-image.jpg" alt="Profile" />`

### Change Colors
Edit `tailwind.config.js` line 6-18 to modify gold colors

### Add More Sections
1. Create new file in `src/components/`
2. Import in `App.jsx`
3. Add to JSX

### Update Social Links
Search and replace across components:
- `https://github.com/davidchabikwa` → Your GitHub
- `https://linkedin.com/in/David Chabikwa` → Your LinkedIn
- `https://twitter.com/daviechabs` → Your Twitter
- `chabikwadavid@gmail.com` → Your email

---

## 🔥 Common Tweaks

### Slow Animations?
Edit animation speed in individual components (look for `transition` props)

### Want Different Hero Text?
Modify `TypingEffect` speed in Hero.jsx line 12

### Dark Mode Default?
Already set to dark! Change in App.jsx line 20

### Font Not Loading?
Check `src/index.css` line 3 - Google Fonts import

---

## ✨ Pro Tips

1. **Live Reload**: Changes auto-refresh in dev mode
2. **Component Reuse**: Copy component patterns for new sections
3. **Responsive**: Already mobile-responsive, no changes needed
4. **Performance**: Fast load time using Vite optimizations
5. **SEO**: Meta tags in `index.html` help search engines

---

## 🆘 Troubleshooting

### npm install fails?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use?
```bash
npm run dev -- --port 3001
```

### Changes not appearing?
- Hard refresh: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
- Stop dev server and restart

### Build errors?
```bash
npm run build
```

Check console output for specific errors

---

## 📊 Next Steps

1. ✅ Customize all content
2. ✅ Test on mobile devices
3. ✅ Test dark mode thoroughly
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share with recruiters!

---

## 🎉 You're All Set!

Your professional portfolio is ready! 

**Questions?** Check the full [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md)

**Happy coding!** 🚀
