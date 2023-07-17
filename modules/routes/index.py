# from . import routes_blueprint
from modules.dependencies import *

# @routes_blueprint.record
def register_route(app):
    @app.route('/')
    def index():
        return render_template(
            'english.html',
            language="English",
        )
