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
              <div className="project-media">
                <img src="/assets/instascript-demo.png" alt="instaScript Demo" />
                {/* <video src="/assets/instascript-demo.mp4" autoPlay loop muted playsInline /> */}
              </div>
              <div className="project-header">
                <span className="project-tag">Python · AI · CLI</span>
                <h3>instaScript</h3>
              </div>
              <div className="project-body">
                <p><strong>Problem:</strong> Extracting transcripts from local media or YouTube is slow, requires paid APIs, and involves complex pipeline management.</p>
                <p><strong>Solution:</strong> A local-first CLI pipeline utilizing CPU-optimized faster-whisper. It handles media downloading (yt-dlp), deduplication (SHA-256), and concurrent batch queueing to deliver accurate markdown transcripts with zero API costs.</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/ig_intel" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-media">
                <img src="/assets/hermes-demo.png" alt="Hermes Webhook Dispatcher Demo" />
              </div>
              <div className="project-header">
                <span className="project-tag">Go · Concurrency</span>
                <h3>Hermes Webhook Dispatcher</h3>
              </div>
              <div className="project-body">
                <p><strong>Problem:</strong> Monolithic servers crash or block incoming traffic when trying to dispatch thousands of outbound webhooks simultaneously.</p>
                <p><strong>Solution:</strong> An isolated, high-throughput Go microservice. It acts as a buffer, ingesting bulk webhook payloads and distributing them across a strict worker pool (goroutines) to process outbound HTTP requests concurrently without memory exhaustion.</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/portfolio-hermes" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
                <a href="https://portfolio-hermes.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link-btn">Live UI Stream</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-media">
                <img src="/assets/keep-next-demo.png" alt="Keep Next.js Demo" />
              </div>
              <div className="project-header">
                <span className="project-tag">Next.js · Drizzle · Postgres</span>
                <h3>Keep — Full-Stack</h3>
              </div>
              <div className="project-body">
                <p><strong>Problem:</strong> Building cross-session, multi-device web applications requires managing complex distributed state and secure relational data.</p>
                <p><strong>Solution:</strong> A production-ready note application proving full-stack competence. It bridges a responsive Next.js frontend with a serverless PostgreSQL database (Neon), using Drizzle ORM for type-safe schema definitions and NextAuth for secure session management.</p>
              </div>
              <div className="project-links">
                <a href="https://keep-nextjs-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn">Live Demo</a>
                <a href="https://github.com/m-amir-gomaa/keep-nextjs" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-media">
                <img src="/assets/keep-vanilla-demo.png" alt="Keep Vanilla JS Demo" />
              </div>
              <div className="project-header">
                <span className="project-tag">Vanilla JS · No Framework</span>
                <h3>Keep — Client-Side</h3>
              </div>
              <div className="project-body">
                <p><strong>Problem:</strong> Heavy JavaScript frameworks often mask a lack of fundamental DOM and browser API understanding.</p>
                <p><strong>Solution:</strong> A purely hand-written, framework-less implementation built prior to the AI-generation era. It demonstrates deep fundamental fluency by manually managing state, modular ES6 imports, and utilizing the native <code>localStorage</code> API for cross-session persistence.</p>
              </div>
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
