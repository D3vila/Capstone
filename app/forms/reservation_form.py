from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, DateField
from wtforms.fields.simple import HiddenField
from wtforms.validators import DataRequired
# from wtforms.fields.html5 import DateTimeLocalField


v = [DataRequired()]


class ReservationForm(FlaskForm):
    locationId = IntegerField('locationId', v)
    userId = IntegerField('userId', v)
    startDate = DateField('startDate', validators=[
                          DataRequired(message='Enter a start date')])
    endDate = DateField('endDate', validators=[
                        DataRequired(message='Enter a end date')])
    price = IntegerField('price')
    days = IntegerField('days')
    submit = SubmitField('Submit')
