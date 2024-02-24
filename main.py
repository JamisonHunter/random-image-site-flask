# Imports
import requests
from flask import Flask, render_template, jsonify

# Defining the app.
app = Flask(__name__, static_folder='static')


# Home
@app.route('/')
def home():
  return render_template('index.html')


# About
@app.route('/about')
def about():
  return render_template('about.html')


# Image API
# The JavaScript calls /random-image and the Flask app returns a random image from Lorem Picsum.
@app.route('/random-image')
def random_image():
  width = 1440
  height = 1440
  response = requests.get(f"https://picsum.photos/{width}/{height}")
  if response.status_code == 200:
    image_url = response.url
    print(f"Image URL: {image_url}")
    return jsonify({'image_url': image_url})
  else:
    print(f"Failed to get image URL. Status code: {response.status_code}")
    return jsonify({'error': 'Failed to fetch image URL'}), 500


if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8080, debug=True)
