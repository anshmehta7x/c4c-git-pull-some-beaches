from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import cv2
from sqlalchemy.orm import Session
import librosa
from pydantic import BaseModel
import numpy as np
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

@app.post("/classifyaudio")
async def classifyaudio(file: UploadFile = File(...), db: Session = Depends(get_db)):
    print("API called with audio input succesfully")
    print(file)
    try:
        audio_array, sample_rate = librosa.load(file.file, sr=16000)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    pred = nn.predict_array(audio_array,sample_rate)

    return {'prediction':pred, 'status':'success'}

def conv_to_arr(file: UploadFile):
    try:
        image_data = np.frombuffer(file.file.read(), np.uint8)
        image = cv2.imdecode(image_data, cv2.IMREAD_COLOR)

        # Resize the image to 224x224
        resized_image = cv2.resize(image, (224, 224))

        # Convert BGR to RGB
        resized_image_rgb = cv2.cvtColor(resized_image, cv2.COLOR_BGR2RGB)

        # Convert to numpy array
        image_array = np.array(resized_image_rgb)
        return image_array
        
    except:
        return

@app.post("/classifyimage")
async def classifyimage(file: UploadFile = File(...), db: Session = Depends(get_db)):
    print("API called with image input succesfully")
    try:
        img_array = conv_to_arr(file)
        print(img_array)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    pred = nn.predict_image(img_array)

    return {'prediction':pred, 'status':'success'}
