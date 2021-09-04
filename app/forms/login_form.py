from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('An account with this email does not exist')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('This account does not exist')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(
        'Enter your email'), Email(message='Email is invalid'), user_exists])
    password = StringField('password', validators=[
                           DataRequired('Enter your password'), password_matches])
