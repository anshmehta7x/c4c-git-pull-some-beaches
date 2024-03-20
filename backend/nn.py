import librosa
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout, Input


model = Sequential()
model.add(Input(shape=(40, 626, 1)))  # Input layer with specified shape

# Convolutional layers for feature extraction
model.add(Conv2D(32, (3, 3), activation='relu', padding='same'))
model.add(MaxPooling2D((2, 2)))  # Adding MaxPooling layer for downsampling
model.add(Conv2D(64, (3, 3), activation='relu', padding='same'))
model.add(MaxPooling2D((2, 2)))  # Adding another MaxPooling layer
model.add(Conv2D(128, (3, 3), activation='relu', padding='same'))
model.add(MaxPooling2D((2, 2)))  # Adding another MaxPooling layer

# Flatten layer to convert 2D features to 1D
model.add(Flatten())

# Dense layers for classification
model.add(Dense(128, activation='relu'))  # Dense layer with ReLU activation
model.add(Dense(64, activation='relu'))   # Additional dense layer
model.add(Dense(1, activation='sigmoid'))  # Output layer with sigmoid activation for binary classification

# Load the model
model.load_weights('the_weights.h5')

def predict(f_path):
    # 1 is real
    # 0 is fake

    audio, sr = librosa.load(f_path, sr=16000)
    audio = librosa.util.fix_length(audio,size=80000)
    mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=40, hop_length=128)
    mfccs = np.expand_dims(mfccs, axis=0)
    predictions = model.predict(mfccs,verbose=0)
    if predictions[0] > 0.3:
        return 1
    else:
        return 0

def predict_array(wav_array, sampling_rate):
    # 1 is real
    # 0 is fake
    audio = wav_array
    # Resample the audio to 16000 Hz
    audio = librosa.resample(np.array(audio), orig_sr=sampling_rate, target_sr=16000)
    audio = librosa.util.fix_length(audio, size=80000)
    mfccs = librosa.feature.mfcc(y=audio, sr=16000, n_mfcc=40, hop_length=128)
    mfccs = np.expand_dims(mfccs, axis=0)
    predictions = model.predict(mfccs, verbose=0)
    if predictions[0] > 0.3:
        return 1
    else:
        return 0
