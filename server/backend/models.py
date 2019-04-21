from instances import db


class Material(db.Document):
    name = db.StringField(max_length=50)
    description = db.StringField(max_length=255)

    def get_data(self):
        result = dict()
        result['id'] = str(self.id)
        result['name'] = self.name
        result['description'] = self.description
        return result

    def get_data_addresses(self):
        result = self.get_data()
        result['addresses'] = [a.get_data() for a in Address.objects(materials__contains=self)]
        return result


class Address(db.Document):
    city = db.StringField(max_length=50)
    street = db.StringField(max_length=255)
    building = db.StringField(max_length=255)
    materials = db.ListField(db.ReferenceField(Material))

    def get_data(self):
        result = dict()
        result['id'] = str(self.id)
        result['city'] = self.city
        result['street'] = self.street
        result['building'] = self.building
        result['materials'] = [m.get_data() for m in self.materials]
        return result


class Part(db.EmbeddedDocument):
    name = db.StringField(max_length=50)
    description = db.StringField(max_length=255)
    material = db.ReferenceField(Material)

    def get_data(self):
        result = dict()
        result['name'] = self.name
        result['material'] = self.material.get_data()
        return result


class BarCodes(db.Document):
    UPCEAN = db.StringField(required=True)
    Name = db.StringField(max_length=50)
    CategoryName = db.StringField(max_length=50)
    BrandName = db.StringField(max_length=50)
    materials = db.EmbeddedDocumentListField(Part)
    BrandID = db.StringField(max_length=50)
    CategoryID = db.StringField(max_length=50)
    ID = db.StringField(max_length=50)

    def get_data(self):
        result = dict()
        result['id'] = str(self.id)
        result['bar_code'] = self.UPCEAN
        result['name'] = self.Name
        result['materials'] = [m.get_data() for m in self.materials]
        return result

