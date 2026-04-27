# ☁️ Cloudflare Pages - Wrangler CLI Deployment

## 🚀 Deploy with Wrangler CLI

### Step 1: Install Wrangler (if not installed)
```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare
```bash
wrangler login
```
This will open browser for authentication.

### Step 3: Build the Project
```bash
cd /Users/rahulpatel/Downloads/Beauty
npm run build
```

### Step 4: Deploy to Cloudflare Pages
```bash
npx wrangler pages deploy client/dist --project-name=lumina-essence
```

---

## 📋 Complete Commands:

### First Time Deployment:
```bash
# 1. Login
wrangler login

# 2. Build
npm run build

# 3. Deploy
npx wrangler pages deploy client/dist --project-name=lumina-essence
```

### Subsequent Deployments:
```bash
# Build and deploy
npm run build && npx wrangler pages deploy client/dist --project-name=lumina-essence
```

---

## 🔧 Wrangler Configuration:

The `wrangler.toml` file is already created with:

```toml
name = "lumina-essence-beauty-salon"
compatibility_date = "2024-01-01"

[build]
command = "cd client && npm install && npm run build"
cwd = "."

[build.upload]
format = "service-worker"
dir = "client/dist"
```

---

## 🌐 Set Environment Variables:

### Option 1: Via Wrangler CLI
```bash
wrangler pages secret put VITE_WHATSAPP_NUMBER
# Enter: 918639660004
```

### Option 2: Via Dashboard
1. Go to Cloudflare Dashboard
2. Workers & Pages → Your Project
3. Settings → Environment Variables
4. Add: `VITE_WHATSAPP_NUMBER` = `918639660004`

---

## 📊 Deployment Commands:

### Production Deploy:
```bash
npx wrangler pages deploy client/dist --project-name=lumina-essence --branch=main
```

### Preview Deploy (Non-production):
```bash
npx wrangler pages deploy client/dist --project-name=lumina-essence --branch=preview
```

### With Environment Variables:
```bash
npx wrangler pages deploy client/dist \
  --project-name=lumina-essence \
  --env=production
```

---

## 🔄 Automatic Deployment Setup:

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install and Build
        run: |
          cd client
          npm install
          npm run build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy client/dist --project-name=lumina-essence
```

### Option 2: Connect GitHub in Dashboard
1. Go to Cloudflare Pages Dashboard
2. Connect to Git
3. Select repository
4. Automatic deployments on push

---

## 🐛 Troubleshooting:

### Error: "Not logged in"
```bash
wrangler login
```

### Error: "Project not found"
```bash
# Create project first in dashboard, then deploy
npx wrangler pages deploy client/dist --project-name=lumina-essence
```

### Error: "Build failed"
```bash
# Build locally first
cd client
npm install
npm run build
cd ..
npx wrangler pages deploy client/dist --project-name=lumina-essence
```

### Error: "Permission denied"
```bash
# Re-authenticate
wrangler logout
wrangler login
```

---

## 📱 After Deployment:

Your site will be available at:
- **Production:** `https://lumina-essence.pages.dev`
- **Custom Domain:** Configure in dashboard

---

## ✅ Deployment Checklist:

- [ ] Wrangler installed (`npm install -g wrangler`)
- [ ] Logged in (`wrangler login`)
- [ ] Project built (`npm run build`)
- [ ] Environment variables set
- [ ] Deploy command run
- [ ] Site tested

---

## 🎯 Quick Deploy Script:

Create `deploy.sh`:

```bash
#!/bin/bash

echo "🔨 Building project..."
npm run build

echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy client/dist --project-name=lumina-essence

echo "✅ Deployment complete!"
echo "🌐 Visit: https://lumina-essence.pages.dev"
```

Make executable:
```bash
chmod +x deploy.sh
```

Run:
```bash
./deploy.sh
```

---

## 🌟 Wrangler Commands Reference:

```bash
# Login
wrangler login

# Logout
wrangler logout

# Deploy
npx wrangler pages deploy client/dist --project-name=lumina-essence

# List deployments
wrangler pages deployment list --project-name=lumina-essence

# View logs
wrangler pages deployment tail --project-name=lumina-essence

# Set secret
wrangler pages secret put VITE_WHATSAPP_NUMBER --project-name=lumina-essence

# List secrets
wrangler pages secret list --project-name=lumina-essence
```

---

## 🎉 You're Ready!

Deploy with:
```bash
npm run build && npx wrangler pages deploy client/dist --project-name=lumina-essence
```

Your site will be live in 1-2 minutes! ☁️✨

---

**For automatic deployments, connect GitHub in Cloudflare Dashboard!**
