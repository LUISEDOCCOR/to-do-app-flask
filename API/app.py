from flask import *
from flask_cors import CORS
import database as db

#__name__ ==> __main__ 
app = Flask(__name__)
CORS(app)
@app.route('/signup', methods=['POST'])
def addUser():
    name = request.json["name"] 
    password = request.json["password"]
    print(request.json["name"])
    if not db.existsUser(name):
        db.addUser(name, password)
        return jsonify({
         'msg': 'successfully created' ,
         'mode': 'success'  
        })
    else:
        return jsonify({
            'msg':'There was a mistake',
            'mode':'danger'
        })
        


if __name__ == '__main__':
    app.run(debug=True, port=4000)