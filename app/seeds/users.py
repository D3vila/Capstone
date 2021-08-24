from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', first_name='Marty', last_name='McFly', email='demo@aa.io', password='password', profile_image='https://static.wikia.nocookie.net/bttf/images/e/e5/Martyvest1955.jpg/revision/latest/scale-to-width-down/250?cb=20110112223247')
    marnie = User(
        username='DocB88', first_name='Emmett', last_name='Brown', email='docB@aa.io', password='password', profile_image='https://static.wikia.nocookie.net/bttf/images/6/6a/DocBrown.jpg/revision/latest/scale-to-width-down/250?cb=20111013141923')
    bobbie = User(
        username='Lorraine38', first_name='Lorraine', last_name='McFly', email='lorraine@aa.io', password='password', profile_image='https://static.wikia.nocookie.net/bttf/images/b/b0/Lorraine_1955.JPG/revision/latest/scale-to-width-down/150?cb=20071026005229')

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
