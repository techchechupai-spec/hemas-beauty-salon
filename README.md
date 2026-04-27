# Lumina Essence - Luxury Beauty Salon Website

A modern, high-end beauty salon website built with React, Shadcn UI, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Glassmorphism Navigation** - Floating header with blur effects
- **Split-Screen Hero** - Elegant typography with high-quality imagery
- **WhatsApp Integration** - Floating action button with pulse animation
- **Service Cards** - Immersive hover-scale effects
- **Gallery Section** - Responsive grid with smooth animations
- **Booking Form** - Beautiful contact form with Shadcn UI components
- **Fully Responsive** - Mobile-first design

## 🎨 Design System

| Element | Color Code | Usage |
|---------|-----------|-------|
| Primary Background | `#FAFAF9` | Clean & Airy |
| Accent Gold | `#C5A059` | Luxurious highlights |
| Text/Contrast | `#1C1C1C` | Modern & Bold |
| WhatsApp Green | `#25D366` | Action buttons |

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

The app will run on `http://localhost:3000`

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
Edit the phone number in:
- `src/components/WhatsAppFAB.jsx` (line 6)
- `src/components/Hero.jsx` (line 25)
- `src/components/Contact.jsx` (line 22)

Replace `1234567890` with your actual WhatsApp number (with country code, no + or spaces).

### Update Images
Replace placeholder images in:
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/components/Gallery.jsx`

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── WhatsAppFAB.jsx
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
- **React Router** - Navigation

## 📱 Features Breakdown

### Glassmorphism Navbar
- Transparent on scroll top
- Blurred background when scrolled
- Smooth animations

### Hero Section
- Split-screen layout
- Elegant serif typography
- WhatsApp CTA button
- Responsive design

### Services
- Card-based layout
- Hover scale effects
- Image zoom on hover

### Gallery
- Masonry grid layout
- Staggered animations
- Lightbox-ready

### Contact Form
- Shadcn form components
- WhatsApp integration
- Form validation

### WhatsApp FAB
- Fixed floating button
- Pulse animation
- Direct chat link

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Fonts
Update Google Fonts in `index.html`:
- Serif: Cormorant Garamond
- Sans: Montserrat

### Content
Update text content in respective component files.

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Support

For issues or questions, open an issue on GitHub.

---

Built with ❤️ for Lumina Essence Beauty Salon
