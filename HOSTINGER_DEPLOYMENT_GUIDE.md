# 🚀 Hostinger CyberPanel Deployment Guide

Complete step-by-step guide to deploy your InternTrack Next.js app on Hostinger with CyberPanel (AlmaLinux 9 VPS).

---

## ✅ Prerequisites
- Hostinger VPS with CyberPanel installed
- Domain pointed to your VPS IP
- FTP/SFTP credentials or CyberPanel File Manager access
- Your project built and ready (you have `out/` folder)

---

## 📦 Part 1: Prepare Your Project for Upload

### Step 1: Build the Production Site

```powershell
cd C:\Users\admin\Desktop\HomePage\my-app
npm run build
```

This creates the `out/` folder with your static site.

### Step 2: Create Deployment Zip

```powershell
Compress-Archive -Path .\out\* -DestinationPath .\interntrack-deploy.zip -Force
```

You now have `interntrack-deploy.zip` ready to upload.

---

## 🌐 Part 2: Set Up Domain in CyberPanel

### Step 1: Login to CyberPanel
- Open browser: `https://your-vps-ip:8090`
- Login with your CyberPanel credentials

### Step 2: Create Website (if not exists)
1. Go to **Websites** → **Create Website**
2. Fill in:
   - **Domain Name**: `interntrack.online` (or your domain)
   - **Email**: `admin@interntrack.online`
   - **Package**: Select your hosting package
   - **PHP**: Select any (not needed for static site)
3. Click **Create Website**

### Step 3: Verify DNS Settings
In your domain registrar (Hostinger Domain Panel):
```
Type: A Record
Name: @
Value: your-vps-ip
TTL: Automatic

Type: A Record  
Name: www
Value: your-vps-ip
TTL: Automatic
```

Wait 5-30 minutes for DNS propagation.

---

## 📁 Part 3: Upload Your Site Files

### Method A: Using CyberPanel File Manager (Recommended)

#### Step 1: Access File Manager
1. In CyberPanel, go to **Websites** → **List Websites**
2. Find your domain → Click **Manage**
3. Click **File Manager**

#### Step 2: Navigate to public_html
1. Navigate to: `/home/interntrack.online/public_html/`
2. **Delete all existing files** (select all → Delete)

#### Step 3: Upload and Extract
1. Click **Upload** button
2. Select `interntrack-deploy.zip` from your computer
3. Wait for upload to complete
4. Right-click on the zip file → **Extract**
5. Select destination: `public_html/`
6. Click **Extract**
7. Delete the zip file after extraction

#### Step 4: Verify File Structure
Your `public_html/` should now contain:
```
public_html/
├── index.html           ← Main file (MUST be here)
├── _next/               ← Next.js assets
├── Images/              ← Your images
│   ├── Icon.png
│   ├── Icon3.png
│   └── User.jpg
├── fonts/               ← Custom fonts
├── privacy-policy/      ← Privacy policy page
│   └── index.html
├── favicon.ico
└── ...other files
```

**IMPORTANT**: Make sure `index.html` is directly in `public_html/`, NOT in a subfolder!

---

### Method B: Using SFTP (Alternative)

#### Step 1: Get SFTP Credentials
1. In CyberPanel → **FTP** → **Create FTP Account**
2. Or use your main server SSH credentials

#### Step 2: Connect with FileZilla
1. Download FileZilla (if needed)
2. Connect:
   - Host: `sftp://your-vps-ip`
   - Username: Your FTP/SSH user
   - Password: Your FTP/SSH password
   - Port: 22

#### Step 3: Upload Files
1. Navigate to: `/home/interntrack.online/public_html/`
2. Delete existing files
3. Extract `interntrack-deploy.zip` on your local PC first
4. Upload ALL contents of the `out/` folder to `public_html/`

---

## ⚙️ Part 4: Configure .htaccess (Important!)

### Step 1: Create .htaccess File
In CyberPanel File Manager (in `public_html/`):
1. Click **New File**
2. Name it: `.htaccess`
3. Edit and paste this content:

```apache
# Next.js Static Export Configuration
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Handle trailing slashes (Next.js uses them)
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !(.*)/$
    RewriteRule ^(.*)$ /$1/ [L,R=301]
    
    # Serve index.html for directories
    DirectoryIndex index.html
</IfModule>

# Security Headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Cache Static Assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType text/css "access plus 1 week"
    ExpiresByType application/javascript "access plus 1 week"
    ExpiresByType font/otf "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript
</IfModule>
```

