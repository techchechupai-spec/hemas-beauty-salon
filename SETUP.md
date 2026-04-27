# ⚡ Quick Setup Guide

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

### Step 3: Customize Your Site

#### Update WhatsApp Number
Replace `1234567890` with your number in:
- `src/components/WhatsAppFAB.jsx` (line 6)
- `src/components/Hero.jsx` (line 25)  
- `src/components/Contact.jsx` (line 22)

Format: Country code + number (no spaces, no +)
Example: `15551234567` for US number

#### Update Content
- **Salon Name**: Search for "Lumina Essence" and replace
- **Services**: Edit `src/components/Services.jsx`
- **Images**: Replace URLs in Hero, Services, Gallery components
- **Colors**: Modify `tailwind.config.js`

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder - ready to deploy!

---

## 🚀 Deploy to Render

1. Push to GitHub
2. Connect to Render
3. Configure:
   - Root: `client`
   - Build: `npm install && npm run build`
   - Publish: `dist`
4. Deploy!

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.

---

## 🎨 Features Included

✅ Glassmorphism navbar with scroll effects
✅ Split-screen hero with elegant typography
✅ WhatsApp floating button with pulse animation
✅ Service cards with hover effects
✅ Responsive gallery grid
✅ Beautiful booking form
✅ Fully mobile responsive
✅ Smooth animations with Framer Motion
✅ Shadcn UI components
✅ Tailwind CSS styling

---

## 🛠️ Tech Stack

- React 18
- Vite (super fast!)
- Shadcn UI
- Tailwind CSS
- Framer Motion
- Lucide Icons

---

## 📱 Test Responsiveness

```bash
# Desktop
Open http://localhost:5173

# Mobile
Open http://localhost:5173 and use browser DevTools (F12)
Toggle device toolbar (Ctrl+Shift+M)
```

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ⬜ Update WhatsApp number
4. ⬜ Replace images
5. ⬜ Customize content
6. ⬜ Test on mobile
7. ⬜ Deploy to Render

---

**Need help? Check README.md or DEPLOYMENT.md**

Happy coding! ✨
