import { useState, useEffect, useRef } from "react";
import "./App.css";


const QUOTES = [
  { text: "Code is not just instructions — it's the language of the future.", author: "Unknown" },
  { text: "Every expert was once a beginner. Keep building.", author: "Helen Hayes" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, authentication, product listings, and payment integration. Built with modern web technologies.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    icon: "🛒",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — a 3D, animated, and fully responsive personal site showcasing skills and projects.",
    tags: ["React", "CSS3", "Animation", "3D"],
    icon: "✦",
  },
  {
    title: "More Coming Soon",
    description: "Currently working on exciting new projects. Stay tuned for updates — something big is in the works.",
    tags: ["In Progress", "2025"],
    icon: "⚡",
  },
];

const SKILLS = ["React", "JavaScript", "HTML & CSS", "Node.js", "MongoDB", "Git & GitHub", "Python", "SQL"];

const POPUP_MSGS = [
  "👋 Welcome to my world!",
  "🔴 Built with passion & React",
  "💡 3rd year IT student",
  "🚀 Open to opportunities!",
  "⚡ Let's build something great",
];


/* ─── FLOATING POPUP ─────────────────────────────────── */
function FloatingPopup() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState(POPUP_MSGS[0]);
  const [pos, setPos] = useState({ x: 80, y: 20 });
  const indexRef = useRef(0);

  useEffect(() => {
    const show = () => {
      indexRef.current = (indexRef.current + 1) % POPUP_MSGS.length;
      setMsg(POPUP_MSGS[indexRef.current]);
      setPos({ x: 10 + Math.random() * 70, y: 10 + Math.random() * 70 });
      setVisible(true);
      setTimeout(() => setVisible(false), 2800);
    };
    const first = setTimeout(show, 1200);
    const interval = setInterval(show, 5000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  return (
    <div className={`floating-popup ${visible ? "popup-show" : "popup-hide"}`}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
      <div className="popup-inner">
        <div className="popup-dot" />
        {msg}
      </div>
      <div className="popup-tail" />
    </div>
  );
}

/* ─── CLICK BURST ────────────────────────────────────── */
function ClickBurst() {
  const [bursts, setBursts] = useState([]);
  useEffect(() => {
    const handler = (e) => {
      const id = Date.now();
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setBursts((b) => b.filter((item) => item.id !== id)), 700);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <>
      {bursts.map((b) => (
        <div key={b.id} className="click-burst" style={{ left: b.x, top: b.y }} />
      ))}
    </>
  );
}

/* ─── PARTICLES ──────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 4,
  }));
  return (
    <div className="particles">
      {particles.map((p) => (
        <span key={p.id} className="particle" style={{
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
        }} />
      ))}
    </div>
  );
}

/* ─── 3D TILT CARD ───────────────────────────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 18;
    const y = ((e.clientY - top) / height - 0.5) * -18;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
    el.style.boxShadow = `${-x * 2}px ${y * 2}px 50px rgba(192,0,26,0.3), 0 30px 60px rgba(0,0,0,0.6)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    el.style.boxShadow = "";
  };
  return (
    <div ref={ref} className={`tilt-card ${className}`}
      onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}

/* ─── CUBE ───────────────────────────────────────────── */
function Cube() {
  return (
    <div className="cube-scene">
      <div className="cube">
        {["IT","DEV","CODE","BUILD","CREATE","DEPLOY"].map((label, i) => (
          <div key={i} className={`cube-face ${["front","back","right","left","top","bottom"][i]}`}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <ul className="nav-links">
        {["home","about","projects","quotes","contact"].map((link) => (
          <li key={link}>
            <a href={`#${link}`} className={active === link ? "active" : ""}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="hero">
      <Particles />
      <FloatingPopup />
      <div className="hero-glow" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1 className="hero-name">
            Yuktha<span className="red">.</span>
          </h1>
          <h2 className="hero-title">
            IT Student <span className="divider">|</span> Web Developer
          </h2>
          <p className="hero-desc">
            3rd Year IT student crafting digital experiences that matter.
            I build fast, and functional web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </div>
        <div className="hero-visual">
          <Cube />
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll Down</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="about section">
      <div className="section-label">01 — About</div>
      <div className="about-grid">
        <TiltCard className="about-card-wrap">
          <div className="about-avatar">
            <div className="avatar-ring" />
            <div className="avatar-initials">YD</div>
          </div>
        </TiltCard>
        <div className="about-text">
          <h2 className="section-title">Who Am <span className="red">I?</span></h2>
          <p>
            I'm <strong>Yuktha Devrukhkar</strong> — a passionate 3rd-year IT student with a love for
            building things that live on the internet. From designing intuitive UIs to writing
            clean back-end logic, I enjoy the full stack.
          </p>
          <p>
            I've built a complete <strong>E-Commerce platform</strong> and continue to challenge
            myself with new technologies. I believe great code is both functional and scalable.
          </p>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <div className="skill-chip" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-label">02 — Projects</div>
      <h2 className="section-title">What I've <span className="red">Built</span></h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <TiltCard key={i} className="project-card">
            <div className="project-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="project-line" />
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

/* ─── QUOTES ─────────────────────────────────────────── */
function Quotes() {
  return (
    <section id="quotes" className="quotes section">
      <div className="section-label">03 — Inspiration</div>
      <h2 className="section-title">Words That <span className="red">Drive Me</span></h2>
      <div className="quotes-grid">
        {QUOTES.map((q, i) => (
          <TiltCard key={i} className="quote-card">
            <span className="quote-mark">"</span>
            <p className="quote-text">{q.text}</p>
            <span className="quote-author">— {q.author}</span>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-label">04 — Contact</div>
      <h2 className="section-title">Let's <span className="red">Talk</span></h2>
      <p className="contact-desc">
        Open to opportunities, collaborations, and interesting conversations.
        Drop me a message and I'll get back to you.
      </p>
      <TiltCard className="contact-card">
        <div className="contact-row">
          <span className="contact-icon">✉</span>
          <a href="mailto:yukthakdevrukhkar@gmail.com">yukthakdevrukhkar@gmail.com</a>
        </div>
        <div className="contact-row">
          <span className="contact-icon">📞</span>
          <a href="tel:+918484856473">+91 84848 56473</a>
        </div>
        <div className="contact-row">
          <span className="contact-icon">⌨</span>
          <a href="https://github.com/yukthakdevrukhkar-ux" target="_blank" rel="noreferrer">github.com/yukthakdevrukhkar-ux</a>
        </div>
        <div className="contact-row">
          <span className="contact-icon">◈</span>
          <a href="https://www.linkedin.com/in/Vanity" target="_blank" rel="noreferrer">linkedin.com/in/Vanity</a>
        </div>
      </TiltCard>
      <a href="mailto:yukthakdevrukhkar@gmail.com" className="btn btn-primary contact-btn">
        Say Hello ↗
      </a>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" />
    </footer>
  );
}

/* ─── APP ────────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <ClickBurst />
      <NavBar active={active} />
      <Hero />
      <About />
      <Projects />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}
