# Joel Jimmy — Portfolio Website

A modern, premium portfolio focused on Agentic AI, Cloud Computing, and Full-Stack Web. Built with React (CDN), modern CSS, Three.js for 3D, and Lenis for smooth scrolling. No build step needed — opens straight in the browser.

> **Live focus areas:** Agentic AI · Cloud Computing · Full-Stack Web (vibe domain)

---

## How to run locally

You don't need Node, npm, or any toolchain. Two options:

**Option 1 — Just open it**

```
Double-click index.html
```

**Option 2 — Local server (recommended for full features)**

```powershell
# From the project folder
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then visit `http://localhost:5500/`.

---

## File structure

```
.
├── index.html       Entry point + all CDN imports + loader markup
├── app.js           ALL React components + the PORTFOLIO data object
├── styles.css       ALL CSS — themes, layout, animations, components
├── effects.js       Custom cursor, particle bg, Three.js scene, smooth scroll
├── serve.ps1        PowerShell static file server
└── README.md        You are here
```

**Where to edit what**

| If you want to change…          | Open this file                    | Find this section                 |
| ------------------------------- | --------------------------------- | --------------------------------- |
| Your name, email, phone, links  | `app.js`                          | `PORTFOLIO` object (top of file)  |
| Skills / technologies            | `app.js`                          | `PORTFOLIO.skills`                |
| Project case studies            | `app.js`                          | `PORTFOLIO.projects`              |
| Services offered                 | `app.js`                          | `PORTFOLIO.services`              |
| Work experience                  | `app.js`                          | `PORTFOLIO.experience`            |
| Education / certifications      | `app.js`                          | `PORTFOLIO.education`, `.certifications` |
| Focus areas (3 main domains)     | `app.js`                          | `PORTFOLIO.focus`                 |
| Tech marquee strip               | `app.js`                          | `PORTFOLIO.marquee`               |
| Typewriter rotating roles        | `app.js`                          | `PORTFOLIO.typewriter`            |
| Colors / theme                   | `styles.css`                      | `:root` block (top)               |
| Fonts                            | `index.html`                      | `<link>` to Google Fonts          |
| Page title / meta                | `index.html`                      | `<title>`, `<meta>` tags          |
| 3D shapes in background          | `effects.js`                      | `THREE.JS HERO 3D SHAPE` section  |

---

## Quick edits — the most common updates

### 1. Update your name, email, phone, social links

Open `app.js`. At the top you'll see the `PORTFOLIO` object:

```js
const PORTFOLIO = {
    name: "Joel Jimmy",
    role: "Agentic AI & Cloud Developer",
    location: "Pune, Maharashtra, India",
    email: "joeljimmy148@gmail.com",
    phone: "+91 74476 65524",
    linkedin: "https://www.linkedin.com/in/joel-jimmy-27391a289",
    github: "https://github.com/Joel7x",
    website: "https://sitekart.in/",
    ...
}
```

Change the strings. Save. Refresh the browser. Done.

### 2. Update the rotating typewriter roles in the hero

In `app.js` → `PORTFOLIO.typewriter`:

```js
typewriter: [
    "Agentic AI Developer",
    "Cloud Engineer",
    "LLM & RAG Builder",
    "AWS · Azure · GCP",
    "Founder of Sitekart.in"
],
```

Add or remove strings. Each one cycles automatically.

### 3. Add a new project

In `app.js` → `PORTFOLIO.projects`. Copy an existing block and edit:

```js
{
    emoji: "🤖",                       // any emoji or single char
    color: "",                          // "" | "cool" | "warm" | "green" — controls card cover gradient
    title: "Multi-Agent Research Bot",
    tagline: "LangGraph · OpenAI · FastAPI",
    description: "Multi-agent system that researches a topic, fact-checks sources, and produces a citation-backed report.",
    tags: ["LangGraph", "OpenAI", "Python", "FastAPI", "RAG"],
    live: "https://link-to-live-demo.com",   // or "#" if none
    github: "https://github.com/Joel7x/repo"
}
```

The project filter bar at the top of the section (All / Agentic AI / Cloud / Web) auto-categorizes based on tags. To add a new filter, edit the `filters` array in the `Projects` component:

