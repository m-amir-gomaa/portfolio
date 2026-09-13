import React, { useState } from 'react'

const projects = [
  {
    tag: 'Python · AI · CLI',
    title: 'instaScript',
    problem: 'Extracting transcripts from local media or YouTube requires paid APIs, fragile shell scripts, and brittle dependency management.',
    solution: 'A local-first CLI pipeline using CPU-optimised faster-whisper. Handles media fetching (yt-dlp), SHA-256 deduplication, and concurrent batch queueing — delivering clean markdown transcripts at zero API cost.',
    links: [
      { label: 'GitHub', href: 'https://github.com/m-amir-gomaa/ig_intel' },
    ],
    mediaKey: 'instascript',
  },
  {
    tag: 'Go · Concurrency',
    title: 'Hermes Dispatcher',
    problem: 'Monolithic servers stall or crash when forced to dispatch thousands of outbound webhooks in-process, blocking incoming requests.',
    solution: 'An isolated Go microservice using a buffered channel worker-pool. Ingests bulk payloads and fans them out across 50 goroutines concurrently — with live SSE streaming visible in the browser.',
    links: [
      { label: 'Live Demo', href: 'https://portfolio-hermes.onrender.com/' },
      { label: 'GitHub', href: 'https://github.com/m-amir-gomaa/portfolio-hermes' },
    ],
    mediaKey: 'hermes',
  },
  {
    tag: 'Next.js · Drizzle · Postgres',
    title: 'Keep — Full-Stack',
    problem: 'Demonstrating full-stack competence requires managing authentication, relational data, and cloud deployment cohesively.',
    solution: 'A production note-taking app on the Next.js 16 App Router, secured by NextAuth, with a Neon serverless PostgreSQL backend via Drizzle ORM — deployed to Vercel with automatic CI/CD.',
    links: [
      { label: 'GitHub', href: 'https://github.com/m-amir-gomaa/keep-nextjs' },
    ],
    mediaKey: 'keep-next',
  },
  {
    tag: 'Vanilla JS · No Framework',
    title: 'Keep — Client-Side',
    problem: 'Framework familiarity can mask gaps in foundational JavaScript and DOM knowledge — a liability in any serious engineering role.',
    solution: 'Written by hand before the agentic AI era — no React, no bundler, no code generation. Custom state management, modular ES6 imports, CSS variable theming, and native localStorage for cross-session persistence.',
    links: [
      { label: 'Live Demo', href: 'https://m-amir-gomaa.github.io/Keep/' },
      { label: 'GitHub', href: 'https://github.com/m-amir-gomaa/Keep' },
    ],
    mediaKey: 'keep-vanilla',
  },
]

function ProjectCard({ tag, title, problem, solution, links, mediaKey }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="project-card glass-card">
      <div className="project-media">
        {!imgFailed ? (
          <img
            src={`/assets/${mediaKey}-demo.png`}
            alt={title}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="project-media-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="project-inner">
        <div className="project-header">
          <span className="project-tag">{tag}</span>
          <h3>{title}</h3>
        </div>

        <div className="project-body">
          <div className="project-row">
            <span className="row-label">Problem</span>
            <p>{problem}</p>
          </div>
          <div className="project-row">
            <span className="row-label">Solution</span>
            <p>{solution}</p>
          </div>
        </div>

        <div className="project-links">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="project-link-btn">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const response = await fetch('https://formspree.io/f/xvkonejq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus("✓ Message sent! I'll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Email me directly at mo.gomaa.formal@gmail.com')
      }
    } catch {
      setStatus('Something went wrong. Email me directly at mo.gomaa.formal@gmail.com')
    }
  }

  return (
    <div className="portfolio-container">
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

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
        {/* Hero */}
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

        {/* About */}
        <section id="about" className="glass-card section">
          <h2>About Me</h2>
          <p>
            I build web applications and backend systems that run fast, stay lean, and are designed to last. My background spans full-stack web development, CLI tooling, and AI-integrated pipelines — with a strong preference for correctness over convenience.
          </p>
          <p>
            I run NixOS with declarative Flakes and Home Manager, which keeps my environment fully reproducible and version-controlled. I reach for the right tool for the job — Go for concurrency, Python for data pipelines, Node.js and React for the web layer.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2>Skills &amp; Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card glass-card">
              <h3>Backend</h3>
              <ul>
                <li>Go (worker pools, concurrency)</li>
                <li>Node.js / Next.js (App Router)</li>
                <li>Python (CLI tools, AI pipelines)</li>
                <li>PostgreSQL &amp; SQLite</li>
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
              <h3>Systems &amp; DevOps</h3>
              <ul>
                <li>NixOS — Declarative Flakes</li>
                <li>Linux System Administration</li>
                <li>Docker &amp; Nix Dev Shells</li>
                <li>Git / GitHub Actions (CI/CD)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Featured Work</h2>
          <div className="projects-grid">
            {projects.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </section>

        {/* Contact */}
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
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
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
