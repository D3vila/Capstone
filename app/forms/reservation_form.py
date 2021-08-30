from flask_wtf import FlaskForm
from sqlalchemy.sql.schema import PrimaryKeyConstraint
from wtforms import IntegerField, SubmitField
from wtforms.fields.core import DateField
from wtforms.validators import DataRequired


v = [DataRequired()]


class ReservationForm(FlaskForm):
    locationId = IntegerField('locationId', v)
    userId = IntegerField('userId', v)
    startDate = DateField('startDate', v)
    endDate = DateField('startDate', v)
    price = IntegerField('price')
    days = IntegerField('days')
    submit = SubmitField('Submit')
