from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


def email_format(form, field):
    # Checking if email is in email format
    email = field.data
    if email:
        raise Email('Not a valid Email.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    first_name = StringField('First Name')
    last_name = StringField('Last Name')
    email = StringField('email', validators=[
        DataRequired(), user_exists, Email()
    ])
    password = PasswordField('password', validators=[DataRequired()])
    profile_image = TextField('Picture URL')
