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
    
@app.route('/viewtodos', methods = ["POST"])
def viewToDo():
    user_id = request.json["user_id"]
    data = db.viewToDo(user_id)
    toDos = []
    for todo in data:
        toDos.append({
            'id': todo[0],
            'title': todo[1],
            'activity': todo[2],
        })
    return jsonify(toDos)    

@app.route('/addToDo', methods = ["POST"])
def addToDo ():
    title = request.json["title"]
    activity = request.json["activity"]
    user_id = request.json["user_id"]
    db.addToDo(title, activity, user_id)
    return jsonify({
        'msg': 'ture'
    })
        
    
    

if __name__ == '__main__':
    app.run(debug=True, port=4000)