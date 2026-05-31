# How to Run the Portfolio — Terminal Commands

Quick reference for starting, stopping, and serving the site from the command line. Pick the section that matches your shell or environment.

---

## TL;DR (Windows PowerShell — what you have right now)

```powershell
# 1. Open PowerShell, then move into the project folder
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"

# 2. Start the local server
powershell -ExecutionPolicy Bypass -File serve.ps1

# 3. In another window or tab, open the site in your browser
Start-Process "http://localhost:5500/"
```

To stop the server: press `Ctrl + C` in the terminal where `serve.ps1` is running.

---

## Option 1 — PowerShell server (recommended, no installs needed)

The `serve.ps1` script ships with the project. It starts a tiny static-file HTTP server on port `5500`. No Node, no Python, no extra dependencies.

**Start the server**

```powershell
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
powershell -ExecutionPolicy Bypass -File serve.ps1
```

You'll see:

```
Serving C:\Users\Joelj\Downloads\Portfolio Website Joel at http://localhost:5500/
Press Ctrl+C to stop.
```

**Open the site**

In a new terminal window or tab:

```powershell
Start-Process "http://localhost:5500/"
```

Or just paste `http://localhost:5500/` into any browser.

**Stop the server**

In the terminal that's running it: `Ctrl + C`

**Change the port**

Edit `serve.ps1`, change the line `$port = 5500` to any free port (e.g. `8080`, `3000`).

---

## Option 2 — Windows CMD (Command Prompt)

```cmd
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Same script works from CMD. Stop with `Ctrl + C`.

To open the browser from CMD:

```cmd
start http://localhost:5500/
```

---

## Option 3 — Just open the file (no server)

If you don't need a local server, double-click `index.html` or run:

```powershell
Start-Process "index.html"
```

```cmd
start index.html
```

> **Caveat:** Some browsers block JavaScript modules and certain CDN scripts when you open files via `file://`. If you see a blank page or console errors, use the server method instead.

---

## Option 4 — Python (if you have Python installed)

```powershell
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"

# Python 3
python -m http.server 5500

# If 'python' isn't recognized but 'py' is:
py -m http.server 5500
```

Then open `http://localhost:5500/`.

Stop with `Ctrl + C`.

---

## Option 5 — Node.js (if you have Node installed)

**One-time install of a dev server**

```powershell
npm install -g serve
```

**Start the server**

```powershell
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
serve -l 5500
```

Or use `npx` (no install required):

```powershell
npx serve -l 5500
```

Or `http-server`:

```powershell
npx http-server -p 5500
```

Stop with `Ctrl + C`.

---

## Option 6 — VS Code Live Server extension (no terminal at all)

1. Install the **Live Server** extension by Ritwick Dey
2. Right-click `index.html` in the VS Code file tree
3. Select **Open with Live Server**
4. Auto-reload on save included

---

## macOS / Linux equivalents

**Bash / zsh — Python**

```bash
cd ~/portfolio
python3 -m http.server 5500
open http://localhost:5500/      # macOS
xdg-open http://localhost:5500/  # Linux
```

**Bash / zsh — Node**

```bash
cd ~/portfolio
npx serve -l 5500
```

---

## Daily workflow (keep this open)

```powershell
# Move to project
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"

# Start server (leave this terminal open)
powershell -ExecutionPolicy Bypass -File serve.ps1

# In another terminal, open browser
Start-Process "http://localhost:5500/"
```

After that, just edit `app.js` / `styles.css` / `effects.js` in your editor, save, and refresh the browser tab to see changes.

---

## Common terminal tasks

### Check if the port is already in use

```powershell
Get-NetTCPConnection -LocalPort 5500 -ErrorAction SilentlyContinue
```

If something shows up, the port is taken. Either kill that process or change the port in `serve.ps1`.

### Kill a process holding port 5500

```powershell
# Find the process ID
Get-NetTCPConnection -LocalPort 5500 | Select-Object OwningProcess

# Kill it (replace 1234 with the actual PID)
Stop-Process -Id 1234 -Force
```

### List files in the project

```powershell
Get-ChildItem
```

### Open the project folder in File Explorer

```powershell
explorer .
```

### Open the project in VS Code (if installed)

```powershell
code .
```

---

## Deploying online — terminal commands

Once you're ready to put it on the internet, pick one:

### Vercel (recommended)

```powershell
# One-time install
npm install -g vercel

# Deploy from project folder
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
vercel
```

Follow the prompts. You'll get a `https://your-portfolio.vercel.app` URL within a minute.

### Netlify

```powershell
# One-time install
npm install -g netlify-cli

# Login (opens browser)
netlify login

# Deploy
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
netlify deploy --prod
```

### GitHub Pages (via Git)

```powershell
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Joel7x/portfolio.git
git push -u origin main
```

Then go to GitHub → repo Settings → Pages → enable on `main` branch.

### Cloudflare Pages (via Wrangler)

```powershell
npm install -g wrangler
wrangler pages deploy . --project-name=joel-portfolio
```

---

## Troubleshooting

**`powershell` not recognized**
You're already in PowerShell. Drop the `powershell` prefix:

```powershell
.\serve.ps1
```

If you get an execution-policy error, run once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

**Port 5500 already in use**
Either kill the process holding it (see above) or edit `serve.ps1` and change `$port = 5500` to something else like `8080`.

**Browser shows old content after edits**
Hard-refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (macOS). Or open DevTools (F12), right-click the reload button, choose "Empty Cache and Hard Reload".

**`Get-Process` shows the script but it won't stop**
From any terminal:

```powershell
Get-Process powershell | Stop-Process
```

(careful — closes all PowerShell windows)

---

## Cheat sheet

```powershell
# Start
cd "C:\Users\Joelj\Downloads\Portfolio Website Joel"
powershell -ExecutionPolicy Bypass -File serve.ps1

# Visit
http://localhost:5500/

# Stop
Ctrl + C

# Change port
Edit serve.ps1 → $port = 5500

# Hard refresh browser
Ctrl + Shift + R
```

That's all you need. Bookmark this file.
