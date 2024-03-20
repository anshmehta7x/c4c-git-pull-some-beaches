from pydantic import BaseModel

class APIKeyBase(BaseModel):
    key: str
    owner: str
    is_active: bool

class APIKeyCreate(APIKeyBase):
    pass

class APIKey(APIKeyBase):
    id: int

    class Config:
        orm_mode = True
