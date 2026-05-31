/* ============================================
   PREMIUM PORTFOLIO — Joel Jimmy
   Focus: Agentic AI · Cloud · Full-Stack
   ============================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ---------- DATA ---------- */
const PORTFOLIO = {
    name: "Joel Jimmy",
    role: "Full-Stack Developer & Aspiring AI Engineer",
    location: "Pune, Maharashtra, India",
    email: "joeljimmy148@gmail.com",
    phone: "+91 74476 65524",
    linkedin: "https://www.linkedin.com/in/joel-jimmy-27391a289",
    github: "https://github.com/Joel7x",
    website: "https://sitekart.in/",
    typewriter: [
        "Full-Stack Developer",
        "Computer Engineering Student",
        "Aspiring AI & Cloud Engineer",
        "Java & JavaScript Developer",
        "Founder of Sitekart.in"
    ],
    marquee: [
        { icon: "fab fa-java", label: "Java" },
        { icon: "fab fa-js", label: "JavaScript" },
        { icon: "fab fa-react", label: "React" },
        { icon: "fab fa-html5", label: "HTML5" },
        { icon: "fab fa-css3-alt", label: "CSS3" },
        { icon: "fab fa-python", label: "Django" },
        { icon: "fab fa-git-alt", label: "Git" },
        { icon: "fab fa-github", label: "GitHub" },
        { icon: "fas fa-database", label: "SQL" },
        { icon: "fab fa-figma", label: "Figma" },
        { icon: "fas fa-robot", label: "AI (Learning)" },
        { icon: "fab fa-aws", label: "Cloud (Learning)" }
    ],
    skills: [
        {
            icon: "fas fa-code",
            title: "Programming Languages",
            tags: ["Core Java", "JavaScript", "SQL"]
        },
        {
            icon: "fas fa-laptop-code",
            title: "Web Technologies",
            tags: ["HTML5", "CSS3", "React (Basic)", "Django (Fundamentals)"]
        },
        {
            icon: "fas fa-tools",
            title: "Tools & Platforms",
            tags: ["Git", "GitHub", "VS Code", "Figma"]
        },
        {
            icon: "fas fa-brain",
            title: "Concepts",
            tags: ["OOP", "SDLC", "Debugging", "Version Control", "REST APIs"]
        },
        {
            icon: "fas fa-robot",
            title: "Currently Learning",
            tags: ["LangChain", "OpenAI API", "AWS Basics", "Docker", "Python"]
        }
    ],
    projects: [
        {
            emoji: "🚀",
            color: "green",
            title: "Sitekart.in",
            tagline: "Web agency for small businesses",
            description: "Founded and built a web development service that ships fast, responsive, SEO-friendly websites for small businesses. Real clients, real deadlines, real results.",
            tags: ["HTML/CSS", "JavaScript", "React", "Responsive", "SEO"],
            live: "https://sitekart.in/",
            github: "https://github.com/Joel7x"
        },
        {
            emoji: "🏥",
            color: "cool",
            title: "Sidhigiri Institute Web System",
            tagline: "Institute web platform · Maintenance & dev",
            description: "Assisted in developing and maintaining web-based systems for Sidhigiri Nursing Institute. Handled testing, debugging, documentation, and deployment.",
            tags: ["Web Dev", "Testing", "GitHub", "Documentation"],
            live: "#",
            github: "https://github.com/Joel7x"
        },
        {
            emoji: "⛓️",
            color: "",
            title: "Blockchain Projects (GDSC)",
            tagline: "Smart contracts · Certified",
            description: "Built sample dApps and smart contracts as part of the GDSC blockchain certification program. Explored Solidity, Ethereum, and decentralized application patterns.",
            tags: ["Solidity", "Web3", "Ethereum", "GDSC"],
            live: "#",
            github: "https://github.com/Joel7x"
        }
    ],
    services: [
        { icon: "fas fa-globe", title: "Website Development", description: "Responsive, SEO-friendly websites for small businesses and personal brands through Sitekart.in." },
        { icon: "fas fa-mobile-alt", title: "Responsive Design", description: "Pixel-perfect designs that work flawlessly across desktop, tablet, and mobile." },
        { icon: "fas fa-paint-brush", title: "UI/UX Design", description: "Clean, modern interfaces designed in Figma and built with attention to detail." },
        { icon: "fas fa-code", title: "Web Maintenance", description: "Ongoing support, bug fixes, performance tuning, and feature additions for existing sites." }
    ],
    experience: [
        {
            role: "Founder & Web Developer",
            company: "Sitekart.in",
            location: "Pune, Maharashtra",
            date: "Jul 2025 — Present",
            details: [
                "Designed and developed responsive websites for small businesses using standard web technologies",
                "Gathered requirements, planned project timelines, and implemented features based on client needs",
                "Followed structured development practices including code versioning using Git and GitHub",
                "Ensured website performance, usability, and basic security best practices",
                "Coordinated with clients to deliver projects within defined timelines"
            ]
        },
        {
            role: "Developer Programmer",
            company: "Sidhigiri Nursing Institute",
            location: "Pune, Maharashtra",
            date: "May 2025 — Jul 2025",
            details: [
                "Assisted in development and maintenance of web-based systems used by the institute",
                "Maintained project documentation, timelines, and bug reports",
                "Used GitHub for source code management and collaborative development",
                "Supported testing, debugging, and deployment-related activities"
            ]
        }
    ],
    education: [
        {
            icon: "fas fa-graduation-cap",
            degree: "BE: Computer Engineering",
            institution: "International Institute of Information Technology",
            location: "Pune, Maharashtra",
            date: "Expected April 2027"
        },
        {
            icon: "fas fa-school",
            degree: "12th: Science",
            institution: "St Arnold's Central School",
            location: "Pune, Maharashtra",
            date: "March 2023"
        }
    ],
    certifications: [
        { icon: "fas fa-certificate", title: "FutureSkills PRIME — MeitY & NASSCOM" },
        { icon: "fab fa-java", title: "Core Java Essentials: Fundamentals to Advanced" },
        { icon: "fas fa-link", title: "Blockchain Certification — GDSC" }
    ],
    focus: [
        {
            icon: "fas fa-laptop-code",
            title: "Full-Stack Web Dev",
            tagline: "What I do right now",
            description: "Building responsive websites for real clients through Sitekart.in. HTML, CSS, JavaScript, React, and Django — shipping production code daily.",
            stack: ["JavaScript", "React", "HTML/CSS", "Django", "Git"]
        },
        {
            icon: "fas fa-robot",
            title: "Agentic AI",
            tagline: "Actively learning & building",
            description: "Diving deep into LangChain, OpenAI APIs, and prompt engineering. Building my first chatbot and RAG projects to transition into AI engineering.",
            stack: ["LangChain", "OpenAI API", "Python", "Prompt Engineering"]
        },
        {
            icon: "fas fa-cloud",
            title: "Cloud Computing",
            tagline: "Next frontier",
            description: "Learning AWS fundamentals, Docker basics, and serverless patterns. Goal: deploy my AI projects on cloud infrastructure by end of 2025.",
            stack: ["AWS (Learning)", "Docker (Learning)", "Linux", "GitHub Actions"]
        }
    ]
};

