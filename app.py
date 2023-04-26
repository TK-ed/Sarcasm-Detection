from flask import Flask,request
from flask_cors import CORS
from predict import Predict
app = Flask(__name__)
CORS(app)

@app.route('/predicts',methods=['POST','GET'])
def predicts():
    user = request.get_json()
    print(user, type(user))
    response = { "result": Predict(user["value"]) }
    return response

if __name__ == '__main__':
    app.run(debug=True)