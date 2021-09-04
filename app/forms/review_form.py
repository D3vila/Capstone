from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SubmitField
from wtforms.validators import DataRequired, InputRequired


v = [InputRequired()]


class ReviewForm(FlaskForm):
    userId = IntegerField('userId')
    locationId = IntegerField('locationId')
    review = TextField('review', validators=[DataRequired('Write in your review')])
    submit = SubmitField('Submit')
