# 📘 Complete Installation & Setup Guide

## Table of Contents
1. [Prerequisites Installation](#prerequisites-installation)
2. [PostgreSQL Setup (Detailed)](#postgresql-setup-detailed)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites Installation

### 1. Install Node.js and npm

**Windows:**
1. Download Node.js installer from https://nodejs.org/ (LTS version recommended)
2. Run the installer
3. Verify installation:
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

**macOS:**
```bash
# Using Homebrew
brew install node

# Verify
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
# Update package list
sudo apt update

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

---

### 2. Install Python

**Windows:**
1. Download Python from https://www.python.org/downloads/ (3.9 or higher)
2. Run installer
3. **IMPORTANT**: Check "Add Python to PATH" during installation
4. Verify:
```bash
python --version  # Should show 3.9.x or higher
pip --version
```

**macOS:**
```bash
# Using Homebrew
brew install python@3.11

# Verify
python3 --version
pip3 --version
```

**Linux (Ubuntu/Debian):**
```bash
# Update package list
sudo apt update

# Install Python and pip
sudo apt install -y python3 python3-pip python3-venv

# Verify
python3 --version
pip3 --version
```

---

### 3. Install Git

**Windows:**
1. Download from https://git-scm.com/download/win
2. Run installer with default settings

**macOS:**
```bash
brew install git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt install -y git
```

Verify:
```bash
git --version
```

---

## PostgreSQL Setup (Detailed)

### Option 1: Using Docker (Recommended for Development)

#### Install Docker Desktop

**Windows:**
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop
2. Install and restart your computer
3. Start Docker Desktop
4. Verify:
```bash
docker --version
docker-compose --version
```

**macOS:**
```bash
# Using Homebrew
brew install --cask docker

# Or download from https://www.docker.com/products/docker-desktop
```

**Linux (Ubuntu/Debian):**
```bash
# Install Docker
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Verify
docker --version
docker compose version
```

#### Start PostgreSQL with Docker

1. Navigate to project directory:
```bash
cd TechStack_JSPP
```

2. Start PostgreSQL container:
```bash
docker-compose up -d
```

3. Verify container is running:
```bash
docker ps
# Should show a container named "techstack_postgres"
```

4. View logs:
```bash
docker-compose logs postgres
```

5. Stop PostgreSQL:
```bash
docker-compose down
```

6. Stop and remove all data:
```bash
docker-compose down -v
```

#### Docker PostgreSQL Configuration Details

The `docker-compose.yml` file configures:
- **Image**: `postgres:15-alpine` (lightweight PostgreSQL 15)
- **Container Name**: `techstack_postgres`
- **Port**: 5432 (mapped to host)
- **Username**: `postgres`
- **Password**: `postgres`
- **Database**: `techstack_db`
- **Volume**: `postgres_data` (persists data between container restarts)
- **Health Check**: Ensures database is ready before backend connects

---

### Option 2: Local PostgreSQL Installation

#### Windows

1. **Download PostgreSQL:**
   - Visit https://www.postgresql.org/download/windows/
   - Download PostgreSQL installer (version 15 recommended)

2. **Run Installer:**
   - Run the downloaded `.exe` file
   - Accept default installation directory: `C:\Program Files\PostgreSQL\15`
   - Set password for postgres user (remember this!)
   - Use default port: 5432
   - Use default locale

3. **Add to PATH (if not automatic):**
   - Open System Properties → Environment Variables
   - Add to PATH: `C:\Program Files\PostgreSQL\15\bin`

4. **Verify Installation:**
```bash
psql --version
```

5. **Create Database:**
```bash
# Login as postgres user
psql -U postgres

# In psql prompt:
CREATE DATABASE techstack_db;

# Create user (optional)
CREATE USER techstack_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE techstack_db TO techstack_user;

# Exit psql
\q
```

#### macOS

1. **Install PostgreSQL:**
```bash
# Using Homebrew
brew install postgresql@15

# Start PostgreSQL service
brew services start postgresql@15

# Or start manually
pg_ctl -D /usr/local/var/postgres start
```

2. **Verify Installation:**
```bash
psql --version
```

3. **Create Database:**
```bash
# Create database
createdb techstack_db

# Or using psql
psql postgres
CREATE DATABASE techstack_db;
\q
```

#### Linux (Ubuntu/Debian)

1. **Install PostgreSQL:**
```bash
# Update package list
sudo apt update

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

2. **Verify Installation:**
```bash
psql --version
```

3. **Create Database:**
```bash
# Switch to postgres user
sudo -u postgres psql

# In psql prompt:
CREATE DATABASE techstack_db;

# Create user (optional)
CREATE USER techstack_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE techstack_db TO techstack_user;

# Exit
\q
```

#### Configure PostgreSQL Authentication

1. **Find pg_hba.conf:**
   - Windows: `C:\Program Files\PostgreSQL\15\data\pg_hba.conf`
   - macOS: `/usr/local/var/postgres/pg_hba.conf`
   - Linux: `/etc/postgresql/15/main/pg_hba.conf`

2. **Edit Authentication:**
   ```
   # For local development, use md5 or trust
   local   all             all                                     md5
   host    all             all             127.0.0.1/32            md5
   ```

3. **Restart PostgreSQL:**
   - Windows: Services → PostgreSQL → Restart
   - macOS: `brew services restart postgresql@15`
   - Linux: `sudo systemctl restart postgresql`

#### Test Connection

```bash
# Using psql
psql -U postgres -d techstack_db -h localhost -p 5432

# In psql, check version and list databases
SELECT version();
\l

# Exit
\q
```

---

## Backend Setup

### 1. Clone Repository

```bash
git clone https://github.com/Nickolai-Brennan/TechStack_JSPP.git
cd TechStack_JSPP
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Create Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

Your prompt should now show `(venv)` indicating the virtual environment is active.

### 4. Install Dependencies

```bash
# Upgrade pip
pip install --upgrade pip

# Install all requirements
pip install -r requirements.txt
```

**What gets installed:**
- `fastapi` - Web framework
- `uvicorn` - ASGI server with WebSocket and HTTP/2 support
- `sqlalchemy` - ORM for database operations
- `psycopg2-binary` - PostgreSQL adapter
- `pydantic` - Data validation
- `alembic` - Database migrations
- `python-dotenv` - Environment variables
- `email-validator` - Email validation
- And more supporting libraries

### 5. Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env
```

Edit `.env` file:
```bash
# For Docker PostgreSQL
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/techstack_db

# For local PostgreSQL (adjust username/password)
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/techstack_db

SECRET_KEY=change-this-to-a-random-secret-key-in-production
ENVIRONMENT=development
```

**Explanation of Environment Variables:**
- `DATABASE_URL`: PostgreSQL connection string
  - Format: `postgresql://[user]:[password]@[host]:[port]/[database]`
  - Example: `postgresql://postgres:postgres@localhost:5432/techstack_db`
- `SECRET_KEY`: Used for cryptographic signing (change in production!)
- `ENVIRONMENT`: Set to `development` or `production`

### 6. Initialize Database (Optional - using Alembic)

```bash
# Create initial migration
alembic revision --autogenerate -m "Initial migration"

# Apply migration
alembic upgrade head
```

**Note:** The application auto-creates tables on first run, so migrations are optional for development.

### 7. Start Backend Server

```bash
uvicorn app.main:app --reload
```

**Uvicorn Options Explained:**
- `app.main:app` - Module and FastAPI instance to run
- `--reload` - Auto-reload on code changes (development only)
- `--host 0.0.0.0` - Listen on all network interfaces
- `--port 8000` - Port to listen on (default: 8000)

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

### 8. Test Backend

Open browser and visit:
- API Root: http://localhost:8000
- Interactive Docs: http://localhost:8000/docs
- Alternative Docs: http://localhost:8000/redoc

---

## Frontend Setup

### 1. Open New Terminal

Keep the backend terminal running. Open a new terminal window.

### 2. Navigate to Frontend

```bash
cd TechStack_JSPP/frontend
```

### 3. Install Dependencies

```bash
npm install
```

**What gets installed:**
- `react` & `react-dom` - React library
- `@tanstack/react-query` - Data fetching and caching
- `axios` - HTTP client
- `vite` - Build tool
- `eslint` - Code linter
- And development dependencies

This may take a few minutes as it downloads all packages.

### 4. Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env
```

Edit `.env` file:
```bash
VITE_API_URL=http://localhost:8000
```

**Explanation:**
- `VITE_API_URL`: Backend API URL
- Vite exposes environment variables prefixed with `VITE_`
- Access in code via `import.meta.env.VITE_API_URL`

### 5. Start Frontend Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.0.11  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 6. Test Frontend

Open browser and visit: http://localhost:5173

You should see the TechStack JSPP application!

---

## Running the Application

### Complete Startup Sequence

**Terminal 1 - PostgreSQL (if using Docker):**
```bash
cd TechStack_JSPP
docker-compose up -d
```

**Terminal 2 - Backend:**
```bash
cd TechStack_JSPP/backend
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn app.main:app --reload
```

**Terminal 3 - Frontend:**
```bash
cd TechStack_JSPP/frontend
npm run dev
```

### Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **PostgreSQL**: localhost:5432

### Testing the Full Stack

1. **Create an Item:**
   - Go to http://localhost:5173
   - Click "Items" tab
   - Enter item name and description
   - Click "Add Item"
   - Item should appear in the list

2. **Create a User:**
   - Click "Users" tab
   - Enter email, username, and full name
   - Click "Add User"
   - User should appear in the list

3. **Verify in Database:**
   ```bash
   psql -U postgres -d techstack_db
   SELECT * FROM items;
   SELECT * FROM users;
   \q
   ```

---

## Troubleshooting

### PostgreSQL Issues

**Problem:** Cannot connect to PostgreSQL
```
psycopg2.OperationalError: connection to server at "localhost" (::1), port 5432 failed
```

**Solutions:**
1. Check PostgreSQL is running:
   ```bash
   # Docker
   docker ps | grep postgres
   
   # Local Windows
   services.msc → PostgreSQL
   
   # Local macOS
   brew services list | grep postgresql
   
   # Local Linux
   sudo systemctl status postgresql
   ```

2. Verify port 5432 is not blocked:
   ```bash
   # Check if port is in use
   netstat -an | grep 5432
   ```

3. Check credentials in `.env` file

4. Test direct connection:
   ```bash
   psql -U postgres -h localhost -p 5432 -d techstack_db
   ```

---

**Problem:** Database does not exist
```
psycopg2.OperationalError: database "techstack_db" does not exist
```

**Solution:**
```bash
# Create database
psql -U postgres
CREATE DATABASE techstack_db;
\q
```

---

### Backend Issues

**Problem:** Module not found errors
```
ModuleNotFoundError: No module named 'fastapi'
```

**Solution:**
1. Ensure virtual environment is activated:
   ```bash
   # You should see (venv) in prompt
   source venv/bin/activate  # macOS/Linux
   venv\Scripts\activate     # Windows
   ```

2. Reinstall dependencies:
   ```bash
   pip install -r requirements.txt
   ```

---

**Problem:** Port 8000 already in use
```
ERROR: [Errno 48] error while attempting to bind on address ('127.0.0.1', 8000)
```

**Solution:**
1. Find and kill the process:
   ```bash
   # macOS/Linux
   lsof -ti:8000 | xargs kill -9
   
   # Windows
   netstat -ano | findstr :8000
   taskkill /PID <PID> /F
   ```

2. Or use a different port:
   ```bash
   uvicorn app.main:app --reload --port 8001
   ```

---

### Frontend Issues

**Problem:** npm install fails
```
npm ERR! code EINTEGRITY
```

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

**Problem:** Port 5173 already in use

**Solution:**
1. Kill the process:
   ```bash
   # macOS/Linux
   lsof -ti:5173 | xargs kill -9
   
   # Windows
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   ```

2. Or configure different port in `vite.config.js`:
   ```javascript
   export default defineConfig({
     server: {
       port: 3000
     }
   })
   ```

---

**Problem:** Cannot connect to backend API
```
Network Error
```

**Solution:**
1. Verify backend is running on http://localhost:8000
2. Check CORS settings in `backend/app/main.py`
3. Verify `VITE_API_URL` in `frontend/.env`
4. Check browser console for detailed errors

---

### General Issues

**Problem:** Python version mismatch

**Solution:**
```bash
# Check Python version
python --version  # Should be 3.9 or higher

# If you have multiple Python versions
python3.11 -m venv venv
```

---

**Problem:** Node version mismatch

**Solution:**
```bash
# Check Node version
node --version  # Should be 18 or higher

# Use nvm to manage Node versions
nvm install 18
nvm use 18
```

---

## Development Workflow

### Daily Development

1. **Start all services:**
   ```bash
   # Terminal 1
   docker-compose up -d
   
   # Terminal 2
   cd backend && source venv/bin/activate && uvicorn app.main:app --reload
   
   # Terminal 3
   cd frontend && npm run dev
   ```

2. **Make changes and test**

3. **Stop services:**
   ```bash
   # Stop backend: Ctrl+C in terminal
   # Stop frontend: Ctrl+C in terminal
   # Stop database:
   docker-compose down
   ```

### Creating Database Migrations

When you modify models:

```bash
cd backend
source venv/bin/activate

# Create migration
alembic revision --autogenerate -m "Description of changes"

# Review generated migration in alembic/versions/

# Apply migration
alembic upgrade head

# Rollback if needed
alembic downgrade -1
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
# Built files in dist/
```

**Backend:**
```bash
# Use production ASGI server
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

---

## Next Steps

- Read [TECHSTACK.md](TECHSTACK.md) to understand all technologies
- Review [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed feature explanations
- Explore API at http://localhost:8000/docs
- Modify frontend components in `frontend/src/components/`
- Add new API endpoints in `backend/app/routers/`
- Customize database models in `backend/app/models.py`

---

## Getting Help

- **FastAPI Documentation**: https://fastapi.tiangolo.com
- **React Documentation**: https://react.dev
- **Tanstack Query**: https://tanstack.com/query/latest
- **PostgreSQL Manual**: https://www.postgresql.org/docs/
- **GitHub Issues**: Create an issue in the repository

---

## Summary Checklist

- [ ] Node.js 18+ installed
- [ ] Python 3.9+ installed
- [ ] Git installed
- [ ] PostgreSQL running (Docker or local)
- [ ] Database `techstack_db` created
- [ ] Backend virtual environment created
- [ ] Backend dependencies installed
- [ ] Backend `.env` configured
- [ ] Backend running on port 8000
- [ ] Frontend dependencies installed
- [ ] Frontend `.env` configured
- [ ] Frontend running on port 5173
- [ ] Can access http://localhost:5173
- [ ] Can access http://localhost:8000/docs
- [ ] Can create items and users from frontend
- [ ] Data persists in PostgreSQL

If all items are checked, congratulations! Your full stack is ready! 🎉
