# TechStack_JSPP - Complete Setup Guide

## Step-by-Step Checklist for Building with React, Tanstack, FastAPI, and PostgreSQL

### Prerequisites
- [ ] Install Node.js (v18 or higher)
- [ ] Install Python (v3.9 or higher)
- [ ] Install PostgreSQL (v13 or higher)
- [ ] Install Git
- [ ] Install Docker and Docker Compose (optional, for containerized PostgreSQL)

---

## Part 1: Initial Setup

### 1.1 Clone and Navigate to Project
```bash
# Clone the repository
git clone https://github.com/Nickolai-Brennan/TechStack_JSPP.git
cd TechStack_JSPP
```

---

## Part 2: PostgreSQL Setup

### 2.1 Option A: Using Docker (Recommended)
- [ ] Make sure Docker is installed and running
- [ ] Start PostgreSQL container
```bash
docker-compose up -d
```

### 2.2 Option B: Local PostgreSQL Installation
- [ ] Install PostgreSQL on your system
- [ ] Create a new database
```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE techstack_db;

# Create user (optional)
CREATE USER techstack_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE techstack_db TO techstack_user;
```

### 2.3 Verify PostgreSQL Connection
- [ ] Test connection
```bash
psql -U postgres -d techstack_db -c "SELECT version();"
```

---

## Part 3: Backend Setup (FastAPI + Python)

### 3.1 Create Virtual Environment
- [ ] Navigate to backend directory
```bash
cd backend
```

- [ ] Create and activate virtual environment
```bash
# Create virtual environment
python -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on macOS/Linux
source venv/bin/activate
```

### 3.2 Install Python Dependencies
- [ ] Install required packages
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 3.3 Configure Environment Variables
- [ ] Copy example environment file
```bash
cp .env.example .env
```

- [ ] Update `.env` with your database credentials
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/techstack_db
SECRET_KEY=your-secret-key-here
```

### 3.4 Initialize Database
- [ ] Run database migrations
```bash
python -m alembic upgrade head
```

### 3.5 Start FastAPI Server
- [ ] Run the development server
```bash
uvicorn app.main:app --reload
```

- [ ] Verify backend is running at `http://localhost:8000`
- [ ] Check API docs at `http://localhost:8000/docs`

---

## Part 4: Frontend Setup (React + Tanstack)

### 4.1 Navigate to Frontend Directory
- [ ] Open new terminal and navigate
```bash
cd frontend
```

### 4.2 Install Node Dependencies
- [ ] Install packages using npm or yarn
```bash
# Using npm
npm install

# OR using yarn
yarn install
```

### 4.3 Configure Environment Variables
- [ ] Create environment file
```bash
cp .env.example .env
```

- [ ] Update `.env` with backend API URL
```
VITE_API_URL=http://localhost:8000
```

### 4.4 Start React Development Server
- [ ] Run the development server
```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

- [ ] Verify frontend is running at `http://localhost:5173`

---

## Part 5: Verify Full Stack Integration

### 5.1 Test Database Connection
- [ ] Ensure PostgreSQL is running
- [ ] Backend can connect to database
- [ ] Check logs for any connection errors

### 5.2 Test Backend API
- [ ] Open `http://localhost:8000/docs`
- [ ] Test API endpoints using Swagger UI
- [ ] Verify CRUD operations work

### 5.3 Test Frontend
- [ ] Open `http://localhost:5173`
- [ ] Verify React app loads
- [ ] Test API calls from frontend to backend
- [ ] Check browser console for errors

### 5.4 Test End-to-End Flow
- [ ] Create data from frontend
- [ ] Verify data is stored in PostgreSQL
- [ ] Retrieve and display data in frontend

---

## Part 6: Development Workflow

### 6.1 Running Both Servers Concurrently
- [ ] Open two terminal windows
- [ ] Terminal 1: Run backend (`cd backend && uvicorn app.main:app --reload`)
- [ ] Terminal 2: Run frontend (`cd frontend && npm run dev`)

### 6.2 Making Changes
- [ ] Backend changes: FastAPI auto-reloads on file changes
- [ ] Frontend changes: Vite auto-reloads on file changes
- [ ] Database changes: Create new migration and apply

---

## Part 7: Production Deployment Checklist

### 7.1 Environment Configuration
- [ ] Set production environment variables
- [ ] Configure production database
- [ ] Set secure SECRET_KEY
- [ ] Enable CORS for production domain

### 7.2 Build Frontend
- [ ] Create production build
```bash
cd frontend
npm run build
```

### 7.3 Deploy Backend
- [ ] Set up production server
- [ ] Install Python dependencies
- [ ] Run database migrations
- [ ] Start FastAPI with production ASGI server (e.g., Gunicorn)

### 7.4 Deploy Frontend
- [ ] Upload build files to hosting service
- [ ] Configure web server (Nginx/Apache)
- [ ] Set up SSL certificate

### 7.5 Database
- [ ] Set up managed PostgreSQL instance
- [ ] Configure backups
- [ ] Set up monitoring

---

## Common Issues and Solutions

### PostgreSQL Connection Issues
**Problem:** Cannot connect to PostgreSQL
**Solution:** 
- Check PostgreSQL is running: `sudo systemctl status postgresql`
- Verify credentials in `.env`
- Check firewall settings

### Backend Port Already in Use
**Problem:** Port 8000 already in use
**Solution:**
- Kill process: `lsof -ti:8000 | xargs kill -9`
- Or use different port: `uvicorn app.main:app --reload --port 8001`

### Frontend Build Errors
**Problem:** npm install fails
**Solution:**
- Clear cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules`
- Reinstall: `npm install`

### CORS Errors
**Problem:** Frontend cannot connect to backend
**Solution:**
- Verify CORS settings in FastAPI
- Check backend URL in frontend `.env`
- Ensure backend is running

---

## Additional Resources

- **React Documentation:** https://react.dev
- **Tanstack Query:** https://tanstack.com/query/latest
- **FastAPI Documentation:** https://fastapi.tiangolo.com
- **PostgreSQL Documentation:** https://www.postgresql.org/docs/

---

## Quick Start Commands

```bash
# Start PostgreSQL (Docker)
docker-compose up -d

# Start Backend
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn app.main:app --reload

# Start Frontend (new terminal)
cd frontend
npm run dev
```

---

## Project Structure Reference

```
TechStack_JSPP/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── main.py         # FastAPI application
│   │   ├── models.py       # Database models
│   │   ├── schemas.py      # Pydantic schemas
│   │   ├── database.py     # Database connection
│   │   └── routers/        # API routes
│   ├── alembic/            # Database migrations
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Backend environment variables
├── frontend/               # React frontend
│   ├── src/
│   │   ├── main.jsx        # Entry point
│   │   ├── App.jsx         # Main component
│   │   ├── components/     # React components
│   │   └── api/            # API integration
│   ├── package.json        # Node dependencies
│   └── .env                # Frontend environment variables
├── docker-compose.yml      # PostgreSQL container
└── SETUP_GUIDE.md          # This file
```
