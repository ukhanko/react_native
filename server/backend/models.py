from flask_mongoengine.wtf import model_form
from instances import db


class Material(db.Document):
    name = db.StringField(max_length=50)
    description = db.StringField(max_length=255)

    def get_data(self):
        result = dict()
        result['name'] = self.name
        result['description'] = self.description
        return result


class BarCodes(db.Document):
    UPCEAN = db.StringField(required=True)
    Name = db.StringField(max_length=50)
    CategoryName = db.StringField(max_length=50)
    BrandName = db.StringField(max_length=50)
    material = db.ListField(db.ReferenceField(Material))
    BrandID = db.StringField(max_length=50)
    CategoryID = db.StringField(max_length=50)
    ID = db.StringField(max_length=50)

    def get_data(self):
        result = dict()
        result['id'] = str(self.id)
        result['bar_code'] = self.UPCEAN
        result['name'] = self.Name
        result['materials'] = [m.get_data() for m in self.material]
        return result

