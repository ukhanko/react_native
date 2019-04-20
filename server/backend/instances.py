from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'project1',
    'host': 'mongodb+srv://gch:123@barcodescluster-nwypl.gcp.mongodb.net/test?retryWrites=true'
}
db = MongoEngine(app)