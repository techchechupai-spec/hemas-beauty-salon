# ⚙️ Setup Guide

## 📦 Installation

```bash
cd client
npm install
```

---

## 🔧 Configuration

### 1. Update WhatsApp Number (Required)

Find and replace `1234567890` in these files:

**File 1:** `src/components/Hero.jsx`
```javascript
const whatsappNumber = '1234567890'; // Line 7
```

**File 2:** `src/components/Navbar.jsx`
```javascript
const whatsappNumber = '1234567890'; // Line 14
```

**File 3:** `src/components/MobileBottomNav.jsx`
```javascript
<a href="https://wa.me/1234567890" // Line 8
```

**File 4:** `src/components/Membership.jsx`
```javascript
const whatsappNumber = '1234567890'; // Line 8
```

**Format Examples:**
- US: `15551234567` (for +1 555-123-4567)
- India: `919876543210` (for +91 98765 43210)
- UK: `447911123456` (for +44 7911 123456)

### 2. Update Images (Optional)

**Carousel Images (5):** `src/components/Hero.jsx`
```javascript
const slides = [
  { image: 'YOUR_IMAGE_URL', title: '...', subtitle: '...' },
  // ... 5 total
];
```

**Service Images (6):** `src/components/Services.jsx`
```javascript
const services = [
  { image: 'YOUR_IMAGE_URL', title: '...', description: '...' },
  // ... 6 total
];
```

**Gallery Images (8):** `src/components/Gallery.jsx`
```javascript
const images = [
  'YOUR_IMAGE_URL',
  // ... 8 total
];
```

---

## 🚀 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
cd client
vercel --prod
```

### Netlify
```bash
# Build
npm run build

# Drag 'dist' folder to:
# https://app.netlify.com/drop
```

---

## ✅ Checklist

- [ ] Install dependencies
- [ ] Update WhatsApp number (4 files)
- [ ] Test locally (`npm run dev`)
- [ ] Replace images (optional)
- [ ] Build (`npm run build`)
- [ ] Deploy (Vercel or Netlify)
- [ ] Test production site
- [ ] Test on mobile
- [ ] Test WhatsApp links

---

**Need help? Check README.md or FREE_DEPLOYMENT.md**
