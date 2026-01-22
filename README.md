# TechStack_JSPP

**JavaScript - Python - PostgreSQL Full-Stack Setup**

A complete full-stack application template using React, Tanstack Query, FastAPI, and PostgreSQL.

## 🚀 Tech Stack

- **Frontend:** React 18 + Tanstack Query + Vite
- **Backend:** FastAPI + Python 3.9+
- **Database:** PostgreSQL 13+
- **Tools:** Docker Compose, Alembic (migrations)

## 📋 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.9+
- PostgreSQL 13+ (or Docker)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Nickolai-Brennan/TechStack_JSPP.git
cd TechStack_JSPP
```

### 2. Start PostgreSQL

**Option A: Using Docker (Recommended)**
```bash
docker-compose up -d
```

**Option B: Local PostgreSQL**
```bash
# Create database
psql -U postgres -c "CREATE DATABASE techstack_db;"
```

### 3. Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env

# Start FastAPI server
uvicorn app.main:app --reload
```

Backend will run at `http://localhost:8000`
API docs available at `http://localhost:8000/docs`

### 4. Setup Frontend (New Terminal)

```bash
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm run dev
```

Frontend will run at `http://localhost:5173`

## 📖 Documentation

- **[Complete Setup Guide](SETUP_GUIDE.md)** - Detailed step-by-step instructions
- **[Backend Documentation](backend/README.md)** - FastAPI backend details
- **[Frontend Documentation](frontend/README.md)** - React frontend details

## 🏗️ Project Structure

```
TechStack_JSPP/
├── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── main.py         # FastAPI application
│   │   ├── models.py       # Database models
│   │   ├── schemas.py      # Pydantic schemas
│   │   ├── database.py     # Database connection
│   │   └── routers/        # API endpoints
│   ├── alembic/            # Database migrations
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Environment variables template
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── api/            # API integration with Tanstack Query
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json        # Node dependencies
│   └── .env.example        # Environment variables template
├── docker-compose.yml      # PostgreSQL container setup
├── SETUP_GUIDE.md          # Comprehensive setup guide
└── README.md               # This file
```

## 🔧 Features

### Backend (FastAPI)
- RESTful API with automatic OpenAPI documentation
- SQLAlchemy ORM with PostgreSQL
- Alembic database migrations
- CORS middleware configured
- Pydantic data validation
- Example endpoints for Items and Users

### Frontend (React)
- Modern React 18 with hooks
- Tanstack Query for data fetching and caching
- Vite for fast development and building
- Axios for HTTP requests
- Responsive UI with CSS
- Real-time data synchronization
- Example components for Items and Users management

## 📝 API Endpoints

**Items:**
- `GET /items/` - List all items
- `GET /items/{id}` - Get item by ID
- `POST /items/` - Create item
- `PUT /items/{id}` - Update item
- `DELETE /items/{id}` - Delete item

**Users:**
- `GET /users/` - List all users
- `GET /users/{id}` - Get user by ID
- `POST /users/` - Create user
- `DELETE /users/{id}` - Delete user

## 🧪 Development

### Backend Development

```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

### Frontend Development

```bash
cd frontend
npm run dev
```

### Database Migrations

```bash
cd backend
# Create migration
alembic revision --autogenerate -m "description"

# Apply migrations
alembic upgrade head
```

## 🏭 Production Build

### Frontend

```bash
cd frontend
npm run build
```

### Backend

Use a production ASGI server:
```bash
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Tanstack Query](https://tanstack.com/query/latest)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
