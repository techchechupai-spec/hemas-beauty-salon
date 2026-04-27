# ⚡ Quick Setup Guide - Updated

## 🎯 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd client
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Open http://localhost:5173 in your browser 🎉

### Step 3: Update WhatsApp Number

Replace `1234567890` with your WhatsApp number in these 4 files:

1. `src/components/Hero.jsx` (line 7)
2. `src/components/Navbar.jsx` (line 14)
3. `src/components/MobileBottomNav.jsx` (line 8)
4. `src/components/Membership.jsx` (line 8)

**Format**: Country code + number (no spaces, no +)
- Example: `15551234567` for US number +1 (555) 123-4567
- Example: `919876543210` for India number +91 98765 43210

---

## ✨ What's Included

### Desktop Features:
✅ **Sticky Transparent Navbar** - White with blur effect
✅ **Auto-Changing Carousel** - 5 images, 4 seconds each
✅ **6 Service Cards** - With hover effects
✅ **Gallery Grid** - 8 images
✅ **3 Membership Plans** - Silver, Gold, Platinum
✅ **WhatsApp Integration** - All buttons redirect to WhatsApp

### Mobile Features:
✅ **Bottom Navigation** - 3 sticky icons (Images, Menu, Membership)
✅ **WhatsApp Sticky Box** - Green box above bottom nav
✅ **Hamburger Menu** - Collapsible navigation
✅ **Touch Optimized** - All interactions mobile-friendly
✅ **Fully Responsive** - Perfect on all screen sizes

---

## 📱 Mobile Bottom Navigation

On mobile screens, you'll see:

1. **WhatsApp Green Box** (above bottom nav)
   - Shows "Contact Us" + phone number
   - Rounded corners (border-radius: 20px)
   - Redirects to WhatsApp

2. **Bottom Navigation** (3 icons)
   - 📷 **Images** → Gallery section
   - 🍴 **Menu** → Services section
   - 👑 **Membership** → Membership section

---

## 🎨 Carousel Features

- **5 Beautiful Images** auto-rotating
- **4 Second Intervals**
- **Manual Navigation** (left/right arrows)
- **Dot Indicators** (click to jump)
- **Smooth Fade Transitions**
- **Responsive** on all devices

---

## 🔧 Customization

### Change Carousel Images
Edit `src/components/Hero.jsx` (lines 10-34):
```javascript
const slides = [
  {
    image: 'YOUR_IMAGE_URL',
    title: 'Your Title',
    subtitle: 'Your Subtitle'
  },
  // Add more slides...
];
```

### Change Services
Edit `src/components/Services.jsx` (lines 7-42)

### Change Gallery Images
Edit `src/components/Gallery.jsx` (lines 6-15)

### Change Membership Plans
Edit `src/components/Membership.jsx` (lines 11-56)

---

## 🚀 Deploy to Render

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Beauty salon website"
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to https://render.com
   - New Static Site
   - Connect GitHub repo
   - Root: `client`
   - Build: `npm install && npm run build`
   - Publish: `dist`

---

## 📊 File Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/                    # Shadcn components
│   │   ├── Navbar.jsx             # Sticky navbar
│   │   ├── Hero.jsx               # Carousel (5 images)
│   │   ├── Services.jsx           # 6 services
│   │   ├── Gallery.jsx            # 8 images
│   │   ├── Membership.jsx         # 3 plans
│   │   └── MobileBottomNav.jsx    # Mobile nav + WhatsApp
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## ✅ Quick Checklist

Before Launch:
- [ ] Update WhatsApp number (4 files)
- [ ] Replace carousel images (5 images)
- [ ] Update service images (6 images)
- [ ] Update gallery images (8 images)
- [ ] Change salon name
- [ ] Test on mobile
- [ ] Test WhatsApp links
- [ ] Deploy to Render

---

## 🆘 Troubleshooting

**WhatsApp not working?**
- Check number format: `15551234567` (no spaces, no +)
- Test link: `https://wa.me/15551234567`

**Carousel not auto-playing?**
- Check browser console for errors
- Ensure all image URLs are valid

**Mobile nav not showing?**
- Only visible on screens < 768px width
- Use browser DevTools to test

**Build fails?**
- Run `npm install` again
- Check Node version: `node -v` (need 18+)

---

## 💡 Pro Tips

1. **Optimize Images**: Use WebP format, compress before upload
2. **Test Mobile**: Use Chrome DevTools (F12 → Toggle Device)
3. **WhatsApp Testing**: Use your own number first
4. **Performance**: Keep images under 500KB each

---

## 🎉 You're Ready!

Your luxury beauty salon website is complete with:
- ✅ Auto-changing carousel
- ✅ Mobile bottom navigation
- ✅ WhatsApp integration
- ✅ Fully responsive design
- ✅ No contact forms needed
- ✅ Ready to deploy

**Next Steps:**
1. Update WhatsApp number
2. Replace images
3. Test on mobile
4. Deploy!

---

**Questions? Check README.md for full documentation**
