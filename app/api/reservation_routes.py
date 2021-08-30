from flask import Blueprint, request
from app.models import Reservation, db
# from app.forms.review_form import ReviewForm

reservation_route = Blueprint('reservation', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@reservation_route.route('/<int:userId>', methods=['GET'])
def get_reservation_by_userId(userId):
    reservations = Reservation.query.filter_by(userId=userId).all()
    return {'reservations': [reservation.to_dict() for reservation in reservations]}


@reservation_route.route('/', methods=['POST'])
def createReservation():
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_reservation = Reservation(locationId=data['locationId'],
                                      userId=data['userId'],
                                      startDate=data['startDate'],
                                      endDate=data['endDate'],
                                      price=data['price'],
                                      days=data['days'])
        db.session.add(new_reservation)
        db.session.commit()
        return new_reservation.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @reservation_route.route('/<int:id>', methods=['PUT'])
