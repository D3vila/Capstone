from .db import db
from flask_login import UserMixin


class Review(db.Model, UserMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    locationId = db.Column(db.Integer, db.ForeignKey(
        'locations.id'), nullable=False)
    review = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

    user = db.relationship('User', back_populates='reviews')
    locations = db.relationship('Location', back_populates='review')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'locationId': self.locationId,
            'review': self.review,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
        }
