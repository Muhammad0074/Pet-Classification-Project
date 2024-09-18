from flask import Flask, request, render_template, jsonify
from PIL import Image
import numpy as np
import tensorflow as tf

app = Flask(__name__)

# upload model
model = tf.keras.models.load_model('model.h5\model.h5')

with open('model.h5/labels.txt', 'r') as f:
    class_names = [line.strip() for line in f.readlines()]

#define target size of the model
target_size = (224, 224)

#function to preprocess the uploaded img
def preprocess_image(image_file):
    img = Image.open(image_file)
    img = img.convert('RGB')
    img = img.resize(target_size)
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        img_array = preprocess_image(file)
        predictions = model.predict(img_array)
        class_idx = np.argmax(predictions[0])
        confidence = float(predictions[0][class_idx])

        result = class_names[class_idx]

        return jsonify({
            'result': result,
            'confidence': confidence
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=90)
