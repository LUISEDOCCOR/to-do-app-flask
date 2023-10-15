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
    if not db.existsUser(name):
        db.addUser(name, password)
        user = db.viewUser(name)
        return jsonify({
         'msg': 'successfully created' ,
         'mode': 'success',
         'id': user[0][0] 
        })
    else:
        return jsonify({
            'msg':'There was a mistake',
            'mode':'danger'
        })
        
@app.route('/login',methods=['POST'])
def login ():
    name = request.json["name"]
    password = request.json["password"]
    if db.existsUser(name):
        if db.verifyPassword(name, password):
            user = db.viewUser(name)
            return jsonify({
                'msg':'Welcome back!',
                'mode':'success',
                'id': user[0][0]
            })
        else:
            return jsonify({
                'msg':'Wrong Password',
                'mode': 'danger'
            })    
    else:
        return jsonify({
            'msg': 'that user does not exist',
            'mode': 'danger'
        })
    

    

if __name__ == '__main__':
    app.run(debug=True, port=4000)