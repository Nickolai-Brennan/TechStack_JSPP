from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import items, users
from app.database import engine, Base

# Create database tables (comment out if database is not available during testing)
try:
    Base.metadata.create_all(bind=engine)
except Exception as e:
    print(f"Warning: Could not create database tables: {e}")
    print("Database will be initialized on first request that needs it.")

app = FastAPI(
    title="TechStack_JSPP API",
    description="FastAPI backend for React + Tanstack + FastAPI + PostgreSQL stack",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(items.router)
app.include_router(users.router)

@app.get("/")
def read_root():
    """
    Root endpoint - API health check.
    """
    return {
        "message": "Welcome to TechStack_JSPP API",
        "status": "healthy",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    """
    Health check endpoint.
    """
    return {"status": "healthy"}
