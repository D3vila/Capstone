from .db import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from datetime import datetime


class Reservation(db.Model, UserMixin):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    locationId = db.Column(db.Integer, db.ForeignKey(
        'locations.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    startDate = db.Column(db.Date, nullable=False)
    endDate = db.Column(db.Date, nullable=False)
    createdAt = db.Column(db.DateTime, default=db.func.now(), nullable=True)
    updatedAt = db.Column(db.DateTime, default=db.func.now(), server_onupdate=db.func.now(), nullable=True)
    price = db.Column(db.Integer, nullable=True)
    days = db.Column(db.Integer, nullable=True)

    locations = db.relationship('Location', back_populates='reservations')
    user = db.relationship('User', back_populates='reservations')

    def to_dict(self):
        return {
            'id': self.id,
            'locationId': self.locationId,
            'userId': self.userId,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
            'price': self.price,
            'days': self.days
        }