4. **Save** the file

---

## 🔒 Part 5: Set Up SSL Certificate (HTTPS)

### Step 1: Install Let's Encrypt SSL
1. In CyberPanel → **SSL** → **Manage SSL**
2. Select your domain: `interntrack.online`
3. Click **Issue SSL**
4. Wait for certificate to be issued (1-2 minutes)

### Step 2: Force HTTPS
1. In CyberPanel → **Websites** → **List Websites**
2. Find your domain → Click **Manage**
3. Enable **Force HTTPS** toggle

---

## 🧪 Part 6: Test Your Website

### Step 1: Clear Cache
```powershell
# On your local browser, clear cache or use Incognito mode
```

### Step 2: Visit Your Site
Open browser and test:
- `http://interntrack.online` → Should redirect to HTTPS
- `https://interntrack.online` → Should load homepage
- `https://interntrack.online/privacy-policy/` → Should load privacy page
- Test theme toggle (light/dark mode)
- Test support modal (should open Gmail in new tab)

### Step 3: Test on Mobile
- Open on your phone to verify responsive design

---

## 🛠️ Troubleshooting

### Issue: 404 Not Found
**Solution**: 
- Verify `index.html` is in `public_html/` root (not in a subfolder)
- Check `.htaccess` file exists and has correct permissions (644)

### Issue: White Screen / Blank Page
**Solution**:
- Check browser console for errors (F12)
- Verify all files uploaded correctly
- Clear browser cache and reload

### Issue: Images Not Loading
**Solution**:
- Check `Images/` folder is in `public_html/`
- Verify file names match exactly (case-sensitive)
- Check file permissions (644 for files, 755 for folders)

### Issue: Privacy Policy Page Not Found
**Solution**:
- Verify `privacy-policy/index.html` exists
- Clear browser cache
- Check `.htaccess` trailing slash rules

### Issue: CSS/Styles Not Loading
**Solution**:
- Check `_next/` folder uploaded completely
- Verify no CORS errors in browser console
- Clear browser cache

### Issue: Fonts Not Loading
**Solution**:
- Check `fonts/` folder in `public_html/`
- Verify `.otf` files uploaded correctly
- Check file permissions (644)

---

## 🔄 Part 7: Updating Your Site (Future Updates)

When you make changes to your site:

### Step 1: Build New Version
```powershell
cd C:\Users\admin\Desktop\HomePage\my-app
npm run build
```

### Step 2: Backup Old Version (Optional)
In CyberPanel File Manager:
- Rename `public_html` to `public_html_backup`
- Create new `public_html` folder

### Step 3: Upload New Version
- Follow Part 3 steps again
- Upload new `out/` contents

### Step 4: Clear CDN/Cache (if using)
- In CyberPanel → Clear cache
- Or in browser: Ctrl+Shift+R (hard refresh)

---

## 📊 Part 8: Performance Optimization

### Enable Gzip Compression
Already included in `.htaccess` above.

### Set Up CloudFlare (Optional but Recommended)
1. Sign up at cloudflare.com
2. Add your domain
3. Point nameservers to CloudFlare
4. Enable CDN and caching
5. Enable "Always Use HTTPS"

### Monitor Site Performance
Use these tools:
- Google PageSpeed Insights
- GTmetrix
- Pingdom

---

## 🎉 Success Checklist

- [ ] Built project with `npm run build`
- [ ] Created deployment zip file
- [ ] Uploaded to CyberPanel File Manager
- [ ] Verified `index.html` is in `public_html/` root
- [ ] Created `.htaccess` file
- [ ] Installed SSL certificate
- [ ] Enabled Force HTTPS
- [ ] Tested homepage loads correctly
- [ ] Tested privacy policy page
- [ ] Tested support modal opens Gmail
- [ ] Tested on mobile device
- [ ] Set up CloudFlare (optional)

---

## 📞 Support Resources

- CyberPanel Documentation: https://cyberpanel.net/docs/
- Hostinger Support: https://www.hostinger.com/contact
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## 🔗 Quick Commands Reference

```powershell
# Build project
npm run build

# Create deployment zip
Compress-Archive -Path .\out\* -DestinationPath .\interntrack-deploy.zip -Force

# Check if build was successful
Test-Path .\out\index.html

# List out folder contents
Get-ChildItem .\out -Recurse | Select-Object FullName
```

---

**Your InternTrack site should now be live at https://interntrack.online! 🎉**
