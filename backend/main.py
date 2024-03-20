from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import librosa
from pydantic import BaseModel

import crud, models, schemas, nn
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AudioData(BaseModel):
    file: UploadFile

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/api_keys/", response_model=schemas.APIKey)
def create_api_key(payload: dict, db: Session = Depends(get_db)):
    return crud.create_api_key(db=db, payload=payload)

@app.get("/api_keys/{api_key}", response_model=schemas.APIKey)
def read_api_key(api_key: str, db: Session = Depends(get_db)):
    db_api_key = crud.get_api_key(db, api_key=api_key)
    if db_api_key is None:
        raise HTTPException(status_code=404, detail="API Key not found")
    return db_api_key

@app.get("/api_keys/")
def read_api_keys(db: Session = Depends(get_db)):
    api_keys = crud.get_all_api_keys_admin(db)
    return api_keys

@app.get("/api_keys/owner/{owner}", response_model=schemas.APIKey)
def read_api_key_by_owner(owner: str, db: Session = Depends(get_db)):
    db_api_key = crud.get_api_key_by_owner(db, owner=owner)
    if db_api_key is None:
        raise HTTPException(status_code=404, detail="API Key not found")
    return db_api_key

#@app.post("/predict")
#async def predict(file: UploadFile = File(...)):
 #   print("API called with audio input succesfully")
  #  audio_bytes = await file.read()
   # print(audio_bytes)
   # return {"status": "success"}

@app.post("/classify")
async def classify(file: UploadFile = File(...), db: Session = Depends(get_db)):
    print("API called with audio input succesfully")
    print(file)
    try:
        audio_array, sample_rate = librosa.load(file.file, sr=16000)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    pred = nn.predict_array(audio_array,sample_rate)
    return {"status": "success", "prediction": pred}