import base64
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
from keras.optimizers import SGD
import os


app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
model = load_model(os.getcwd() + '/API/mnist_cnn.h5')

# get current directory
print("Current Directory: ", os.getcwd())


class prediction(Resource):
    def post(self):
        f = open('json_data.txt', 'w')
        data = request.get_json(force=True)  # get data from request
        print(data, file=f)
        img = data['image']
        # convert base64 string to png
        starter = img.find(',')
        img = img[starter+1:]
        img = bytes(img, encoding="ascii")
        img = base64.b64decode(img)
        # resize image to 28x28 and convert to grayscale
        img = image.img_to_array(image.load_img(
            img, target_size=(28, 28), color_mode='grayscale'))
        # reshape image to 1x28x28
        img = img.reshape(1, 28, 28, 1)
        pred = model.predict(img)
        res = jsonify({'prediction': str(np.argmax(pred))})
        print(np.argmax(pred))
        return res


api.add_resource(prediction, '/api/mnist/predict')


if __name__ == '__main__':
    app.run(debug=True)
