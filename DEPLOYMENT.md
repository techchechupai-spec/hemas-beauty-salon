# 🚀 Deployment Guide - Lumina Essence

## Quick Deploy to Render (Recommended)

### Option 1: Automatic Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Lumina Essence Beauty Salon"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Render**
   - Go to https://dashboard.render.com/
   - Click **"New +"** → **"Static Site"**
   - Connect your GitHub account
   - Select your repository
   
3. **Configure Build Settings**
   ```
   Name: lumina-essence
   Root Directory: client
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

4. **Deploy**
   - Click "Create Static Site"
   - Wait 2-3 minutes for deployment
   - Your site will be live! 🎉

### Option 2: Manual Deploy

```bash
# Build the project
cd client
npm install
npm run build

# The dist/ folder is ready to deploy to any static host
```

---

## Alternative Hosting Options

### Vercel
```bash
npm install -g vercel
cd client
vercel
```

### Netlify
```bash
npm install -g netlify-cli
cd client
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```
2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

---

## 📝 Pre-Deployment Checklist

- [ ] Update WhatsApp number in all components
- [ ] Replace placeholder images with real photos
- [ ] Update salon name and branding
- [ ] Test all links and buttons
- [ ] Check mobile responsiveness
- [ ] Optimize images (use WebP format)
- [ ] Add favicon and meta tags
- [ ] Test contact form functionality

---

## 🔧 Environment Variables (Optional)

If you want to use environment variables:

1. Create `.env` file in `client/` folder:
   ```
   VITE_WHATSAPP_NUMBER=1234567890
   ```

2. Update components to use:
   ```js
   const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
   ```

3. Add to Render:
   - Go to your site settings
   - Add environment variable
   - Redeploy

---

## 🌐 Custom Domain

### On Render:
1. Go to your site settings
2. Click "Custom Domains"
3. Add your domain (e.g., luminaessence.com)
4. Update DNS records as instructed

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress images (TinyPNG, Squoosh)
   - Use lazy loading

2. **Code Splitting**
   - Already handled by Vite

3. **CDN**
   - Render provides automatic CDN
   - For custom: Use Cloudflare

---

## 🐛 Troubleshooting

### Build fails on Render
- Check Node version (use 18+)
- Verify all dependencies are in package.json
- Check build logs for errors

### WhatsApp link not working
- Ensure number format: countrycode + number (no spaces, no +)
- Example: 15551234567 for US number

### Images not loading
- Check image URLs are accessible
- Use absolute URLs for external images
- Verify image paths in components

---

## 📞 Support

Need help? Check:
- [Render Documentation](https://render.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Shadcn UI](https://ui.shadcn.com)

---

**Your luxury beauty salon website is ready to shine! ✨**
