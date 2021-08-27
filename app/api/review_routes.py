from flask import Blueprint, request
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_route = Blueprint('review', __name__)


def validation_errors(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_route.route('/', methods=['POST'])
def postReview():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(userId=data['userId'],
                            locationId=data['locationId'],
                            review=data['review'])
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'error': 'WRROONNGOO'}
    # else:
    #     return {'errors': validation_errors(form.errors)}, 401


@review_route.route('/<int:id>/', methods=['PUT'])
def editReview(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        oldReview = Review.query.get(id)
        form.populate_obj(oldReview)

        db.session.commit()

        return oldReview.to_dict()
    return {'error': 'still wrong'}


@review_route.route('/<int:id>/', methods=['DELETE'])
def deleteReview(id):

    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()

    return review.to_dict()
