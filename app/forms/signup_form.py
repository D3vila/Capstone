from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextField
from flask_wtf.file import FileAllowed
from wtforms import validators
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo
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
        'username', validators=[DataRequired('Username is required'), Length(min=3, max=40, message='Username must be between 3 and 40 characters'), username_exists])
    first_name = StringField('First Name', validators=[DataRequired('First name is required'), Length(min=2, max=40, message='First name must be between 2 and 40 characters')])
    last_name = StringField('Last Name', validators=[DataRequired('Last name is required'), Length(min=2, max=40, message='Last name must be between 2 and 40 characters')])
    email = StringField('email', validators=[
        DataRequired('Email is required'), user_exists, Email(message='Email is invalid'),
        Length(max=255, message='Email must be between 1 and 255 characters')
    ])
    password = PasswordField('password', validators=[DataRequired('Password is required'), Length(min=6, message='Password must be at least 6 characters'), EqualTo('password', message='Passwords do not match')])
    profile_image = TextField('profile_image', validators=[FileAllowed(['png', 'jpg', 'jpeg'])])
