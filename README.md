# Lumina Essence - Luxury Beauty Salon Website

A modern, high-end beauty salon website built with React, Shadcn UI, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Sticky Transparent Navbar** - White transparent navbar with blur effects
- **Auto-Changing Carousel** - 5 beautiful images rotating every 4 seconds
- **Mobile Bottom Navigation** - Sticky bottom nav with 3 options (Images, Menu, Membership)
- **WhatsApp Sticky Box** - Green contact box above bottom nav (mobile only)
- **Service Cards** - 6 services with immersive hover effects
- **Gallery Section** - Responsive grid with smooth animations
- **Membership Plans** - 3 tier membership options
- **Fully Responsive** - Optimized for all devices
- **Direct WhatsApp Integration** - All CTAs redirect to WhatsApp

## 🎨 Design System

| Element | Color Code | Usage |
|---------|-----------|-------|
| Primary Background | `#FAFAF9` | Clean & Airy |
| Accent Gold | `#C5A059` | Luxurious highlights |
| Text/Contrast | `#1C1C1C` | Modern & Bold |
| WhatsApp Green | `#25D366` | Contact buttons |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌐 Deploy to Render

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `lumina-essence`
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **"Create Static Site"**

Your site will be live at: `https://lumina-essence.onrender.com`

## 🔧 Configuration

### Update WhatsApp Number
Edit the phone number in these files:
- `src/components/Hero.jsx` (line 7)
- `src/components/Navbar.jsx` (line 14)
- `src/components/MobileBottomNav.jsx` (line 8)
- `src/components/Membership.jsx` (line 8)

Replace `1234567890` with your actual WhatsApp number (with country code, no + or spaces).

**Format**: `15551234567` (for US number +1 555-123-4567)

### Update Images
Replace placeholder images in:
- `src/components/Hero.jsx` (carousel images)
- `src/components/Services.jsx` (service images)
- `src/components/Gallery.jsx` (gallery images)

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Navbar.jsx       # Sticky transparent navbar
│   │   ├── Hero.jsx         # Auto-carousel (5 images)
│   │   ├── Services.jsx     # 6 service cards
│   │   ├── Gallery.jsx      # Image gallery
│   │   ├── Membership.jsx   # 3 membership plans
│   │   └── MobileBottomNav.jsx  # Mobile bottom nav + WhatsApp box
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Shadcn UI** - Component library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Icons** - Additional icons
- **React Router** - Navigation

## 📱 Features Breakdown

### Sticky Navbar
- Transparent white background with blur
- Smooth scroll effects
- Mobile hamburger menu
- All links work on mobile & desktop

### Hero Carousel
- 5 auto-changing images (4 seconds each)
- Manual navigation arrows
- Dot indicators
- Smooth fade transitions
- Fully responsive

### Mobile Bottom Navigation
- Sticky at bottom (mobile only)
- 3 options: Images, Menu, Membership
- Icons from React Icons
- Smooth transitions

### WhatsApp Sticky Box
- Green box with rounded corners
- Shows "Contact Us" + phone number
- Positioned above bottom nav (mobile only)
- Direct WhatsApp redirect

### Services
- 6 service cards
- Hover scale effects
- Image zoom on hover
- Fully responsive grid

### Gallery
- 8 images in responsive grid
- Staggered animations
- Hover effects

### Membership
- 3 tier plans (Silver, Gold, Platinum)
- Feature lists
- WhatsApp integration for each plan

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Fonts
Update Google Fonts in `index.html`:
- Serif: Cormorant Garamond
- Sans: Montserrat

### Content
Update text content in respective component files.

## 📱 Mobile Features

- Bottom navigation (3 icons)
- WhatsApp sticky box
- Hamburger menu
- Touch-friendly buttons
- Optimized layouts

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Support

For issues or questions, open an issue on GitHub.

---

Built with ❤️ for Lumina Essence Beauty Salon
