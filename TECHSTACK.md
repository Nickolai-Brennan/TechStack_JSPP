# 🚀 TechStack_JSPP - Technology Stack

## Overview

This project uses a modern full-stack architecture combining JavaScript, Python, and PostgreSQL for building scalable web applications.

---

## 🎨 Frontend Stack

### ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
**Purpose:** UI Library for building interactive user interfaces

React is a declarative, component-based JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM.

**Key Features:**
- Virtual DOM for optimal performance
- Component-based architecture
- Unidirectional data flow
- Rich ecosystem of libraries

**In This Project:**
- Building interactive user interfaces
- Managing component state
- Creating reusable UI components

---

### ![Tanstack Query](https://img.shields.io/badge/Tanstack_Query-5.17.19-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
**Purpose:** Data fetching and state management

Tanstack Query (formerly React Query) is a powerful data synchronization library that handles server state in React applications with built-in caching, background updates, and automatic refetching.

**Key Features:**
- Automatic background refetching
- Window focus refetching
- Smart caching and deduplication
- Optimistic updates
- Pagination and infinite scroll support

**In This Project:**
- Managing server state
- Caching API responses
- Automatic cache invalidation
- Loading and error states

**Files Using Tanstack Query:**
- `frontend/src/api/items.js` - Items query hooks
- `frontend/src/api/users.js` - Users query hooks
- `frontend/src/App.jsx` - QueryClient configuration

---

### ![Vite](https://img.shields.io/badge/Vite-5.0.11-646CFF?style=for-the-badge&logo=vite&logoColor=white)
**Purpose:** Build tool and development server

Vite is a next-generation frontend build tool that provides lightning-fast Hot Module Replacement (HMR) and optimized production builds.

**Key Features:**
- Instant server start
- Lightning-fast HMR
- Optimized builds with Rollup
- Native ES modules support
- Plugin ecosystem

**In This Project:**
- Development server with fast HMR
- Production build optimization
- ES module bundling

**Configuration:**
- `frontend/vite.config.js` - Vite configuration

---

### ![Axios](https://img.shields.io/badge/Axios-1.6.5-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
**Purpose:** HTTP client for API requests

Axios is a promise-based HTTP client for the browser and Node.js with automatic JSON transformation and request/response interceptors.

**Key Features:**
- Promise-based API
- Request and response interceptors
- Automatic JSON transformation
- Error handling
- Request cancellation

**In This Project:**
- Making API requests to backend
- Handling HTTP responses
- Error handling

**Files:**
- `frontend/src/api/client.js` - Axios configuration and API methods

---

## 🐍 Backend Stack

### ![FastAPI](https://img.shields.io/badge/FastAPI-0.109.1-009688?style=for-the-badge&logo=fastapi&logoColor=white)
**Purpose:** Modern Python web framework

FastAPI is a modern, high-performance web framework for building APIs with Python 3.9+ based on standard Python type hints.

**Key Features:**
- Automatic interactive API documentation (Swagger UI)
- Based on OpenAPI and JSON Schema
- Very high performance (on par with NodeJS and Go)
- Easy to learn and fast to code
- Automatic data validation

**In This Project:**
- Building RESTful API endpoints
- Automatic API documentation
- Request/response validation
- Dependency injection

**Security Note:** Using version 0.109.1 which patches the Content-Type Header ReDoS vulnerability.

**Files:**
- `backend/app/main.py` - FastAPI application
- `backend/app/routers/` - API endpoints

---

### ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0.25-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white)
**Purpose:** SQL toolkit and Object-Relational Mapping (ORM)

SQLAlchemy is the most popular Python SQL toolkit and ORM, providing a full suite of well-known enterprise-level persistence patterns.

**Key Features:**
- Comprehensive ORM
- Connection pooling
- SQL expression language
- Database migration support
- Multi-database support

**In This Project:**
- Defining database models
- Querying the database
- Managing database connections
- Database schema management

**Files:**
- `backend/app/models.py` - Database models
- `backend/app/database.py` - Database connection

---

