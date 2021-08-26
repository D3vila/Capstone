from flask import Blueprint, request
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_route = Blueprint('review', __name__)


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
    return {'error': 'WROONNGO'}


# PUT and Delete todo
