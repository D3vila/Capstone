from flask import Blueprint, request
from app.models import Reservation, Location, Review, User, db
from app.forms.reservation_form import ReservationForm

reservation_route = Blueprint('reservation', __name__)


def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages




# @reservation_route.route('/', methods=['GET'])
# def getAll_reservations():
#     reservations_query = Reservation.query.all()
#     reservations = [reservation.to_dict() for reservation in reservations_query]
#     for reservation in reservations:
#         reservation['location'] = Location.query.get(
#             reservation['locationId']).to_dict()
    # for location in reservations:
    #     location['reviews'] = Review.query.get(
    #         location['userId']).to_dict()
    # return {'reservations': location}
    # return {'reservations': [reservation.to_dict() for reservation in reservations]}


@reservation_route.route('/user/<int:userId>/', methods=['GET'])
def get_reservation_by_userId(userId):
    reservations_query = Reservation.query.filter_by(userId=userId).all()
    reservations = [reservation.to_dict() for reservation in reservations_query]
    for reservation in reservations:
        reservation['location'] = Location.query.get(reservation['locationId']).to_dict()
    return {'reservations': reservations}

    # return {'reservations': [reservation.to_dict() for reservation in reservations]}


@reservation_route.route('/', methods=['GET', 'POST'])
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
        # return {'message': "let's go to the FUTURE!"}
        return new_reservation.to_dict()
    errors = form.errors
    return {'errors': validation_errors(errors)}, 401
    # return {'errors': validation_errors(form.errors)}, 401


@reservation_route.route('/<int:id>/', methods=['PUT'])
def edit_reservation(id):
    # data = request.json
    # reservation = Reservation.query.get(id)
    # reservation.locationId = data['locationId']
    # reservation.userId = data['userId']
    # reservation.startDate = data['startDate']
    # reservation.endDate = data['endDate']
    # reservation.price = data['price']
    # reservation.days = data['days']

    # db.session.commit()
    # reservation_dict = reservation.to_dict()
    # return {**reservation_dict}
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        oldReservation = Reservation.query.get(id)
        form.populate_obj(oldReservation)
        db .session.commit()

        return oldReservation.to_dict()
    return {'errors': validation_errors(form.errors)}, 401


@reservation_route.route('/user/<int:id>/', methods=['DELETE'])
def deleteReservation(id):
    reservation = Reservation.query.get(id)
    db.session.delete(reservation)
    db.session.commit()

    return reservation.to_dict()
    # return {'location': reservation.locationId }
