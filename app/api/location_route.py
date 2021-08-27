from flask import Blueprint
from app.models import Location

location_route = Blueprint('location', __name__)


@location_route.route('/')
def locations():
    locations = Location.query.all()
    return {'locations': [location.to_dict() for location in locations]}


@location_route.route('/<int:id>/')
def location(id):
    location = Location.query.get(id)
    return {'location': location.to_dict(), 'reviews': [item.to_dict() for item in location.review]}
