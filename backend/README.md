# Backend README

## FastAPI Backend

This is the backend API built with FastAPI and PostgreSQL.

### Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Start the server:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI application
│   ├── database.py      # Database connection
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   └── routers/         # API routes
│       ├── items.py
│       └── users.py
├── alembic/             # Database migrations
├── requirements.txt     # Python dependencies
└── .env                 # Environment variables
```

### API Endpoints

**Items:**
- `GET /items/` - List all items
- `GET /items/{id}` - Get item by ID
- `POST /items/` - Create new item
- `PUT /items/{id}` - Update item
- `DELETE /items/{id}` - Delete item

**Users:**
- `GET /users/` - List all users
- `GET /users/{id}` - Get user by ID
- `POST /users/` - Create new user
- `DELETE /users/{id}` - Delete user

### Database Migrations

```bash
# Create a new migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```
