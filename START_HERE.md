# 🚀 START HERE - Quick Setup

## ⚡ 3 Steps to Launch

### Step 1: Install
```bash
cd client
npm install
```

### Step 2: Update WhatsApp Number
Replace `1234567890` in these 4 files:
1. `src/components/Hero.jsx` (line 7)
2. `src/components/Navbar.jsx` (line 14)
3. `src/components/MobileBottomNav.jsx` (line 8)
4. `src/components/Membership.jsx` (line 8)

**Format:** `15551234567` (country code + number, no spaces, no +)

### Step 3: Deploy

**Option A: Vercel (Easiest)**
```bash
npm install -g vercel
cd client
vercel login
vercel --prod
```

**Option B: Netlify (Drag & Drop)**
```bash
cd client
npm run build
# Drag 'dist' folder to netlify.com/drop
```

---

## ✅ What You Got

- ✅ Auto-changing carousel (5 images)
- ✅ Mobile bottom nav (3 icons)
- ✅ WhatsApp green box (mobile)
- ✅ 6 service cards
- ✅ 8-image gallery
- ✅ 3 membership plans
- ✅ Fully responsive
- ✅ No contact forms

---

## 📱 Mobile Features

**Bottom Navigation:**
- 📷 Images → Gallery
- 🍴 Menu → Services
- 👑 Membership → Plans

**WhatsApp Box:**
- Green box above bottom nav
- Shows phone number
- Direct WhatsApp link

---

## 🔧 Test Locally

```bash
cd client
npm run dev
# Open http://localhost:5173
```

---

## 📚 More Help

- **Full Guide:** README.md
- **Deployment Fix:** DEPLOYMENT_FIX.md
- **Free Hosting:** FREE_DEPLOYMENT.md

---

**Ready to launch! 🎉**