### ![Pydantic](https://img.shields.io/badge/Pydantic-2.5.3-E92063?style=for-the-badge&logo=pydantic&logoColor=white)
**Purpose:** Data validation and settings management

Pydantic uses Python type annotations to validate data and manage application settings with a focus on runtime type checking.

**Key Features:**
- Data validation using Python type hints
- JSON Schema generation
- Settings management
- Fast and efficient
- IDE support

**In This Project:**
- API request/response validation
- Data serialization/deserialization
- Email validation
- Type safety

**Files:**
- `backend/app/schemas.py` - Pydantic schemas

---

### ![Alembic](https://img.shields.io/badge/Alembic-1.13.1-6BA81E?style=for-the-badge&logo=alembic&logoColor=white)
**Purpose:** Database migration tool

Alembic is a lightweight database migration tool for SQLAlchemy, allowing developers to manage database schema changes over time.

**Key Features:**
- Auto-generation of migrations
- Database version control
- Upgrade and downgrade paths
- Support for multiple databases

**In This Project:**
- Managing database schema changes
- Version control for database
- Creating and applying migrations

**Files:**
- `backend/alembic/` - Migration scripts
- `backend/alembic.ini` - Alembic configuration

---

### ![Uvicorn](https://img.shields.io/badge/Uvicorn-0.27.0-499848?style=for-the-badge&logo=uvicorn&logoColor=white)
**Purpose:** ASGI server

Uvicorn is a lightning-fast ASGI server implementation, using uvloop and httptools for high performance.

**Key Features:**
- Lightning-fast performance
- WebSocket support
- HTTP/2 support
- Graceful shutdown
- Auto-reload for development

**In This Project:**
- Running the FastAPI application
- Hot reload during development
- Serving HTTP requests

**Usage:**
```bash
uvicorn app.main:app --reload
```

---

## 🗄️ Database Stack

### ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)
**Purpose:** Relational database management system

PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.

**Key Features:**
- ACID compliance
- Complex queries and joins
- Foreign keys and constraints
- Triggers and stored procedures
- JSON/JSONB support
- Full-text search
- Extensibility

**In This Project:**
- Storing application data
- Managing relational data
- Ensuring data integrity
- Supporting complex queries

**Extensions Used:**
- None (vanilla PostgreSQL)

**Connection:**
- Driver: `psycopg2-binary`
- URL format: `postgresql://user:password@host:port/database`

---

## 🐳 DevOps & Tools

### ![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
**Purpose:** Container orchestration

Docker Compose is a tool for defining and running multi-container Docker applications.

**Key Features:**
- Multi-container orchestration
- Service dependencies
- Volume management
- Network configuration

**In This Project:**
- Running PostgreSQL in a container
- Isolated development environment
- Easy setup and teardown

**Files:**
- `docker-compose.yml` - PostgreSQL service configuration

---

## 📦 Package Managers

### ![npm](https://img.shields.io/badge/npm-Latest-CB3837?style=for-the-badge&logo=npm&logoColor=white)
**Purpose:** JavaScript package manager

npm is the default package manager for Node.js and the world's largest software registry.

**In This Project:**
- Managing frontend dependencies
- Running build scripts
- Package versioning

---

### ![pip](https://img.shields.io/badge/pip-Latest-3776AB?style=for-the-badge&logo=python&logoColor=white)
**Purpose:** Python package installer

pip is the package installer for Python, used to install packages from the Python Package Index (PyPI).

**In This Project:**
- Installing Python dependencies
- Managing package versions
- Virtual environment management

---

## 🔧 Development Tools

### ![ESLint](https://img.shields.io/badge/ESLint-8.56.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
**Purpose:** JavaScript linter

ESLint is a pluggable linting utility for JavaScript and JSX to identify and fix problems in code.

**In This Project:**
- Code quality enforcement
- Style consistency
- Error prevention

**Configuration:**
- `frontend/.eslintrc.cjs` - ESLint rules

---

### ![Python Dotenv](https://img.shields.io/badge/Python_Dotenv-1.0.0-yellow?style=for-the-badge&logo=python&logoColor=white)
**Purpose:** Environment variable management

Python-dotenv reads key-value pairs from a `.env` file and sets them as environment variables.

