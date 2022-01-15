import mysql.connector
from flask import Flask

# Connection
connection = mysql.connector.connect(host='localhost',
                                    database='runeterra',
                                    user='netson',
                                    password='netson',
                                    )

# API
app = Flask(__name__)

@app.route("/countrys")
def countrys():
    # cursor = connection.cursor()
    # cursor.execute("SELECT * FROM country")
    # result = cursor.fetchall()
    # return str(result)
    return ({'country': 'Brazil', 'capital': 'Brasilia'})

if __name__ == "__main__":
    app.run(debug=True)
    



# mycursor = connection.cursor()

# mycursor.execute("SELECT * FROM country")

# myresult = mycursor.fetchall()

# for x in myresult:
#   print("Title: " + x[1])
#   print("Location: " + x[2])
#   print("Goverment type: " + x[3])
#   print("Description: " + x[4])
#   print("IconUrl: " + x[5])
#   print("ImageUrl: " + x[6])