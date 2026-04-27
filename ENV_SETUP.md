# 📝 Environment Variables Setup Guide

## 📍 Where to Add .env File

### ✅ Location: `client/.env`

```
Beauty/
└── client/
    └── .env  ← Create file here
```

---

## 📝 .env File Content

Create `client/.env` with:

```env
VITE_WHATSAPP_NUMBER=1234567890
```

**Replace `1234567890` with your actual WhatsApp number**

---

## 📋 Format Examples

| Country | Format | Example |
|---------|--------|---------|
| **USA** | 1 + 10 digits | `15551234567` |
| **India** | 91 + 10 digits | `919876543210` |
| **UK** | 44 + 10 digits | `447911123456` |
| **UAE** | 971 + 9 digits | `971501234567` |
| **Australia** | 61 + 9 digits | `61412345678` |

**Format:** Country code + number (no spaces, no + sign)

---

## ✅ What's Already Done

All 4 components are updated to use environment variable:

1. ✅ `src/components/Hero.jsx`
2. ✅ `src/components/Navbar.jsx`
3. ✅ `src/components/MobileBottomNav.jsx`
4. ✅ `src/components/Membership.jsx`

**Code used:**
```javascript
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
```

---

## 🚀 How to Use

### Step 1: Create .env File
```bash
cd client
nano .env
# Or use any text editor
```

### Step 2: Add Your Number
```env
VITE_WHATSAPP_NUMBER=15551234567
```

### Step 3: Restart Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

## 🌐 Deployment Setup

### For Netlify:

1. Go to your site settings
2. Click "Environment variables"
3. Add:
   - **Key:** `VITE_WHATSAPP_NUMBER`
   - **Value:** `15551234567` (your number)
4. Redeploy

### For Vercel:

1. Go to project settings
2. Click "Environment Variables"
3. Add:
   - **Name:** `VITE_WHATSAPP_NUMBER`
   - **Value:** `15551234567` (your number)
4. Redeploy

---

## ⚠️ Important Notes

### 1. File Name Must Be Exact
- ✅ `.env` (correct)
- ❌ `env` (wrong)
- ❌ `.env.local` (won't work in production)

### 2. Must Start with VITE_
- ✅ `VITE_WHATSAPP_NUMBER` (correct)
- ❌ `WHATSAPP_NUMBER` (won't work)
- ❌ `REACT_APP_WHATSAPP_NUMBER` (wrong framework)

### 3. Restart Required
After creating/editing `.env`, restart dev server:
```bash
# Stop: Ctrl+C
# Start: npm run dev
```

### 4. Don't Commit .env
The `.gitignore` already includes `.env`, so it won't be pushed to GitHub.

---

## 🔍 Verify It's Working

### Test Locally:

1. Create `.env` file
2. Add your number
3. Restart server
4. Open browser console (F12)
5. Type: `import.meta.env.VITE_WHATSAPP_NUMBER`
6. Should show your number

### Test Links:

1. Click "Book Now" button
2. Should open WhatsApp with your number
3. Check mobile bottom nav green box
4. Check membership plan buttons

---

## 🐛 Troubleshooting

### Problem: WhatsApp links still show 1234567890

**Solution:**
1. Check `.env` file is in `client/` folder
2. Check variable name is `VITE_WHATSAPP_NUMBER`
3. Restart dev server
4. Clear browser cache

### Problem: .env not working in production

**Solution:**
1. Add environment variable in Netlify/Vercel dashboard
2. Don't rely on `.env` file for production
3. Redeploy after adding variable

### Problem: Build fails

**Solution:**
1. Check `.env` syntax (no quotes needed)
2. Check variable name starts with `VITE_`
3. Try building: `npm run build`

---

## 📊 File Structure

```
client/
├── .env                    ← Your environment file
├── .env.example           ← Template (already exists)
├── src/
│   └── components/
│       ├── Hero.jsx       ← Uses env variable ✅
│       ├── Navbar.jsx     ← Uses env variable ✅
│       ├── MobileBottomNav.jsx  ← Uses env variable ✅
│       └── Membership.jsx ← Uses env variable ✅
└── package.json
```

---

## ✅ Quick Setup Commands

```bash
# Navigate to client folder
cd client

# Create .env file
echo "VITE_WHATSAPP_NUMBER=15551234567" > .env

# Restart server
npm run dev
```

**Replace `15551234567` with your actual number!**

---

## 🎯 Summary

1. ✅ Create `client/.env`
2. ✅ Add `VITE_WHATSAPP_NUMBER=your_number`
3. ✅ Restart dev server
4. ✅ Test WhatsApp links
5. ✅ Add to Netlify/Vercel for production

---

**Your .env is ready! All components will use your WhatsApp number automatically! 🎉**
