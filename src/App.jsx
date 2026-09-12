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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('Failed to connect to the server.');
    }
  };

  return (
    <div className="portfolio-container">
      {/* Glow effects */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <header className="glass-nav">
        <div className="logo">&lt;qwerty /&gt;</div>
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
            <h1>Full-Stack Systems Engineer</h1>
            <p className="hero-subtitle">
              Specialized in high-performance architectures, low-level Linux/NixOS configuration, and modular web ecosystems. 
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="glass-card section">
          <h2>About Me</h2>
          <p>
            I am a full-stack developer who thrives at the intersection of application development and system internals. Inspired by low-level computer system architectures (CSAPP), I design websites and web applications that run fast, remain secure, and require minimal computing overhead.
          </p>
          <p>
            I use **NixOS** and **Docker** to ensure reproducible development environments, and I prefer building custom, highly tailored solutions instead of relying on boilerplate frameworks.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Systems & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card glass-card">
              <h3>Backend</h3>
              <ul>
                <li>Rust (Actix-web, Axum)</li>
                <li>Go (Golang, Gin)</li>
                <li>Node.js (Express)</li>
                <li>PostgreSQL & SQLite</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Frontend</h3>
              <ul>
                <li>React.js (Vite)</li>
                <li>HTMX / AlpineJS</li>
                <li>Vanilla CSS / CSS Variables</li>
                <li>Responsive Web Layouts</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>DevOps & Systems</h3>
              <ul>
                <li>Linux System Administration</li>
                <li>NixOS Declarative Flakes</li>
                <li>Docker & Nix Shells</li>
                <li>Nginx & Caddy Reverse Proxies</li>
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
                <span className="project-tag">Go + Concurrency</span>
                <h3>Hermes Webhook Dispatcher</h3>
              </div>
              <p>
                A blazing-fast, concurrent Webhook Dispatcher written in Go. Handles thousands of concurrent HTTP requests using efficient worker pools, mutexes, and exponential backoff to avoid blocking main servers.
              </p>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/portfolio-hermes" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Next.js + Drizzle</span>
                <h3>Keep (Full-Stack)</h3>
              </div>
              <p>
                A full-stack, premium dark-themed Google Keep clone built with Next.js 16 App Router, Tailwind CSS, Drizzle ORM, SQLite, and NextAuth. Fully authenticated and persistent.
              </p>
              <div className="project-links">
                <a href="https://github.com/m-amir-gomaa/keep-nextjs" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Vanilla JS</span>
                <h3>Keep (Client-Side)</h3>
              </div>
              <p>
                A high-performance, modular Google Keep clone built entirely in Vanilla JS without frameworks. Features custom state management, CSS variables, and localStorage persistence.
              </p>
              <div className="project-links">
                <a href="/keep/" target="_blank" rel="noopener noreferrer" className="project-link-btn">Live Demo</a>
                <a href="https://github.com/m-amir-gomaa/Keep-Vanilla" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">C# / ASP.NET</span>
                <h3>ASP.NET Core React Boilerplate</h3>
              </div>
              <p>
                A production-ready boilerplate for Server Side Rendering (SSR) antd with ASP.NET Core and React. Setup for enterprise-level web applications.
              </p>
              <div className="project-links">
                <a href="https://github.com/amirCodes/aspnet-core-react-antd-boilerplate" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Machine Learning</span>
                <h3>AI Image Generator</h3>
              </div>
              <p>
                A basic image generator tool that converts text prompts into fully generated images using machine learning models.
              </p>
              <div className="project-links">
                <a href="https://github.com/amirCodes/ai-image-generator" target="_blank" rel="noopener noreferrer" className="project-link-btn">GitHub Repo</a>
              </div>
            </div>

            <div className="project-card glass-card">
              <div className="project-header">
                <span className="project-tag">Rust + HTMX</span>
                <h3>LinguaCore German TTS</h3>
              </div>
              <p>
                A high-speed, language-agnostic German TTS and IPA translation app. Uses a locally hosted ONNX model on CPU with custom server caching and HTMX reactive swaps.
              </p>
              <div className="project-links">
                <span className="status-badge active">Active Side Hustle</span>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass-card section">
          <h2>Send a Message</h2>
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
            <button type="submit" className="btn-submit">Submit Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} qwerty. Built with React + Vanilla CSS.</p>
      </footer>
    </div>
  )
}
