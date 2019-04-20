from instances import app
import models
from flask import jsonify


@app.route("/api/bar-codes/<bar_code>")
def get_bar_code_info(bar_code):
    result = [bc.get_data() for bc in models.BarCodes.objects(UPCEAN=str(bar_code))]
    return jsonify({'data': result})


@app.route("/api/materials/<mid>")
def get_material_info(mid):
    return models.Material.objects.with_id(mid).to_json()


@app.route("/api/init_db")
def init_db():
    m = models.Material(name='plastic', description='smooth and pleasurable')
    m.save()
    code = models.BarCodes.objects(UPCEAN='061500127178').first()
    code.material.append(m)
    code.save()
    return "done"


if __name__ == '__main__':
    app.run(host='0.0.0.0')