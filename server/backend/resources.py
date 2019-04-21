from instances import app
import models
from flask import jsonify


@app.route("/api/bar-codes/<bar_code>")
def get_bar_code_info(bar_code):
    result = [bc.get_data() for bc in models.BarCodes.objects(UPCEAN=str(bar_code))]
    return jsonify({'data': result})


@app.route("/api/addresses/<mid>")
def get_addresses(mid):
    result = [a.get_data() for a in models.Address.objects(materials__contains=mid)]
    return jsonify({'data': result})


@app.route("/api/material/<mid>")
def get_material_details(mid):
    m = models.Material.objects.with_id(mid)
    result = m.get_data_addresses()
    return jsonify({'data': result})


if __name__ == '__main__':
    app.run(host='0.0.0.0')