import mysql.connector


dbConfig = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'to-do-app'
}

conn = mysql.connector.connect(**dbConfig)
cursor = conn.cursor()


def existsUser(name):
    cursor.execute('SELECT * FROM users WHERE name = (%s)', (name,))
    data = cursor.fetchall()
    if not data:
        return False
    else:
        return True

def verifyPassword(name, password):
    cursor.execute('SELECT * FROM users WHERE name = (%s)', (name,))
    user = cursor.fetchall()
    if not user:
        return False
    else:
        if user[0][2] != password:
            return False
        else:
            return True
    
def addUser (name, password):
    cursor.execute('INSERT INTO users (name, password) VALUES (%s, %s)', (name, password))
    conn.commit()


def viewUser (name):
    cursor.execute('SELECT * FROM users WHERE name = %s', (name,))       
    user = cursor.fetchall()
    return user

