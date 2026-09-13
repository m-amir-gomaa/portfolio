import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://formspree.io/f/xvkonejq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('✓ Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Email me directly at mo.gomaa.formal@gmail.com');
      }
    } catch {
      setStatus('Something went wrong. Email me directly at mo.gomaa.formal@gmail.com');
    }
  };

  return (
    <div className="portfolio-container">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <header className="glass-nav">
        <div className="logo">&lt;M.Amir /&gt;</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn-nav">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <span className="terminal-badge">~$ whoami</span>
            <h1>Mohamed Amir Gomaa</h1>
            <p className="hero-subtitle">
              Full-Stack Engineer focused on high-performance systems, AI tooling, and clean architecture — on Linux, from first principles.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="mailto:mo.gomaa.formal@gmail.com" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="glass-card section">
          <h2>About Me</h2>
          <p>
            I build web applications and backend systems that run fast, stay lean, and are designed to last. My background spans full-stack web development, CLI tooling, and AI-integrated pipelines — with a strong preference for correctness over convenience.
          </p>
          <p>
            I run NixOS with declarative Flakes and Home Manager, which keeps my environment fully reproducible and version-controlled. I reach for the right tool for the job — Go for concurrency, Python for data pipelines, Node.js and React for the web layer.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card glass-card">
              <h3>Backend</h3>
              <ul>
                <li>Go (worker pools, concurrency)</li>
                <li>Node.js / Next.js (App Router)</li>
                <li>Python (CLI tools, AI pipelines)</li>
                <li>PostgreSQL & SQLite</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Frontend</h3>
              <ul>
                <li>React.js (Vite, Next.js)</li>
                <li>Vanilla JS (no-framework DOM)</li>
                <li>Vanilla CSS / CSS Variables</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Systems & DevOps</h3>
              <ul>
                <li>NixOS — Declarative Flakes</li>
                <li>Linux System Administration</li>
                <li>Docker & Nix Dev Shells</li>
                <li>Git / GitHub Actions (CI/CD)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Featured Work</h2>
          <div className="projects-grid">

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Python · AI · CLI</span>
                <h3>instaScript</h3>
              </div>
              <p>
                A local-first CLI that turns any Instagram reel, YouTube video, podcast, or audio file into a clean, searchable transcript — using faster-whisper on CPU. Includes SHA-256 dedup, batch queue processing, optional DeepSeek AI fact-checking, and a NixOS Flake for reproducible installation.
              </p>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/ig_intel" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Go · Concurrency</span>
                <h3>Hermes Webhook Dispatcher</h3>
              </div>
              <p>
                A high-throughput webhook dispatcher written in Go. Processes thousands of concurrent HTTP requests using a worker pool pattern with mutexes and exponential backoff — designed as an isolated microservice that prevents blocking the main server.
              </p>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/portfolio-hermes" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Next.js · Drizzle · SQLite</span>
                <h3>Keep — Full-Stack</h3>
              </div>
              <p>
                A full-stack Google Keep clone built with Next.js 16 App Router, Tailwind CSS, Drizzle ORM, SQLite, and NextAuth. Fully authenticated with persistent notes, archiving, and trash — deployed end-to-end.
              </p>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/keep-nextjs" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Vanilla JS · No Framework</span>
                <h3>Keep — Client-Side</h3>
              </div>
              <p>
                The same Keep app rebuilt in pure Vanilla JS — no React, no bundler, no dependencies. Custom state management, modular ES modules, CSS variables theming, and localStorage persistence. Proof that you don't always need a framework.
              </p>
              <div className="project-links">
                <a href="https://m-amir-gomaa.github.io/Keep/" target="_blank" rel="noopener noreferrer" className="project-link-btn">Live Demo</a>
                <a href="https://github.com/m-amir-gomaa/Keep" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass-card section">
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Open to freelance work and full-time opportunities. Reach out directly at{' '}
            <a href="mailto:mo.gomaa.formal@gmail.com" className="inline-link">mo.gomaa.formal@gmail.com</a>{' '}
            or use the form below.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer>
        <p>
          <a href="https://github.com/m-amir-gomaa" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          {' · '}
          <a href="mailto:mo.gomaa.formal@gmail.com" className="footer-link">mo.gomaa.formal@gmail.com</a>
          {' · '}
          &copy; {new Date().getFullYear()} Mohamed Amir Gomaa
        </p>
      </footer>
    </div>
  )
}
