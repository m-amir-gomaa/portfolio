# Personal Portfolio Website

A sleek, responsive developer portfolio showcasing systems engineering and web architectures. Built using **Vite + React** for the frontend, **Express (Node.js)** for the API backend, and styled with **Vanilla CSS** (No Tailwind) using modern CSS variables and glassmorphism layouts.

---

## 🛠️ Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Servers:**
   * Run the frontend dev environment (Vite, listening on port 3000):
     ```bash
     npm run dev
     ```
   * Run the Express API server (listening on port 5000):
     ```bash
     npm run server
     ```

---

## 🚀 Oracle VPS Hosting & Deployment Guide

This app is architected to be deployed on your **Oracle Cloud Free Tier VPS** (ARM Core, Ubuntu/NixOS environment).

### 1. Build the Frontend Assets
Compile the React frontend into optimized static HTML/CSS/JS bundles:
```bash
npm run build
```
This outputs all static assets to the `dist/` directory, which `server.js` (Express) serves automatically.

### 2. Configure Environment Variables
Create a `.env` file in the root folder of your VPS setup:
```env
PORT=5000
# Add SMTP details for form email sending if integrated
```

### 3. Keep Backend Running using PM2 (Process Manager)
To ensure the backend server runs continuously in the background and restarts on crashes or server reboots:
```bash
# Install PM2 globally
npm install -g pm2

# Start the Express server
pm2 start server.js --name "portfolio-backend"

# Save the PM2 process list and configure it to boot on server startup
pm2 save
pm2 startup
```

### 4. Configure Nginx Reverse Proxy
To map public HTTP/HTTPS traffic (port 80/443) to your Express backend (port 5000), set up Nginx:

1. Create a configuration file `/etc/nginx/sites-available/portfolio`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
2. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

### 5. Secure with HTTPS (Let's Encrypt SSL)
Generate free SSL certificates using Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
This automatically updates your Nginx configuration to support secure TLS/SSL traffic.
