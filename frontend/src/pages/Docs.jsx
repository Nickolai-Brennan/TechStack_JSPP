import { useState } from 'react';
import './Docs.css';

function Docs() {
  const [activeSection, setActiveSection] = useState('user-guide');
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'user-guide', title: 'User Guide', icon: '📖' },
    { id: 'api-reference', title: 'API Reference', icon: '⚡' },
    { id: 'changelog', title: 'Changelog', icon: '📝' },
    { id: 'resources', title: 'Resources', icon: '🔧' },
    { id: 'faq', title: 'FAQ', icon: '❓' }
  ];

  const content = {
    'getting-started': {
      title: 'Getting Started',
      sections: [
        {
          heading: 'Welcome to TechStack JSPP',
          content: 'A production-ready full-stack template combining React, Tanstack Query, FastAPI, and PostgreSQL.'
        },
        {
          heading: 'Quick Start',
          content: 'Follow these steps to get your development environment up and running in minutes.',
          code: `# Clone the repository
git clone https://github.com/Nickolai-Brennan/TechStack_JSPP.git
cd TechStack_JSPP

# Start PostgreSQL
docker-compose up -d

# Start Backend (Terminal 1)
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Start Frontend (Terminal 2)
cd frontend
npm install
npm run dev`
        },
        {
          heading: 'Prerequisites',
          content: 'Before you begin, ensure you have the following installed:',
          list: [
            'Node.js 18+ and npm',
            'Python 3.9+',
            'PostgreSQL 15+ or Docker',
            'Git'
          ]
        }
      ]
    },
    'user-guide': {
      title: 'User Guide',
      sections: [
        {
          heading: 'Overview',
          content: 'This guide will walk you through all the features and functionality of the TechStack JSPP application.'
        },
        {
          heading: 'Frontend Architecture',
          content: 'The frontend is built with React 18 and uses Tanstack Query for efficient data fetching and caching.',
          list: [
            'Component-based architecture',
            'Automatic cache invalidation',
            'Optimistic updates',
            'Real-time data synchronization'
          ]
        },
        {
          heading: 'Backend Architecture',
          content: 'FastAPI provides a modern, high-performance backend with automatic API documentation.',
          list: [
            'RESTful API design',
            'Automatic OpenAPI documentation',
            'Pydantic validation',
            'SQLAlchemy ORM'
          ]
        },
        {
          heading: 'Database Management',
          content: 'PostgreSQL 15 with Alembic migrations for version-controlled schema changes.',
          code: `# Create a new migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1`
        }
      ]
    },
    'api-reference': {
      title: 'API Reference',
      sections: [
        {
          heading: 'Items API',
          content: 'Endpoints for managing items in the application.',
          list: [
            'GET /items/ - List all items',
            'GET /items/{id} - Get item by ID',
            'POST /items/ - Create new item',
            'PUT /items/{id} - Update item',
            'DELETE /items/{id} - Delete item'
          ]
        },
        {
          heading: 'Users API',
          content: 'Endpoints for managing users.',
          list: [
            'GET /users/ - List all users',
            'GET /users/{id} - Get user by ID',
            'POST /users/ - Create new user',
            'DELETE /users/{id} - Delete user'
          ]
        },
        {
          heading: 'Example Request',
          code: `POST /items/
Content-Type: application/json

{
  "name": "My Item",
  "description": "Item description",
  "is_active": true
}`
        },
        {
          heading: 'Example Response',
          code: `{
  "id": 1,
  "name": "My Item",
  "description": "Item description",
  "is_active": true,
  "created_at": "2024-01-22T10:00:00Z",
  "updated_at": null
}`
        }
      ]
    },
    'changelog': {
      title: 'Changelog',
      sections: [
        {
          heading: 'Version 1.0.0 (2024-01-22)',
          content: 'Initial release with full-stack template',
          list: [
            '✅ React 18 frontend with Tanstack Query',
            '✅ FastAPI backend with auto-generated docs',
            '✅ PostgreSQL 15 database with Docker',
            '✅ Complete CRUD operations for Items and Users',
            '✅ Comprehensive documentation (47KB)',
            '✅ Security patches applied'
          ]
        },
        {
          heading: 'Security Updates',
          content: 'Latest security patches applied:',
          list: [
            'fastapi: 0.109.0 → 0.109.1 (Content-Type ReDoS fix)',
            'python-multipart: 0.0.6 → 0.0.18 (DoS and ReDoS fixes)'
          ]
        },
        {
          heading: 'Documentation',
          list: [
            'INSTALLATION.md - Complete setup guide (540 lines)',
            'TECHSTACK.md - Technology explanations (460 lines)',
            'SETUP_GUIDE.md - Step-by-step checklist (310 lines)'
          ]
        }
      ]
    },
    'resources': {
      title: 'Resources',
      sections: [
        {
          heading: 'Official Documentation',
          list: [
            'React - https://react.dev',
            'Tanstack Query - https://tanstack.com/query/latest',
            'FastAPI - https://fastapi.tiangolo.com',
            'PostgreSQL - https://www.postgresql.org/docs'
          ]
        },
        {
          heading: 'Development Tools',
          list: [
            'Vite - https://vitejs.dev',
            'SQLAlchemy - https://www.sqlalchemy.org',
            'Alembic - https://alembic.sqlalchemy.org',
            'Docker - https://docs.docker.com'
          ]
        },
        {
          heading: 'Community',
          list: [
            'GitHub Repository',
            'Issue Tracker',
            'Discussions',
            'Contributing Guide'
          ]
        }
      ]
    },
    'faq': {
      title: 'Frequently Asked Questions',
      sections: [
        {
          heading: 'How do I start the application?',
          content: 'Follow the Quick Start guide in the Getting Started section. You\'ll need to start PostgreSQL, the backend server, and the frontend development server.'
        },
        {
          heading: 'What databases are supported?',
          content: 'Currently, the template is configured for PostgreSQL. However, SQLAlchemy supports many databases, so you can adapt it for MySQL, SQLite, or others.'
        },
        {
          heading: 'How do I add new API endpoints?',
          content: 'Create a new router file in backend/app/routers/, define your endpoints, and include the router in backend/app/main.py.'
        },
        {
          heading: 'Can I use TypeScript instead of JavaScript?',
          content: 'Yes! The project uses Vite which has excellent TypeScript support. You can gradually migrate files to .tsx or start fresh with TypeScript.'
        },
        {
          heading: 'How do I deploy to production?',
          content: 'Build the frontend with npm run build, use a production ASGI server like Gunicorn for the backend, and set up a managed PostgreSQL instance.'
        }
      ]
    }
  };

  const currentContent = content[activeSection];

  return (
    <div className="docs-page">
      <div className="docs-sidebar">
        <div className="sidebar-header">
          <h2>📚 Documentation</h2>
          <input
            type="text"
            placeholder="Search docs..."
            className="docs-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="docs-content">
        <div className="docs-breadcrumb">
          <span>Documentation</span>
          <span className="breadcrumb-separator">›</span>
          <span>{currentContent.title}</span>
        </div>

        <h1 className="docs-title">{currentContent.title}</h1>

        {currentContent.sections.map((section, index) => (
          <div key={index} className="docs-section">
            <h2>{section.heading}</h2>
            {section.content && <p>{section.content}</p>}
            {section.list && (
              <ul className="docs-list">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.code && (
              <pre className="code-block">
                <code>{section.code}</code>
              </pre>
            )}
          </div>
        ))}

        <div className="docs-footer">
          <div className="docs-nav-buttons">
            {sidebarItems.findIndex(item => item.id === activeSection) > 0 && (
              <button
                className="nav-button prev"
                onClick={() => {
                  const currentIndex = sidebarItems.findIndex(item => item.id === activeSection);
                  setActiveSection(sidebarItems[currentIndex - 1].id);
                }}
              >
                ← Previous
              </button>
            )}
            {sidebarItems.findIndex(item => item.id === activeSection) < sidebarItems.length - 1 && (
              <button
                className="nav-button next"
                onClick={() => {
                  const currentIndex = sidebarItems.findIndex(item => item.id === activeSection);
                  setActiveSection(sidebarItems[currentIndex + 1].id);
                }}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
