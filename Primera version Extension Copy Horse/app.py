from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import pyperclip

app = Flask(__name__)
CORS(app)


@app.route('/mostrar', methods=['GET'])
@cross_origin()
def search():
    try:
        texto_copiado = pyperclip.paste()
        content = {
            'text': texto_copiado
        }
        return jsonify(content)

    except Exception as e:
        error_message = f"Error en la aplicación: {str(e)}"
        return jsonify({'error': error_message}), 500


if __name__ == '__main__':
    app.run(debug=True, port=1212)