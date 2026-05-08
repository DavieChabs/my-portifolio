# 🚀 Deployment Guide

This guide covers multiple ways to deploy your portfolio website to production.

## Table of Contents

1. [Vercel (Recommended)](#vercel-recommended)
2. [Netlify](#netlify)
3. [GitHub Pages](#github-pages)
4. [AWS S3 + CloudFront](#aws-s3--cloudfront)
5. [Traditional Web Hosting](#traditional-web-hosting)

---

## Vercel (Recommended)

**Why Vercel?** - Built for React, automatic deployments, great performance, free tier, fast CDN

### Option 1: Through GitHub (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```

2. **Visit [vercel.com](https://vercel.com) and sign up** with GitHub

3. **Import your project:**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Import"
   - Click "Deploy"

4. **Your portfolio is live!** Access it at `your-project.vercel.app`

### Option 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and select your project settings

### Configure Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## Netlify

### Option 1: Through GitHub (Recommended)

1. **Push code to GitHub** (see Vercel Option 1 for steps)

2. **Visit [netlify.com](https://netlify.com) and sign up** with GitHub

3. **Create new site:**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Verify build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Option 2: Drag & Drop

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Visit [netlify.com](https://netlify.com)**

3. **Drag and drop the `dist` folder** into the deploy area

4. Your portfolio is instantly live!

### Option 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

---

## GitHub Pages

### Setup

1. **Update `vite.config.js`:**
   ```js
   export default {
     base: '/my-portfolio/',  // Replace 'my-portfolio' with your repo name
     plugins: [react()],
     // ... rest of config
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update `package.json`:**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/my-portfolio/",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Push to GitHub and deploy:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save

---

## AWS S3 + CloudFront

### Prerequisites

- AWS Account
- AWS CLI configured

### Steps

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://my-portfolio-davidchabikwa
   ```

2. **Enable static website hosting:**
   ```bash
   aws s3 website s3://my-portfolio-davidchabikwa \
     --index-document index.html \
     --error-document index.html
   ```

3. **Build your project:**
   ```bash
   npm run build
   ```

4. **Upload to S3:**
   ```bash
   aws s3 sync dist/ s3://my-portfolio-davidchabikwa --delete
   ```

5. **Create CloudFront distribution** (optional, for CDN):
   - Go to AWS CloudFront console
   - Create distribution pointing to your S3 bucket
   - Wait for distribution to deploy (~5-10 minutes)

6. **Your portfolio is live** at the S3 endpoint or CloudFront URL

---

## Traditional Web Hosting

### For cPanel Hosting (Bluehost, Hostinger, etc.)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Connect via FTP/SFTP:**
   - Use FileZilla or similar FTP client
   - Connect with your hosting credentials

3. **Upload `dist` folder contents:**
   - Navigate to `public_html` folder
   - Upload all files from your `dist` folder

4. **Access your portfolio** at your domain

### For Linux VPS

1. **Connect to your server:**
   ```bash
   ssh your_user@your_server_ip
   ```

2. **Install Node.js:**
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone your repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-portfolio.git
   cd my-portfolio
   ```

4. **Install dependencies and build:**
   ```bash
   npm install
   npm run build
   ```

5. **Use Nginx as reverse proxy:**
   ```bash
   sudo apt-get install nginx
   ```

6. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       root /home/your_user/my-portfolio/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

7. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

8. **Set up SSL (Let's Encrypt):**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=chabikwadavid@gmail.com
```

Access in your code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All links work
- [ ] Images display properly
- [ ] Forms are functional
- [ ] Mobile responsive works
- [ ] Dark mode toggle works
- [ ] Social links are correct
- [ ] Email is correct
- [ ] SEO meta tags are present
- [ ] Performance is good (Lighthouse check)
- [ ] SSL certificate is active
- [ ] Custom domain is set up (if applicable)

---

## Updating Your Portfolio

### When deployed via GitHub integration (Vercel/Netlify):

1. **Make changes locally:**
   ```bash
   npm run dev
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Automatic deployment** happens automatically!

### When deployed manually:

1. **Make changes locally**
2. **Build:**
   ```bash
   npm run build
   ```
3. **Upload new `dist` folder** to your hosting

---

## Troubleshooting

### White screen on load?
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Links not working?
- Ensure base path is correct for your hosting
- Check that all routes use hash navigation or static paths

### Slow performance?
- Enable Gzip compression on server
- Use a CDN like CloudFlare
- Optimize images
- Check bundle size with `npm run build`

### SSL certificate errors?
- Use Let's Encrypt for free SSL
- Update your DNS records
- Wait for DNS propagation (can take up to 48 hours)

---

## Recommended Setup

**For beginners:** Vercel or Netlify (drag & drop)
**For GitHub users:** Vercel or Netlify with GitHub integration
**For custom domain:** Vercel + custom domain routing
**For enterprise:** AWS S3 + CloudFront
**For complete control:** Linux VPS + Nginx

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [AWS S3 Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

Happy deploying! 🚀
