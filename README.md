# 🌟 Hemas Beauty Salon - Luxury Website

A modern, high-end beauty salon website built with React, Shadcn UI, Tailwind CSS, and Framer Motion.

## ✨ Features

- ✅ **Sticky Transparent Navbar** - White with blur effect
- ✅ **Auto-Changing Carousel** - 5 images, 4 seconds each
- ✅ **Mobile Bottom Navigation** - 3 icons (Images, Menu, Membership)
- ✅ **WhatsApp Sticky Box** - Green box above bottom nav (mobile only)
- ✅ **6 Service Cards** - With hover effects
- ✅ **8 Image Gallery** - Responsive grid
- ✅ **3 Membership Plans** - Silver, Gold, Platinum
- ✅ **Fully Responsive** - Perfect on all devices
- ✅ **WhatsApp Integration** - All buttons redirect to WhatsApp

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

---

## 🔧 Configuration

### Update WhatsApp Number (Required!)

Replace `1234567890` with your WhatsApp number in these 4 files:

1. `client/src/components/Hero.jsx` (line 7)
2. `client/src/components/Navbar.jsx` (line 14)
3. `client/src/components/MobileBottomNav.jsx` (line 8)
4. `client/src/components/Membership.jsx` (line 8)

**Format:** Country code + number (no spaces, no +)
- Example: `15551234567` for US +1 (555) 123-4567
- Example: `919876543210` for India +91 98765 43210

### Update Images (Optional)

Replace placeholder images in:
- `client/src/components/Hero.jsx` - 5 carousel images
- `client/src/components/Services.jsx` - 6 service images
- `client/src/components/Gallery.jsx` - 8 gallery images

---

## 🌐 Deploy (FREE)

### Option 1: Vercel (Recommended - Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd client
vercel login
vercel --prod
```

**Done!** Your site is live at `https://your-site.vercel.app`

### Option 2: Netlify (Drag & Drop)

```bash
# Build locally
cd client
npm run build

# Go to https://app.netlify.com/drop
# Drag the 'dist' folder
```

**Done!** Your site is live!

### Option 3: Netlify (GitHub - Automatic)

1. Push to GitHub
2. Go to https://app.netlify.com
3. New site from Git
4. Settings:
   - Base directory: `client`
   - Build command: `npm install && npm run build`
   - Publish directory: `client/dist`
5. Deploy!

---

## 📱 Mobile Features

### Bottom Navigation (Mobile Only)
- 📷 **Images** → Gallery section
- 🍴 **Menu** → Services section
- 👑 **Membership** → Membership section

### WhatsApp Green Box (Mobile Only)
- Shows "Contact Us" + phone number
- Positioned above bottom navigation
- Rounded corners
- Direct WhatsApp link

---

## 🎨 Color Palette

| Color | HEX | Usage |
|-------|-----|-------|
| Background | `#FAFAF9` | Clean & Airy |
| Gold | `#C5A059` | Luxurious accents |
| Dark | `#1C1C1C` | Text |
| WhatsApp | `#25D366` | Contact box |

---

## 📂 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn components
│   │   ├── Navbar.jsx       # Sticky navbar
│   │   ├── Hero.jsx         # 5-image carousel
│   │   ├── Services.jsx     # 6 services
│   │   ├── Gallery.jsx      # 8 images
│   │   ├── Membership.jsx   # 3 plans
│   │   └── MobileBottomNav.jsx  # Bottom nav + WhatsApp
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

- React 18
- Vite
- Shadcn UI
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide Icons

---

## ✅ Pre-Launch Checklist

- [ ] Update WhatsApp number (4 files)
- [ ] Replace carousel images (5 images)
- [ ] Replace service images (6 images)
- [ ] Replace gallery images (8 images)
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test WhatsApp links
- [ ] Deploy!

---

## 🆘 Troubleshooting

### Build fails?
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run build
```

### WhatsApp not working?
- Check number format: `15551234567` (no spaces, no +)
- Test link: `https://wa.me/15551234567`

### Mobile nav not showing?
- Only visible on screens < 768px
- Use Chrome DevTools (F12) to test

---

## 📞 Support

- **Deployment Issues:** Check `DEPLOYMENT_FIX.md`
- **Free Hosting:** Check `FREE_DEPLOYMENT.md`
- **Quick Start:** Check `START_HERE.md`

---

## 📄 License

MIT License - Free to use for your projects!

---

**Built with ❤️ for Hemas Beauty Salon**

🚀 **Ready to launch? Update WhatsApp number and deploy!**
