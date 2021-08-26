from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SubmitField
from wtforms.validators import DataRequired


v = [DataRequired()]


class ReviewForm(FlaskForm):
    userId = IntegerField('userId')
    locationId = IntegerField('locationId')
    review = TextField('review', v)
    submit = SubmitField('Submit')