/* ---------- HOOKS ---------- */
function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseTime = 1800) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];
        let timer;
        if (!isDeleting && text === word) {
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timer = setTimeout(() => {
                setText((prev) =>
                    isDeleting
                        ? word.substring(0, prev.length - 1)
                        : word.substring(0, prev.length + 1)
                );
            }, isDeleting ? deleteSpeed : typeSpeed);
        }
        return () => clearTimeout(timer);
    }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

    return text;
}

function useScrollSpy(ids) {
    const [active, setActive] = useState(ids[0]);
    useEffect(() => {
        const handler = () => {
            const offset = 200;
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && el.offsetTop - offset <= window.scrollY) {
                    setActive(ids[i]);
                    return;
                }
            }
        };
        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [ids]);
    return active;
}

function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = Date.now();
                    const tick = () => {
                        const p = Math.min((Date.now() - start) / duration, 1);
                        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    tick();
                }
            }),
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);
    return [count, ref];
}

function useTheme() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("portfolio-theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);
    return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function useMagnetic(strength = 0.4) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(pointer: coarse)").matches) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const handleLeave = () => {
            el.style.transform = `translate(0, 0)`;
        };
        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, [strength]);
    return ref;
}

/* ---------- COMPONENTS ---------- */
function ThemeToggle({ theme, onToggle }) {
    return (
        <button className="nav-btn" onClick={onToggle} aria-label="Toggle theme" data-hover>
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
        </button>
    );
}

