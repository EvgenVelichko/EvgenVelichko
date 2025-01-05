from flask import Flask, render_template, request, jsonify, send_from_directory
import os
from datetime import date

app = Flask(__name__)

#
STATIC_FOLDER = os.path.join(os.getcwd(), 'static')
app.static_folder = STATIC_FOLDER

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/static/<path:path>')
def static_files(path):
    return send_from_directory(STATIC_FOLDER, path)

@app.route('/api/change-language', methods=['POST'])
def change_language():
    """API для смены языка."""
    data = request.json
    lang = data.get('lang', 'en')
    response = {
        'message': f'Language changed to {lang}',
        'lang': lang
    }
    return jsonify(response), 200

@app.route('/api/get-age', methods=['GET'])
def get_age():
 
    birth_date = date(2011, 9, 5)  
    today = date.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return jsonify({'age': age}), 200

if __name__ == '__main__':
    app.run(debug=True)