**In This Project:**
- Managing configuration
- Keeping secrets out of code
- Environment-specific settings

**Files:**
- `backend/.env.example` - Environment template

---

## 🔐 Additional Libraries

### ![email-validator](https://img.shields.io/badge/email--validator-2.1.1-green?style=for-the-badge)
**Purpose:** Email validation

Validates email addresses using proper RFC standards.

**In This Project:**
- Validating user email addresses
- Ensuring data integrity

---

### ![python-multipart](https://img.shields.io/badge/python--multipart-0.0.18-blue?style=for-the-badge)
**Purpose:** Multipart form data parsing

Handles file uploads and form data in FastAPI.

**Security Note:** Using version 0.0.18 which patches multiple vulnerabilities:
- DoS via malformed multipart/form-data boundary
- Content-Type Header ReDoS vulnerability

**In This Project:**
- Processing file uploads
- Handling form submissions

---

## 📊 Complete Dependency List

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "@tanstack/react-query": "^5.17.19",
  "@tanstack/react-query-devtools": "^5.17.19",
  "axios": "^1.6.5"
}
```

### Frontend Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "vite": "^5.0.11",
  "eslint": "^8.56.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5"
}
```

### Backend Dependencies
```
fastapi==0.109.1
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
psycopg2-binary==2.9.9
pydantic==2.5.3
pydantic-settings==2.1.0
alembic==1.13.1
python-dotenv==1.0.0
python-multipart==0.0.18
email-validator==2.1.1
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │            React Application (Vite)                 │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │  Components (ItemsList, UsersList)           │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │  Tanstack Query (Data Management)            │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │  Axios (HTTP Client)                         │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                    HTTP/JSON (Port 8000)
                            │
┌─────────────────────────────────────────────────────────────┐
│                    FastAPI Backend                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  API Routes (/items, /users)                       │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Pydantic Schemas (Validation)                     │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │  SQLAlchemy ORM                                    │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                    SQL (Port 5432)
                            │
┌─────────────────────────────────────────────────────────────┐
│                 PostgreSQL Database                          │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Tables: items, users                              │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Why This Stack?

### Performance
- **Vite**: Near-instant server start and HMR
- **FastAPI**: High performance, comparable to Node.js
- **PostgreSQL**: Proven performance for complex queries
- **Tanstack Query**: Optimized caching and data fetching

### Developer Experience
- **TypeScript support**: Better IDE integration
- **Auto-generated docs**: FastAPI provides interactive API docs
- **Hot reload**: Both frontend and backend support hot reload
- **Type safety**: Pydantic for Python, TypeScript for JavaScript

### Scalability
- **Component-based**: React's architecture scales well
- **ASGI server**: Async support for high concurrency
- **Robust database**: PostgreSQL handles millions of records
- **Caching**: Tanstack Query reduces server load

### Modern Best Practices
- **RESTful API design**: Standard HTTP methods
- **Separation of concerns**: Clear frontend/backend separation
- **Environment configuration**: Secure secrets management
- **Database migrations**: Version control for database schema

---

## 📚 Learning Resources

- **React**: https://react.dev
- **Tanstack Query**: https://tanstack.com/query/latest
- **Vite**: https://vitejs.dev
- **FastAPI**: https://fastapi.tiangolo.com
- **SQLAlchemy**: https://www.sqlalchemy.org
- **Pydantic**: https://docs.pydantic.dev
- **PostgreSQL**: https://www.postgresql.org/docs
- **Alembic**: https://alembic.sqlalchemy.org

---

## 🔄 Version Information

| Technology | Version | Release Date |
|------------|---------|--------------|
| React | 18.2.0 | June 2022 |
| Tanstack Query | 5.17.19 | Jan 2024 |
| Vite | 5.0.11 | Jan 2024 |
| FastAPI | 0.109.1 | Jan 2024 |
| SQLAlchemy | 2.0.25 | Jan 2024 |
| PostgreSQL | 15 | Oct 2022 |
| Python | 3.9+ | Oct 2020 |
| Node.js | 18+ | Apr 2022 |