function Navbar({ active, theme, onThemeToggle, onMobileToggle, onCmdOpen, mobileOpen }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const links = ["home", "focus", "about", "skills", "projects", "experience", "contact"];
    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <a href="#home" className="nav-logo" data-hover>&lt;Joel /&gt;</a>
            <ul className="nav-links">
                {links.map((id) => (
                    <li key={id}>
                        <a href={`#${id}`} className={`nav-link ${active === id ? "active" : ""}`} data-hover>
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="nav-actions">
                <button className="nav-btn cmd-btn" onClick={onCmdOpen} data-hover>
                    <i className="fas fa-search"></i>
                    <span>Search</span>
                    <kbd>⌘K</kbd>
                </button>
                <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                <div className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={onMobileToggle}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </nav>
    );
}

function MobileMenu({ open, onClose }) {
    const links = ["home", "focus", "about", "skills", "projects", "experience", "contact"];
    return (
        <div className={`mobile-menu ${open ? "open" : ""}`}>
            <ul>
                {links.map((id) => (
                    <li key={id}>
                        <a href={`#${id}`} onClick={onClose}>
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MagneticButton({ children, ...props }) {
    const ref = useMagnetic(0.25);
    return <a ref={ref} {...props}>{children}</a>;
}

function SpotlightCard({ children, className = "", ...props }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handler = (e) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--x", `${e.clientX - r.left}px`);
            el.style.setProperty("--y", `${e.clientY - r.top}px`);
        };
        el.addEventListener("mousemove", handler);
        return () => el.removeEventListener("mousemove", handler);
    }, []);
    return <div ref={ref} className={`spotlight-card ${className}`} {...props}>{children}</div>;
}

/* ---------- HERO ---------- */
function Hero() {
    const typed = useTypewriter(PORTFOLIO.typewriter);
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handleMove = (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            const cx = r.width / 2, cy = r.height / 2;
            card.style.transform = `perspective(1200px) rotateX(${((y - cy) / cy) * -7}deg) rotateY(${((x - cx) / cx) * 7}deg) scale(1.02)`;
        };
        const handleLeave = () => {
            card.style.transform = `perspective(1200px) rotateX(0) rotateY(0) scale(1)`;
        };
        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-grid">
                <div className="hero-text">
                    <div className="profile-pill">
                        <div className="profile-avatar">
                            <img src="photo.jpg" alt="Joel Jimmy" onError={(e) => { e.target.style.display='none'; e.target.parentElement.textContent='JJ'; }} />
                        </div>
                        <div className="profile-meta">
                            <span className="profile-handle">@joel7x</span>
                            <i className="fas fa-check-circle verified" title="Verified"></i>
                        </div>
                        <span className="profile-divider"></span>
                        <div className="profile-status">
                            <span className="status-dot"></span>
                            Online
                        </div>
                    </div>

                    <h1 className="hero-name-modern">
                        <span className="hn-line">Joel Jimmy.</span>
                    </h1>

                    <h2 className="hero-tagline">
                        <span className="tagline-prefix">I'm a</span>
                        <span className="typewriter-wrap">
                            <span className="typewriter-text">{typed}</span>
                            <span className="typewriter-cursor"></span>
                        </span>
                    </h2>

                    <p className="hero-description">
                        Computer Engineering student. Agentic-AI tinkerer. Cloud architect in training.
                        Founder of <strong>Sitekart.in</strong> on the side. Currently building things that think for themselves.
                    </p>

                    <div className="hero-meta-rail">
                        <div className="meta-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Pune, India</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-graduation-cap"></i>
                            <span>BE Computer Engg.</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-briefcase"></i>
                            <span>Open to work</span>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <MagneticButton href="#projects" className="btn btn-primary" data-hover>
                            <span>See my work</span>
                            <i className="fas fa-arrow-right"></i>
                        </MagneticButton>
                        <MagneticButton href={`mailto:${PORTFOLIO.email}`} className="btn btn-secondary" data-hover>
                            <span>Get in touch</span>
                            <i className="fas fa-paper-plane"></i>
                        </MagneticButton>
                        <a href="resume.pdf" download className="btn btn-secondary" data-hover>
                            <span>Download CV</span>
                            <i className="fas fa-download"></i>
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer" className="social-link" data-hover aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={PORTFOLIO.github} target="_blank" rel="noreferrer" className="social-link" data-hover aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={PORTFOLIO.website} target="_blank" rel="noreferrer" className="social-link" data-hover aria-label="Website">
                            <i className="fas fa-globe"></i>
                        </a>
                        <a href={`mailto:${PORTFOLIO.email}`} className="social-link" data-hover aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="float-chip chip-1"><i className="fas fa-robot"></i> Agentic AI</div>
                    <div className="float-chip chip-2"><i className="fab fa-aws"></i> Cloud Native</div>
                    <div className="float-chip chip-3"><i className="fas fa-brain"></i> LLM Builder</div>
                    <div className="code-card" ref={cardRef}>
                        <div className="code-header">
                            <div className="code-dots">
                                <span className="code-dot red"></span>
                                <span className="code-dot yellow"></span>
                                <span className="code-dot green"></span>
                            </div>
                            <span className="code-title">agent.py</span>
                        </div>
                        <div className="code-body">
                            <span className="code-line"><span className="code-keyword">from</span> <span className="code-var">langgraph</span> <span className="code-keyword">import</span> <span className="code-var">StateGraph</span></span>
                            <span className="code-line"><span className="code-keyword">from</span> <span className="code-var">openai</span> <span className="code-keyword">import</span> <span className="code-var">OpenAI</span></span>
                            <span className="code-line">&nbsp;</span>
                            <span className="code-line"><span className="code-keyword">class</span> <span className="code-method">JoelAgent</span>:</span>
                            <span className="code-line">    <span className="code-prop">role</span> = <span className="code-string">"Agentic AI Dev"</span></span>
                            <span className="code-line">    <span className="code-prop">stack</span> = [<span className="code-string">"LangGraph"</span>,</span>
                            <span className="code-line">             <span className="code-string">"AWS"</span>, <span className="code-string">"Bedrock"</span>]</span>
                            <span className="code-line">&nbsp;</span>
                            <span className="code-line">    <span className="code-keyword">def</span> <span className="code-method">build</span>(<span className="code-prop">self</span>, idea):</span>
                            <span className="code-line">        <span className="code-keyword">return</span> <span className="code-method">deploy</span>(idea)</span>
                            <span className="code-line">&nbsp;</span>
                            <span className="code-line"><span className="code-keyword">if</span> hire_me: <span className="code-method">ship</span>()</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"><div className="wheel"></div></div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
}

function Marquee() {
    const items = [...PORTFOLIO.marquee, ...PORTFOLIO.marquee];
    return (
        <div className="marquee">
            <div className="marquee-track">
                {items.map((item, i) => (
                    <div key={i} className="marquee-item">
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------- FOCUS SECTION (NEW) ---------- */
function Focus() {
    return (
        <section className="section focus" id="focus">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Focus areas</span>
                    <h2 className="section-title">What I <span className="accent">actually do</span></h2>
                    <p className="section-subtitle">Three domains I work in — ranked by how deep I go.</p>
                </div>
                <div className="focus-grid">
                    {PORTFOLIO.focus.map((f, i) => (
                        <SpotlightCard key={i} className={`focus-card reveal ${i === 2 ? "focus-card-vibe" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="focus-rank">0{i + 1}</div>
                            <div className="focus-icon"><i className={f.icon}></i></div>
                            <h3>{f.title}</h3>
                            <p className="focus-tagline">{f.tagline}</p>
                            <p className="focus-desc">{f.description}</p>
                            <div className="focus-stack">
                                {f.stack.map((s) => (<span key={s} className="focus-chip">{s}</span>))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Stat({ target, label }) {
    const [count, ref] = useCounter(target);
    return (
        <div ref={ref}>
            <span className="stat-number">{count}+</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// About</span>
                    <h2 className="section-title">A bit <span className="accent">about me</span></h2>
                    <p className="section-subtitle">Engineering student by day, agent-builder & cloud architect always.</p>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>
                            I'm a <span className="highlight">Computer Engineering</span> student at the
                            International Institute of Information Technology, Pune, focused on
                            <span className="highlight"> Agentic AI</span> and <span className="highlight">Cloud Computing</span> —
                            the two domains where I do my deepest work.
                        </p>
                        <p>
                            On the AI side I build autonomous agents with LangChain, LangGraph, and CrewAI —
                            things that plan, call tools, and execute multi-step workflows. On the cloud side
                            I architect serverless, scalable systems on AWS, Azure, and GCP, with a soft spot
                            for Bedrock, Lambda, and infrastructure-as-code.
                        </p>
                        <p>
                            Web development is my <span className="highlight">vibe</span> domain — the creative
                            outlet I keep alive through <span className="highlight">Sitekart.in</span>, my web
                            agency for small businesses. It's how I unwind, design things, and ship pixel-perfect UI.
                        </p>
                        <p>
                            Currently looking for internship and entry-level opportunities in AI engineering,
                            applied ML, or cloud roles where I can ship real systems and grow alongside good engineers.
                        </p>
                        <div className="about-stats">
                            <Stat target={2} label="Years Coding" />
                            <Stat target={10} label="Projects Built" />
                            <Stat target={3} label="Cloud Platforms" />
                        </div>
                    </div>
                    <SpotlightCard className="about-card reveal">
                        <h3>Quick Facts</h3>
                        <div className="info-row"><span className="info-label">Name</span><span className="info-value">Joel Jimmy</span></div>
                        <div className="info-row"><span className="info-label">Focus</span><span className="info-value">Agentic AI · Cloud</span></div>
                        <div className="info-row"><span className="info-label">Location</span><span className="info-value">Pune, India</span></div>
                        <div className="info-row"><span className="info-label">Education</span><span className="info-value">BE Computer Engg.</span></div>
                        <div className="info-row"><span className="info-label">Languages</span><span className="info-value">English (Advanced)</span></div>
                        <div className="info-row">
                            <span className="info-label">Status</span>
                            <span className="info-value" style={{ color: "var(--accent-4)" }}>
                                <i className="fas fa-circle" style={{ fontSize: "0.5rem", marginRight: "0.4rem" }}></i>
                                Open to work
                            </span>
                        </div>
                        <div className="info-row"><span className="info-label">Relocation</span><span className="info-value">Yes, anywhere</span></div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Stack</span>
                    <h2 className="section-title">Skills & <span className="accent">Tech</span></h2>
                    <p className="section-subtitle">The tools I use to build agents, ship cloud workloads, and design beautiful UI.</p>
                </div>
                <div className="skills-grid">
                    {PORTFOLIO.skills.map((skill, i) => (
                        <SpotlightCard key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                            <div className="skill-icon">
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.title}</h3>
                            <div className="skill-tags">
                                {skill.tags.map((tag) => (
                                    <span key={tag} className="skill-tag" data-hover>{tag}</span>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Projects() {
    const [filter, setFilter] = useState("all");
    const filters = [
        { key: "all", label: "All" },
        { key: "ai", label: "Agentic AI", match: ["LangChain", "LangGraph", "OpenAI", "GPT-4", "RAG"] },
        { key: "cloud", label: "Cloud", match: ["AWS", "Azure", "Bedrock", "Lambda", "Serverless"] },
        { key: "web", label: "Web (Vibe)", match: ["React", "Tailwind", "Next.js", "JavaScript"] }
    ];

    const visible = PORTFOLIO.projects.filter((p) => {
        if (filter === "all") return true;
        const f = filters.find((x) => x.key === filter);
        return p.tags.some((t) => f.match.includes(t));
    });

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Work</span>
                    <h2 className="section-title">Featured <span className="accent">projects</span></h2>
                    <p className="section-subtitle">A mix of agents, cloud systems, and the occasional web side-quest.</p>
                </div>
                <div className="filter-bar reveal">
                    {filters.map((f) => (
                        <button key={f.key} className={`filter-btn ${filter === f.key ? "active" : ""}`} onClick={() => setFilter(f.key)} data-hover>
                            {f.label}
                        </button>
                    ))}
                </div>
                <div className="projects-grid">
                    {visible.map((p, i) => (
                        <div key={p.title} className="project-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className={`project-image ${p.color}`}>
                                <div className="project-emoji">{p.emoji}</div>
                            </div>
                            <div className="project-content">
                                <h3>{p.title}</h3>
                                <p style={{ color: "var(--accent-2)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", marginBottom: "0.7rem" }}>{p.tagline}</p>
                                <p>{p.description}</p>
                                <div className="project-tags">
                                    {p.tags.map((t) => (<span key={t} className="project-tag">{t}</span>))}
                                </div>
                                <div className="project-links">
                                    {p.live && p.live !== "#" && (
                                        <a href={p.live} target="_blank" rel="noreferrer" className="project-link" data-hover>
                                            <i className="fas fa-external-link-alt"></i> Live
                                        </a>
                                    )}
                                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link" data-hover>
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Services() {
    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Services</span>
                    <h2 className="section-title">What I can <span className="accent">build</span> for you</h2>
                    <p className="section-subtitle">From production-ready AI agents to cloud architecture to clean web experiences.</p>
                </div>
                <div className="services-grid">
                    {PORTFOLIO.services.map((s, i) => (
                        <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="service-icon"><i className={s.icon}></i></div>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Career</span>
                    <h2 className="section-title">Work <span className="accent">experience</span></h2>
                    <p className="section-subtitle">Where I've contributed and what I've learned.</p>
                </div>
                <div className="timeline">
                    {PORTFOLIO.experience.map((exp, i) => (
                        <div key={i} className="timeline-item reveal">
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="timeline-date">{exp.date}</span>
                                </div>
                                <h4 className="timeline-company">
                                    <i className="fas fa-building"></i>
                                    {exp.company} — {exp.location}
                                </h4>
                                <ul className="timeline-list">
                                    {exp.details.map((d, j) => (<li key={j}>{d}</li>))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="section education" id="education">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">// Learning</span>
                    <h2 className="section-title">Education & <span className="accent">certifications</span></h2>
                    <p className="section-subtitle">Where I've studied and what I've earned along the way.</p>
                </div>
                <div className="education-grid">
                    {PORTFOLIO.education.map((edu, i) => (
                        <div key={i} className="edu-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="edu-icon"><i className={edu.icon}></i></div>
                            <h3>{edu.degree}</h3>
                            <h4>{edu.institution}</h4>
                            <p className="edu-meta"><i className="fas fa-map-marker-alt"></i> {edu.location}</p>
                            <p className="edu-meta"><i className="far fa-calendar"></i> {edu.date}</p>
                        </div>
                    ))}
                </div>
                <div className="cert-section reveal">
                    <h3>Certifications</h3>
                    <div className="cert-grid">
                        {PORTFOLIO.certifications.map((cert, i) => (
                            <div key={i} className="cert-card">
                                <i className={cert.icon}></i>
                                <span>{cert.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header reveal" style={{ textAlign: "center" }}>
                    <span className="section-eyebrow">// Contact</span>
                    <h2 className="section-title">Let's <span className="accent">build</span> something</h2>
                    <p className="section-subtitle" style={{ marginInline: "auto" }}>
                        AI project, cloud migration, or just a chat — pick a channel and I'll respond within 24 hours.
                    </p>
                </div>
                <div className="contact-cards-grid">
                    <a href={`mailto:${PORTFOLIO.email}`} className="contact-card-big reveal" data-hover>
                        <i className="fas fa-envelope"></i>
                        <span className="label">Email</span>
                        <span className="value">{PORTFOLIO.email}</span>
                        <span className="cta">Send a message <i className="fas fa-arrow-right"></i></span>
                    </a>
                    <a href={`tel:${PORTFOLIO.phone.replace(/\s/g, "")}`} className="contact-card-big reveal" data-hover style={{ transitionDelay: "0.1s" }}>
                        <i className="fas fa-phone"></i>
                        <span className="label">Phone</span>
                        <span className="value">{PORTFOLIO.phone}</span>
                        <span className="cta">Give a call <i className="fas fa-arrow-right"></i></span>
                    </a>
                    <a href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer" className="contact-card-big reveal" data-hover style={{ transitionDelay: "0.2s" }}>
                        <i className="fab fa-linkedin-in"></i>
                        <span className="label">LinkedIn</span>
                        <span className="value">/in/joel-jimmy</span>
                        <span className="cta">Let's connect <i className="fas fa-arrow-right"></i></span>
                    </a>
                    <a href={PORTFOLIO.github} target="_blank" rel="noreferrer" className="contact-card-big reveal" data-hover style={{ transitionDelay: "0.3s" }}>
                        <i className="fab fa-github"></i>
                        <span className="label">GitHub</span>
                        <span className="value">@Joel7x</span>
                        <span className="cta">View my code <i className="fas fa-arrow-right"></i></span>
                    </a>
                </div>
                <div className="contact-cta reveal">
                    <a href={`mailto:${PORTFOLIO.email}`} className="btn btn-primary btn-large" data-hover>
                        <span>Say hello</span>
                        <i className="fas fa-paper-plane"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h3>Joel Jimmy</h3>
                    <p>
                        Agentic AI developer & cloud engineer. Building autonomous systems
                        that ship to production. Web dev side-quest at Sitekart.in.
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#focus" data-hover>Focus</a></li>
                        <li><a href="#about" data-hover>About</a></li>
                        <li><a href="#experience" data-hover>Experience</a></li>
                        <li><a href="#contact" data-hover>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer" data-hover>LinkedIn</a></li>
                        <li><a href={PORTFOLIO.github} target="_blank" rel="noreferrer" data-hover>GitHub</a></li>
                        <li><a href={PORTFOLIO.website} target="_blank" rel="noreferrer" data-hover>Sitekart.in</a></li>
                        <li><a href={`mailto:${PORTFOLIO.email}`} data-hover>Email</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Joel Jimmy. Built with <i className="fas fa-heart" style={{ color: "var(--accent-2)" }}></i> in Pune.</p>
                <div className="footer-socials">
                    <a href={PORTFOLIO.linkedin} target="_blank" rel="noreferrer" className="social-link" data-hover><i className="fab fa-linkedin-in"></i></a>
                    <a href={PORTFOLIO.github} target="_blank" rel="noreferrer" className="social-link" data-hover><i className="fab fa-github"></i></a>
                    <a href={`mailto:${PORTFOLIO.email}`} className="social-link" data-hover><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
}

/* ---------- COMMAND PALETTE ---------- */
function CommandPalette({ open, onClose }) {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);
    const inputRef = useRef(null);

    function scrollTo(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    const commands = [
        { icon: "fas fa-home", label: "Go to Home", action: () => scrollTo("home") },
        { icon: "fas fa-bullseye", label: "Go to Focus areas", action: () => scrollTo("focus") },
        { icon: "fas fa-user", label: "Go to About", action: () => scrollTo("about") },
        { icon: "fas fa-code", label: "Go to Skills", action: () => scrollTo("skills") },
        { icon: "fas fa-briefcase", label: "Go to Experience", action: () => scrollTo("experience") },
        { icon: "fas fa-graduation-cap", label: "Go to Education", action: () => scrollTo("education") },
        { icon: "fas fa-envelope", label: "Go to Contact", action: () => scrollTo("contact") },
        { icon: "fab fa-linkedin", label: "Open LinkedIn", action: () => window.open(PORTFOLIO.linkedin, "_blank") },
        { icon: "fab fa-github", label: "Open GitHub", action: () => window.open(PORTFOLIO.github, "_blank") },
        { icon: "fas fa-globe", label: "Open Sitekart.in", action: () => window.open(PORTFOLIO.website, "_blank") },
        { icon: "fas fa-copy", label: "Copy Email", action: () => navigator.clipboard.writeText(PORTFOLIO.email) },
        { icon: "fas fa-phone", label: "Copy Phone", action: () => navigator.clipboard.writeText(PORTFOLIO.phone) },
        { icon: "fas fa-paper-plane", label: "Send Email", action: () => window.location.href = `mailto:${PORTFOLIO.email}` }
    ];

    const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery("");
            setSelected(0);
        }
    }, [open]);

    useEffect(() => {
        const handler = (e) => {
            if (!open) return;
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelected((s) => (s + 1) % filtered.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelected((s) => (s - 1 + filtered.length) % filtered.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                const cmd = filtered[selected];
                if (cmd) {
                    cmd.action();
                    onClose();
                }
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open, selected, filtered, onClose]);

    return (
        <div className={`cmd-overlay ${open ? "open" : ""}`} onClick={onClose}>
            <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
                <div className="cmd-input-wrap">
                    <i className="fas fa-search"></i>
                    <input
                        ref={inputRef}
                        type="text"
                        className="cmd-input"
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                    />
                    <kbd style={{ fontSize: "0.7rem", color: "var(--text-muted)", padding: "2px 6px", background: "var(--surface)", borderRadius: "4px", border: "1px solid var(--border)" }}>ESC</kbd>
                </div>
                <div className="cmd-list">
                    {filtered.length === 0 && (
                        <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                            No commands found
                        </div>
                    )}
                    {filtered.map((cmd, i) => (
                        <a key={i} className={`cmd-item ${selected === i ? "selected" : ""}`}
                            onClick={() => { cmd.action(); onClose(); }}
                            onMouseEnter={() => setSelected(i)}>
                            <i className={cmd.icon}></i>
                            <span className="cmd-label">{cmd.label}</span>
                            {cmd.shortcut && <span className="cmd-shortcut">{cmd.shortcut}</span>}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------- ROOT APP ---------- */
function App() {
    const active = useScrollSpy(["home", "focus", "about", "skills", "projects", "experience", "education", "contact"]);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cmdOpen, setCmdOpen] = useState(false);
    const [theme, toggleTheme] = useTheme();
    useReveal();

    useEffect(() => {
        // Loader removed
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setCmdOpen(true);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    useEffect(() => {
        const bar = document.getElementById("scroll-progress");
        if (!bar) return;
        const handler = () => {
            const scrolled = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
            bar.style.width = `${scrolled}%`;
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <>
            <Navbar
                active={active}
                theme={theme}
                onThemeToggle={toggleTheme}
                onCmdOpen={() => setCmdOpen(true)}
                onMobileToggle={() => setMobileOpen((v) => !v)}
                mobileOpen={mobileOpen}
            />
            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
            <Hero />
            <Marquee />
            <Focus />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Experience />
            <Education />
            <Contact />
            <Footer />
            <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
