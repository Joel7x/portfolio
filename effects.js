/* ============================================
   EFFECTS — cursor, particles, 3D, smooth scroll
   ============================================ */

(function () {
    "use strict";

    /* ------------ LENIS SMOOTH SCROLL ------------ */
    if (typeof Lenis !== "undefined") {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Connect anchor links
        document.addEventListener("click", (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                const id = link.getAttribute("href");
                if (id && id !== "#") {
                    e.preventDefault();
                    const el = document.querySelector(id);
                    if (el) lenis.scrollTo(el, { offset: -80 });
                }
            }
        });
    }

    /* ------------ CUSTOM CURSOR ------------ */
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (dot && ring && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateRing);
        };
        animateRing();

        const bindHovers = () => {
            const selector = "a, button, input, textarea, [data-hover], .skill-tag, .nav-link, .social-link, .contact-card, .skill-card, .edu-card, .cert-card, .project-card, .service-card, .cmd-item, .float-chip, .form-control";
            document.querySelectorAll(selector).forEach((el) => {
                if (el.dataset.cursorBound) return;
                el.dataset.cursorBound = "true";
                el.addEventListener("mouseenter", () => ring.classList.add("hover"));
                el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
            });
        };
        setTimeout(bindHovers, 500);
        setTimeout(bindHovers, 2000);

        const observer = new MutationObserver(() => bindHovers());
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /* ------------ PARTICLE BACKGROUND ------------ */
    const canvas = document.getElementById("particle-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const COUNT = window.innerWidth < 768 ? 30 : 70;
        let particles = [];

        class Particle {
            constructor() { this.reset(); this.y = Math.random() * height; }
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.r = Math.random() * 1.5 + 0.5;
                const colors = ["#6366f1", "#ec4899", "#06b6d4", "#10b981"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < COUNT; i++) particles.push(new Particle());
        };

        const connect = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = particles[i].color;
                        ctx.globalAlpha = (1 - dist / 130) * 0.12;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => { p.update(); p.draw(); });
            connect();
            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        });

        init();
        animate();
    }

    /* ------------ THREE.JS HERO 3D SHAPE ------------ */
    if (typeof THREE !== "undefined") {
        const threeCanvas = document.getElementById("three-canvas");
        if (threeCanvas) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Floating wireframe icosahedron
            const geometry = new THREE.IcosahedronGeometry(1.6, 1);
            const material = new THREE.MeshBasicMaterial({
                color: 0x6366f1,
                wireframe: true,
                transparent: true,
                opacity: 0.18
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = 2.5;
            scene.add(mesh);

            // Second wire-shape
            const geo2 = new THREE.TorusKnotGeometry(0.7, 0.18, 80, 12);
            const mat2 = new THREE.MeshBasicMaterial({
                color: 0xec4899,
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });
            const mesh2 = new THREE.Mesh(geo2, mat2);
            mesh2.position.set(-3, -1.5, 0);
            scene.add(mesh2);

            // Floating dot field
            const starGeo = new THREE.BufferGeometry();
            const starCount = 200;
            const positions = new Float32Array(starCount * 3);
            for (let i = 0; i < starCount * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 20;
            }
            starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            const starMat = new THREE.PointsMaterial({
                color: 0x06b6d4,
                size: 0.03,
                transparent: true,
                opacity: 0.6
            });
            const stars = new THREE.Points(starGeo, starMat);
            scene.add(stars);

            camera.position.z = 5;

            let mouseX = 0, mouseY = 0;
            document.addEventListener("mousemove", (e) => {
                mouseX = (e.clientX / window.innerWidth - 0.5);
                mouseY = (e.clientY / window.innerHeight - 0.5);
            });

            const animate = () => {
                requestAnimationFrame(animate);
                mesh.rotation.x += 0.002;
                mesh.rotation.y += 0.003;
                mesh2.rotation.x += 0.004;
                mesh2.rotation.y -= 0.002;
                stars.rotation.y += 0.0005;

                // Parallax response to mouse
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                renderer.render(scene, camera);
            };
            animate();

            window.addEventListener("resize", () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Update colors when theme changes
            const observer = new MutationObserver(() => {
                const theme = document.documentElement.getAttribute("data-theme");
                if (theme === "light") {
                    material.opacity = 0.25;
                    mat2.opacity = 0.2;
                    starMat.opacity = 0.4;
                } else {
                    material.opacity = 0.18;
                    mat2.opacity = 0.15;
                    starMat.opacity = 0.6;
                }
            });
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        }
    }

    /* ------------ KONAMI EASTER EGG ------------ */
    let konamiIndex = 0;
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

    document.addEventListener("keydown", (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = "loaderBounce 0.5s 3";
                console.log("%c🎮 Konami unlocked! You found the easter egg.", "color:#ec4899;font-size:18px;font-weight:bold;");
                setTimeout(() => document.body.style.animation = "", 1600);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    /* ------------ CONSOLE GREETING ------------ */
    setTimeout(() => {
        const styles = [
            "background:linear-gradient(135deg,#6366f1,#ec4899,#f59e0b);color:white;padding:10px 20px;border-radius:8px;font-size:18px;font-weight:bold;",
            "color:#9494a8;font-size:13px;line-height:1.6;",
            "color:#06b6d4;font-size:13px;font-weight:bold;"
        ];
        console.log("%c👋 Hi there, fellow developer!", styles[0]);
        console.log("%cThanks for inspecting my portfolio. I'm Joel — a Computer Engineering student & full-stack developer.\nIf you're a recruiter or fellow dev who likes what they see, get in touch!", styles[1]);
        console.log("%c📧 joeljimmy148@gmail.com  |  💼 linkedin.com/in/joel-jimmy-27391a289  |  💻 github.com/Joel7x", styles[2]);
        console.log("%c🎮 Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A", "color:#f59e0b;font-style:italic;");
    }, 2500);
})();
