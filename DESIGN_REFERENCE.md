# 🎨 Visual Design Reference

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR (Glassmorphism - Floating)                     │
│  [Lumina Essence]        [Services] [Gallery] [Book]   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  HERO SECTION (Split Screen)                           │
│  ┌──────────────────┬──────────────────┐              │
│  │                  │                  │              │
│  │  Redefine Your   │   [High-Quality  │              │
│  │  Radiance        │    Beauty Image] │              │
│  │                  │                  │              │
│  │  [Book] [WhatsApp]│                 │              │
│  └──────────────────┴──────────────────┘              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SERVICES SECTION                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  [Image] │  │  [Image] │  │  [Image] │            │
│  │  Hair    │  │  Facial  │  │  Bridal  │            │
│  │  Styling │  │  Organic │  │  Glow    │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  GALLERY SECTION                                        │
│  ┌────┐ ┌────┐ ┌────┐                                 │
│  │ 1  │ │ 2  │ │ 3  │                                 │
│  └────┘ └────┘ └────┘                                 │
│  ┌────┐ ┌────┐ ┌────┐                                 │
│  │ 4  │ │ 5  │ │ 6  │                                 │
│  └────┘ └────┘ └────┘                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CONTACT / BOOKING FORM                                 │
│  ┌─────────────────────────────────────┐              │
│  │  [Name]          [Email]            │              │
│  │  [Phone]         [Service ▼]        │              │
│  │  [Date]          [Time]             │              │
│  │  [Message...]                       │              │
│  │         [Book Now Button]           │              │
│  └─────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────┘

                                    ┌──────┐
                                    │ 💬   │ WhatsApp FAB
                                    │ (Pulse)
                                    └──────┘
```

---

## Color Usage Map

### Navbar
- Background: White with 80% opacity + blur
- Text: `#1C1C1C`
- Book Button: `#C5A059` (gold)

### Hero Section
- Background: Gradient `#FAFAF9` to `#F5F5F4`
- Title: `#1C1C1C` (Cormorant Garamond, 5rem)
- Subtitle: `#666` (Montserrat)
- Primary Button: `#C5A059`
- WhatsApp Button: `#25D366`

### Services
- Background: White
- Cards: `#FAFAF9` with shadow
- Title: `#1C1C1C` (Cormorant Garamond)
- Description: `#666`

### Gallery
- Background: `#FAFAF9`
- Images: Rounded corners, shadow on hover

### Contact Form
- Background: White card on gradient
- Inputs: Border `#E5E5E5`, Focus: `#C5A059`
- Button: `#C5A059`
- Labels: `#1C1C1C`

### WhatsApp FAB
- Background: `#25D366`
- Icon: White
- Pulse Ring: `#25D366` with opacity animation

---

## Typography Scale

### Headings (Cormorant Garamond - Serif)
- H1 (Hero): 5rem (80px) - Light weight
- H2 (Sections): 3.5rem (56px) - Semibold
- H3 (Cards): 1.8rem (29px) - Semibold

### Body (Montserrat - Sans)
- Large: 1.2rem (19px) - Hero subtitle
- Regular: 1rem (16px) - Body text
- Small: 0.95rem (15px) - Nav links

### Spacing
- Section padding: 6rem (96px) vertical
- Container max-width: 1400px
- Grid gap: 3rem (48px)

---

## Animation Details

### Navbar
- Initial: translateY(-100px)
- Animate: translateY(0)
- Duration: 0.6s
- Scroll effect: Background blur + shadow

### Hero
- Left side: Fade in from left (x: -50px)
- Right side: Fade in from right (x: 50px)
- Delay: 0.2s and 0.4s

### Service Cards
- Fade in from bottom (y: 50px)
- Stagger delay: 0.2s each
- Hover: Scale 1.05
- Image zoom: Scale 1.1 on hover

### Gallery
- Fade in + scale (0.8 to 1)
- Stagger delay: 0.1s each
- Hover: Scale 1.05

### WhatsApp FAB
- Initial: Scale 0
- Animate: Scale 1 (spring)
- Pulse: Scale 1 to 1.5, opacity 0.5 to 0
- Duration: 2s infinite

### Contact Form
- Fade in from bottom (y: 50px)
- Input focus: Ring animation
- Button hover: Translate Y -3px + shadow

---

## Responsive Breakpoints

### Mobile (< 768px)
- Hero: Stack vertically
- Services: 1 column
- Gallery: 2 columns
- Form: Full width inputs
- Font sizes: Reduced by 30%

### Tablet (768px - 1024px)
- Hero: Stack or side-by-side
- Services: 2 columns
- Gallery: 3 columns
- Form: 2 columns

### Desktop (> 1024px)
- Hero: 2 columns (50/50)
- Services: 3 columns
- Gallery: 3 columns
- Form: 2 columns
- Full animations enabled

---

## Interaction States

### Buttons
- Default: Gold background
- Hover: Darker + lift (-3px) + shadow
- Active: Scale 0.95
- Focus: Ring outline

### Cards
- Default: Subtle shadow
- Hover: Larger shadow + scale 1.05
- Image: Zoom 1.1x

### Inputs
- Default: Border gray
- Focus: Border gold + ring
- Error: Border red
- Filled: Border darker

### Links
- Default: Dark text
- Hover: Gold color
- Active: Underline

---

## Micro-Interactions

1. **Navbar Logo**: Subtle scale on hover
2. **Service Cards**: Image parallax on scroll (optional)
3. **Gallery Items**: Lightbox on click (ready to add)
4. **Form Inputs**: Label float animation
5. **WhatsApp FAB**: Tooltip on hover
6. **Scroll Indicator**: Fade in/out based on position

---

## Accessibility Features

- ✅ Semantic HTML (nav, section, article)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast ratio > 4.5:1
- ✅ Alt text on images
- ✅ Form labels properly associated

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

---

## Performance Optimizations

- ✅ Code splitting (Vite automatic)
- ✅ Lazy loading images (native)
- ✅ CSS purging (Tailwind)
- ✅ Minification (Vite)
- ✅ Tree shaking (Vite)
- ✅ Gzip compression (Render)

---

**This design creates a luxurious, modern experience that converts visitors into clients!**
