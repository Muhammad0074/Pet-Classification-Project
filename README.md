# Pet Image Classifier

Welcome to the Pet Image Classifier project! This web application allows you to upload an image of your pet and receive a classification based on a pre-trained TensorFlow/Keras model. This project uses a simple Flask web server to handle image uploads and predictions.

## Features

- **Image Upload**: Easily upload an image of your pet.
- **Image Preview**: Preview the selected image before classification.
- **Model Classification**: Classify the image using a TensorFlow/Keras model.
- **Results Display**: View the classification result and confidence score directly on the web page.

## Project Structure

The project directory is organized as follows:

- `app.py`: The main Flask application that handles routing, file uploads, and model inference.
- `model.h5/model.h5`: The pre-trained TensorFlow/Keras model used for classifying pet images.
- `model.h5/labels.txt`: Text file containing class labels corresponding to the model's output classes (e.g., cat, dog, hamster).
- `static/CSS/style.css`: CSS file for styling the web page.
- `static/JS/script.js`: JavaScript file managing file uploads, image previews, and AJAX requests.
- `templates/index.html`: HTML template for the web page layout and structure.

## Requirement

- Python 3.11.2 
- Flask
- TensorFlow
- Pillow
- Other dependencies specified in `requirements.txt`


## Setup

To get the Pet Image Classifier up and running on your local machine, follow these steps:

### 1. Clone the Repository

Begin by cloning the repository to your local machine:
 
```bash
git clone https://github.com/Muhammad0074/Pet-Classification-Project.git
cd Pet-Classification-Project

```
### 2. open app.py terminal

- create virtual environment `pip install virtualenv venv`
- activate venv  `venv/Scripts/activate`
- install requirements  `pip install -r requirements.txt`
- run application  `python app.py`


