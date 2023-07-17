# from . import routes_blueprint
from modules.dependencies import *

# @routes_blueprint.record
def register_route(app):
    @app.route('/french')
    def french():
        return render_template(
            'french.html',
            language="French",
        )
