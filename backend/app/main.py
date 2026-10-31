from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from prometheus_fastapi_instrumentator import Instrumentator

from .database import get_db, init_db
from .models import Item
from .schemas import ItemCreate, ItemResponse

app = FastAPI(
    title="CloudOps Production API",
    version="1.0.0",
    description="Containerized Backend with PostgreSQL & Prometheus metrics"
)

# Startup event guarantees connection retries without crashing container
@app.on_event("startup")
def on_startup():
    init_db()

# Instrument Prometheus metrics at /metrics
Instrumentator().instrument(app).expose(app, endpoint="/metrics")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health", status_code=status.HTTP_200_OK)
def health():
    return {"status": "healthy", "service": "backend-fastapi", "database": "connected"}

@app.get("/api/items/", response_model=List[ItemResponse])
def read_items(db: Session = Depends(get_db)):
    return db.query(Item).order_by(Item.id.desc()).all()

@app.post("/api/items/", response_model=ItemResponse, status_code=status.HTTP_201_CREATED)
def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    new_item = Item(title=item.title, description=item.description)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

@app.delete("/api/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_item(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(Item).filter(Item.id == item_id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(db_item)
    db.commit()
    return None