from sqlalchemy.orm import Session
import models, schemas
import secrets
import string

def generate_api_key(length=32):
    alphabet = string.ascii_letters + string.digits
    api_key = ''.join(secrets.choice(alphabet) for _ in range(length))
    return api_key

def get_api_key(db: Session, api_key: str):
    return db.query(models.APIKey).filter(models.APIKey.key == api_key).first()

def create_api_key(db: Session, payload: dict):
    random_api_key = generate_api_key()
    db_api_key = models.APIKey(key=random_api_key, owner=payload["owner"], is_active=payload["is_active"])
    db.add(db_api_key)
    db.commit()
    db.refresh(db_api_key)
    print("API Key created: ", random_api_key)
    return db_api_key

def get_all_api_keys_admin(db: Session):
    key_objects = db.query(models.APIKey).all()
    return key_objects

def get_api_key_by_owner(db: Session, owner: str):
    return db.query(models.APIKey).filter(models.APIKey.owner == owner).first()
