from .db import db
from flask_login import UserMixin


class Location(db.Model, UserMixin):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    img1 = db.Column(db.Text, nullable=False)
    img2 = db.Column(db.Text, nullable=False)
    img3 = db.Column(db.Text, nullable=False)
    img4 = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.Text, nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(40), nullable=False)
    country = db.Column(db.String(40), nullable=False)
    month = db.Column(db.String(20), nullable=False)
    day = db.Column(db.Integer, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='locations')
    review = db.relationship('Review', back_populates='locations')
    reservation = db.relationship('Reservation', back_populates='locations')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'img1': self.img1,
            'img2': self.img2,
            'img3': self.img3,
            'img4': self.img4,
            'userId': self.userId,
            'description': self.description,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'month': self.month,
            'day': self.day,
            'year': self.year,
            'price': self.price,
        }
