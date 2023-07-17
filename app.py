  
from flask import Flask
from flask_session import Session
from src.routes import register_routes
import secrets
import os


app = Flask(__name__, template_folder='./templates', static_folder=os.path.abspath("./assets"))
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

register_routes(app)

if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(host="0.0.0.0", port='5000',debug=True)