```js
const filters = [
    { key: "all", label: "All" },
    { key: "ai", label: "Agentic AI", match: ["LangChain", "LangGraph", "OpenAI", "GPT-4", "RAG"] },
    ...
];
```

`match` is the list of tags that count as belonging to that category.

### 4. Add or remove a skill category

In `app.js` → `PORTFOLIO.skills`:

```js
{
    icon: "fas fa-robot",                 // any Font Awesome icon class
    title: "Agentic AI",
    tags: ["LangChain", "LangGraph", "CrewAI", "OpenAI"]
}
```

Available icons → https://fontawesome.com/v6/icons (free tier).

### 5. Update work experience

In `app.js` → `PORTFOLIO.experience`. Each entry:

```js
{
    role: "Founder & Web Developer",
    company: "Sitekart.in",
    location: "Pune, Maharashtra",
    date: "Jul 2025 — Present",
    details: [
        "Bullet point 1",
        "Bullet point 2"
    ]
}
```

### 6. Edit the focus section (the 3 big domain cards)

In `app.js` → `PORTFOLIO.focus`:

```js
{
    icon: "fas fa-robot",
    title: "Agentic AI",
    tagline: "Where I live and breathe",
    description: "Building autonomous, tool-using agents...",
    stack: ["LangChain", "LangGraph", "CrewAI", "OpenAI"]
}
```

The third card automatically gets the "VIBE" badge if it's web dev (driven by the `focus-card-vibe` class in `app.js`).

### 7. Change the certifications

In `app.js` → `PORTFOLIO.certifications`:

```js
{ icon: "fas fa-certificate", title: "Your Cert Title — Issuer" }
```

### 8. Change the avatar initials in the profile pill

The hero shows a "JJ" gradient avatar. To change it, in `app.js` find the `Hero` component and edit:

```jsx
<div className="profile-avatar">JJ</div>
```

Change `JJ` to your initials. To use a real photo instead:

```jsx
<div className="profile-avatar">
    <img src="your-photo.jpg" alt="Joel Jimmy" />
</div>
```

Add this to `styles.css`:

```css
.profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### 9. Change the verified handle (`@joel7x`)

In `app.js` find:

```jsx
<span className="profile-handle">@joel7x</span>
```

Change to whatever handle you want.

### 10. Update the meta rail (location / education / status)

In `app.js` find the `<div className="hero-meta-rail">` block and edit each `meta-item`:

```jsx
<div className="meta-item">
    <i className="fas fa-map-marker-alt"></i>
    <span>Pune, India</span>
</div>
```

### 11. Update the about-section "Quick Facts" card

In `app.js` find the `About` component, look for `<SpotlightCard className="about-card reveal">`:

```jsx
<div className="info-row">
    <span className="info-label">Name</span>
    <span className="info-value">Joel Jimmy</span>
