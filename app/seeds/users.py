from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', first_name='Marty', last_name='McFly', email='demo@aa.io', password='password', profile_image='https://www.looper.com/img/gallery/marty-mcflys-entire-backstory-explained/intro-1595526400.jpg')
    marnie = User(
        username='DocB88', first_name='Emmett', last_name='Brown', email='docB@aa.io', password='password', profile_image='https://i.pinimg.com/originals/14/75/5b/14755b40b2480d313b10a865bb273b25.jpg')
    bobbie = User(
        username='Lorraine38', first_name='Lorraine', last_name='McFly', email='lorraine@aa.io', password='password', profile_image='https://i.pinimg.com/originals/6d/06/9e/6d069e4854c9afdeab5f703c2b8e5681.jpg')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
