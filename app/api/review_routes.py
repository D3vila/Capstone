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
    else:
        return {'errors': validation_errors(form.errors)}, 401


# PUT and Delete todo
