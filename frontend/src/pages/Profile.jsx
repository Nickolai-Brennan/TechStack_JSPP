import { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll for the banner
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 300);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'TechStack JSPP',
      description: 'Full-stack JavaScript, Python, PostgreSQL template',
      tech: ['React', 'FastAPI', 'PostgreSQL'],
      status: 'Active'
    },
    {
      id: 2,
      title: 'API Gateway',
      description: 'Microservices API gateway with authentication',
      tech: ['Node.js', 'Express', 'Redis'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Real-time data visualization platform',
      tech: ['Python', 'Pandas', 'Plotly'],
      status: 'Active'
    },
    {
      id: 4,
      title: 'Mobile App',
      description: 'Cross-platform mobile application',
      tech: ['React Native', 'Firebase'],
      status: 'Planning'
    },
    {
      id: 5,
      title: 'ML Pipeline',
      description: 'Machine learning model training pipeline',
      tech: ['Python', 'TensorFlow', 'Docker'],
      status: 'Active'
    }
  ];

  const contentCards = [
    {
      id: 1,
      icon: '🚀',
      title: 'Quick Start',
      description: 'Get up and running with our comprehensive setup guide in minutes.',
      link: '/docs'
    },
    {
      id: 2,
      icon: '📚',
      title: 'Documentation',
      description: 'Explore detailed documentation, API references, and user guides.',
      link: '/docs'
    },
    {
      id: 3,
      icon: '💡',
      title: 'Blog',
      description: 'Read the latest insights, tutorials, and technical articles.',
      link: '/blog'
    },
    {
      id: 4,
      icon: '🔧',
      title: 'Tools & Resources',
      description: 'Access development tools, templates, and helpful resources.',
      link: '/docs'
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-hero">
        <div className="profile-avatar">
          <div className="avatar-circle">NB</div>
        </div>
        <h1>Nickolai Brennan</h1>
        <p className="profile-tagline">Full-Stack Developer | Tech Enthusiast</p>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{projects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">12</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Active</span>
          </div>
        </div>
      </div>

      {/* Scrolling Projects Banner */}
      <div className="projects-banner">
        <h2 className="banner-title">Featured Projects</h2>
        <div className="banner-scroll-container">
          <div 
            className="banner-scroll-content"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...projects, ...projects].map((project, index) => (
              <div key={`${project.id}-${index}`} className="banner-card">
                <div className="banner-card-header">
                  <h3>{project.title}</h3>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="banner-card-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Cards Section */}
      <div className="content-section">
        <h2>What I Do</h2>
        <div className="content-cards">
          {contentCards.map((card) => (
            <div key={card.id} className="content-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="card-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate full-stack developer with expertise in building scalable web applications
              using modern technologies. Specialized in JavaScript, Python, and PostgreSQL stack.
            </p>
            <p>
              I enjoy creating clean, efficient code and contributing to open-source projects.
              Always learning and staying up-to-date with the latest technologies.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>Tanstack Query</li>
                <li>Vite</li>
                <li>Modern CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>FastAPI</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Database</h4>
              <ul>
                <li>PostgreSQL</li>
                <li>SQLAlchemy</li>
                <li>Redis</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>DevOps</h4>
              <ul>
                <li>Docker</li>
                <li>Git</li>
                <li>CI/CD</li>
                <li>Cloud Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
