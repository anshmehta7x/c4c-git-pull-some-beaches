import librosa
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout, Input
import matplotlib.pyplot as plt
from PIL import Image
import cv2

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

model2 = Sequential()

# Convolutional layers
model2.add(Conv2D(32, (3, 3), activation='relu', input_shape=(224,224,3)))
model2.add(MaxPooling2D((2, 2)))
model2.add(Conv2D(64, (3, 3), activation='relu'))
model2.add(MaxPooling2D((2, 2)))
model2.add(Conv2D(128, (3, 3), activation='relu'))
model2.add(MaxPooling2D((2, 2)))

# Flatten the output of the convolutional layers
model2.add(Flatten())

# Dense (fully-connected) layers
model2.add(Dense(128, activation='relu'))
model2.add(Dropout(0.5))
model2.add(Dense(64, activation='relu'))
model2.add(Dropout(0.5))

# Output layer
model2.add(Dense(1, activation='sigmoid'))

# Compile the model
model2.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

model2.load_weights('image_weights_final.h5')




def predict(f_path):
    # 1 is real
    # 0 is fake

    audio, sr = librosa.load(f_path, sr=16000)

    
    audio = librosa.util.fix_length(audio,size=80000)

    mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=40, hop_length=128)
    mfccs = np.expand_dims(mfccs, axis=0)
    predictions = model.predict(mfccs,verbose=0)
    if predictions[0] > 0.3:
        return (1,'plot.png')
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

def create_waveform(wav_array, sampling_rate):
    audio = wav_array
    audio = librosa.resample(np.array(audio), orig_sr=sampling_rate, target_sr=16000)
    audio = librosa.util.fix_length(audio, size=80000)
    mfccs = librosa.feature.mfcc(y=audio, sr=16000, n_mfcc=40, hop_length=128)
    mfccs = np.expand_dims(mfccs, axis=0)
    plt.figure(figsize=(10, 4))
    librosa.display.specshow(mfccs[0], x_axis='time')
    plt.colorbar()
    plt.title('MFCC')
    plt.tight_layout()
    plt.savefig('plot.png')
    return 'plot.png'


def error_level_analysis(image, quality_val=90):
    """
    Perform Error Level Analysis (ELA) on an image.
    
    Args:
        image (numpy.ndarray): Input image.
        quality_val (int): Quality value for JPEG compression (0-100).
        
    Returns:
        numpy.ndarray: Error Level Analysis image.
    """
    try:
        temp_filename = 'temp.jpg'
        _, encoded_img = cv2.imencode('.jpg', image, [cv2.IMWRITE_JPEG_QUALITY, quality_val])
        decoded_img = cv2.imdecode(encoded_img, cv2.IMREAD_UNCHANGED)

        ela_image = np.abs(image.astype(np.float32) - decoded_img.astype(np.float32))

        return ela_image
    except:
        return

def predict_image(image):
    arr = error_level_analysis(image)
    img_array = np.expand_dims(arr, axis=0)
    prediction = model2.predict(img_array)
    
    if prediction > 0.5:
        result = 0 #fake
    else:
        result = 1 #real
    print(prediction)
    
    return result