import os
import time
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "postgresql://postgres:postgrespassword@postgres:5432/itemdb"
)

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def init_db():
    """Wait for PostgreSQL DNS and readiness before creating tables"""
    for attempt in range(1, 21):
        try:
            with engine.connect() as conn:
                Base.metadata.create_all(bind=engine)
                print("Database tables initialized successfully!")
                return
        except Exception as err:
            print(f"Waiting for Postgres ({attempt}/20)... Error: {err}")
            time.sleep(2)
    raise RuntimeError("Failed to connect to database after retries.")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()