</div>
```

Edit any row, or add new ones.

### 12. Change the about-section stats

In `app.js` → `About` component:

```jsx
<Stat target={2} label="Years Coding" />
<Stat target={10} label="Projects Built" />
<Stat target={3} label="Cloud Platforms" />
```

`target` is the final number the counter animates to.

### 13. Update the marquee tech strip

In `app.js` → `PORTFOLIO.marquee`:

```js
{ icon: "fas fa-robot", label: "Agentic AI" }
```

Add as many as you want — the strip duplicates and scrolls infinitely.

### 14. Edit the hero code-card content (the joel.jsx / agent.py snippet)

In `app.js` → `Hero` component → `<div className="code-body">`. Edit the lines directly. Available class names:

- `code-keyword` — purple (const, def, if, etc.)
- `code-var` — blue (variable names)
- `code-prop` — pink (object properties)
- `code-string` — green (string literals)
- `code-method` — yellow (function names)

### 15. Change command-palette commands (⌘K)

In `app.js` → `CommandPalette` component → `commands` array. Add an entry:

```js
{
    icon: "fas fa-rocket",
    label: "Open my blog",
    action: () => window.open("https://yourblog.com", "_blank")
}
```

---

## Theme & visual customization

### Change the color palette

Open `styles.css`. At the top, edit the `:root` variables:

```css
:root {
    --accent-1: #6366f1;   /* indigo  */
    --accent-2: #ec4899;   /* pink    */
    --accent-3: #06b6d4;   /* cyan    */
    --accent-4: #10b981;   /* emerald */
    --accent-5: #f59e0b;   /* amber   */

    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%);
    --gradient-cool: linear-gradient(135deg, #06b6d4 0%, #6366f1 100%);
    --gradient-warm: linear-gradient(135deg, #ec4899 0%, #f59e0b 100%);
}
```

Replace any hex value to recolor the entire site. The gradients are the brand pair — change those to change every gradient component (buttons, headings, icons).

### Change dark / light theme colors

Same file, scroll a few lines down to:

```css
:root[data-theme="dark"] { --bg: #07070c; ... }
:root[data-theme="light"] { --bg: #fafafa; ... }
```

`--bg` is the page background, `--text` is the foreground. Tweak per theme.

### Change fonts

Open `index.html` and find the Google Fonts `<link>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Replace the fonts in the URL, then update the CSS variables at the top of `styles.css`:

```css
--font-display: 'Space Grotesk', sans-serif;   /* headings */
--font-body: 'Inter', sans-serif;              /* paragraphs */
--font-mono: 'JetBrains Mono', monospace;      /* code, labels */
```

### Change the favicon

Open `index.html` and replace the `<link rel="icon">` line. Easy options:

- Use a real `.png` or `.svg` file (drop it in the folder, link to it)
- Or edit the inline SVG to change the gradient `J` letter

### Adjust the 3D background shapes

Open `effects.js`. Find the `THREE.JS HERO 3D SHAPE` section. You can:

- Change the wireframe shapes — swap `IcosahedronGeometry` for `OctahedronGeometry`, `SphereGeometry`, etc.
- Change colors — `0x6366f1` is the icosahedron, `0xec4899` is the torus knot
- Change opacity — adjust `material.opacity` values
- Disable entirely — comment out the entire `if (typeof THREE !== "undefined")` block

### Tweak particle background

In `effects.js`, search for `PARTICLE_COUNT` to change density, or `colors` to recolor the dots.

---

## Adding a new section

1. **Create the React component** in `app.js`. Follow the pattern of existing sections:

```jsx
function MyNewSection() {
    return (
        <section className="section my-new-section" id="myid">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Tag</span>
                    <h2 className="section-title">Title <span className="accent">accent</span></h2>
                    <p className="section-subtitle">Subtitle line.</p>
                </div>
                <div className="reveal">
                    {/* your content here */}
                </div>
            </div>
        </section>
    );
}
```

2. **Render it** inside the `App` component (also in `app.js`):

```jsx
<MyNewSection />
```

3. **Add it to the navbar** by updating the `links` array in `Navbar`:

```js
const links = ["home", "focus", "about", "skills", "projects", "myid", ...];
```

4. **Add it to the scroll spy** in `App`:

```js
const active = useScrollSpy(["home", "focus", ..., "myid"]);
```

5. **Add it to the command palette** in `CommandPalette`:

```js
{ icon: "fas fa-star", label: "Go to My Section", action: () => scrollTo("myid") }
```

6. **Add custom styles** at the bottom of `styles.css` — use the `.section` and `.container` patterns to stay consistent.

---

## Removing a section

Just delete the corresponding `<MyNewSection />` line in `App` (in `app.js`) — and remove its entry from the `Navbar` `links` array, the `useScrollSpy` array, and the command palette. Easy.

---

## Common tweaks cheat sheet

| Change                                | Where                          |
| ------------------------------------- | ------------------------------ |
| Loader text "JOEL"                    | `index.html` — `.loader-text` spans |
| Loader subtext                        | `index.html` — `.loader-tag`   |
| Hero greeting `// Hello world, I'm`   | `app.js` → `Hero` component → `.hero-greeting` |
| "Available for…" status pill          | `app.js` → `Hero` → `.profile-status` |
| Hero CTA button labels                | `app.js` → `Hero` → `<MagneticButton>` text |
| Floating chips around code card       | `app.js` → `Hero` → `.float-chip` divs |
| Footer brand text                     | `app.js` → `Footer` component  |
| Section eyebrow text (`// About`, etc.) | Inside each section component  |
| Animation timings                     | `styles.css` — `animation-delay` properties |
| Spacing / paddings                    | `styles.css` — `.section`, `.container` |
| Custom-cursor size                    | `styles.css` — `.cursor-ring` (default 36px → 70px on hover) |

---

## Deploying online (so others can visit it)

The whole site is static — drop the folder onto any static host:

**Netlify (drag-and-drop)**
1. Visit https://app.netlify.com/drop
2. Drag the folder in
3. Get a live URL in seconds

**Vercel (recommended for custom domain)**
1. Push the folder to a GitHub repo
2. Go to https://vercel.com → "New Project" → import the repo
3. Click Deploy
4. Optional: connect a domain like `joeljimmy.dev`

**GitHub Pages**
1. Push to a repo (e.g. `Joel7x/portfolio`)
2. Repo Settings → Pages → enable on `main` branch
3. Visit `https://joel7x.github.io/portfolio/`

**Cloudflare Pages**
1. Connect the GitHub repo at https://pages.cloudflare.com
2. No build command needed (static)
3. Click Deploy

---

## Pro upgrades I haven't built yet (suggested next steps)

These are worth adding when you're ready to go from "nice portfolio" to "interview magnet":

- **"Ask my portfolio" AI chatbot** — floating button bottom-right, trained on your resume. Single biggest signal you can ship for AI roles. Use OpenAI / Anthropic API + a small RAG setup.
- **Project case-study modals** — click a project card and a fullscreen modal opens with architecture diagram (Mermaid.js), problem, solution, lessons.
- **GitHub stats card** — pull live repos, stars, languages, contribution graph from the GitHub API.
- **Resume PDF download button** — single click, your latest CV.
- **Real working contact form** — wire up EmailJS, Formspree, or Web3Forms so messages actually arrive without opening the user's mail client.
- **"Currently learning" tracker** — what you're studying right now with progress bars.
- **Blog feed** — auto-pulled from Medium / Dev.to / Hashnode RSS.
- **Convert to Vite + TypeScript** — current setup runs Babel in the browser (slow). A real Vite/TS build is what employers expect to see if they peek at the source.
- **PWA support** — installable on phones, works offline.
- **Calendly / Cal.com booking button** — "Book a 15-min chat" with one click.

Just ask when you want any of these built.

---

## Troubleshooting

**The page loads blank**
- Check the browser console (F12 → Console). If you see Babel parse errors, you probably broke JSX syntax in `app.js` — common culprit is unescaped quotes or unmatched braces.
- Make sure all three files (`index.html`, `app.js`, `styles.css`, `effects.js`) are in the same folder.

**3D shapes don't show**
- Three.js loads from CDN — needs internet on first load. After that, browsers cache it.
- Check the console — if you see "THREE is not defined", the CDN is blocked or offline.

**Custom cursor missing**
- Touch devices auto-disable it (intentional). On desktop, make sure your mouse is over the page.

**Fonts look wrong**
- Google Fonts CDN may be blocked on first visit. The site falls back to system sans-serif.

**Server won't start (`serve.ps1`)**
- Port `5500` may be in use. Edit `serve.ps1` and change `$port = 5500` to another number like `8080`.

---

## Tech stack

- **React 18** — loaded via CDN, no build step
- **Babel Standalone** — transpiles JSX in the browser
- **Three.js** — 3D wireframe shapes in the hero background
- **GSAP + ScrollTrigger** — available for advanced scroll animations (loaded but lightly used)
- **Lenis** — buttery smooth scroll
- **Font Awesome 6** — icons
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono
- **Modern CSS** — variables, gradients, glassmorphism, 3D transforms, container queries

---

## Credits & license

Designed and built by Joel Jimmy. Free to use, fork, and modify for your own portfolio.

If you fork this for your own site, a credit link in the footer is appreciated but not required.

---

Got a question or want a feature added? Open Kiro and ask.
