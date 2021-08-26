from app.models import db, Review
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    seedArray = []

    seedArray.append(Review(userId=1 , locationId=1 , review="This place was crappy", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=2 , review="I love this place!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=1 , review="Had a free sunday and took a trip and it was worth it", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=10 , review="I love this movie and had to see it in real life", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=9 , review="as soon as we hit 88mph, I was having a blast!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=1, review="Don't go to this place it is not fun!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=3 , review="I would like to visit this place as much as I can", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=1 , review="Greatest experience ever!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=2 , review="Greatest experience ever!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=8 , review="Greatest experience ever!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=7 , review="Greatest experience ever!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=1, review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=2 , review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=3 , review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=4 , review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=5 , review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=6 , review="I think I want to bring my friend with me next time", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=1 , review="Hated this place, do not go!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=2 , review="Hated this place, do not go!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=7 , review="Hated this place, do not go!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=8 , review="Hated this place, do not go!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=9 , review="Hated this place, do not go!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=1 , review="way different in person, Great!!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=2 , review="way different in person, Great!!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1, locationId=10 , review="way different in person, Great!!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=11 , review="way different in person, Great!!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=12 , review="way different in person, Great!!", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=1 , review="Thumbs down, it was depressing", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=2 , locationId=2 , review="Thumbs down, it was depressing", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=3 , locationId=13 , review="Thumbs down, it was depressing", createdAt=datetime.now(), updatedAt=datetime.now()))
    seedArray.append(Review(userId=1 , locationId=14 , review="Thumbs down, it was depressing", createdAt=datetime.now(), updatedAt=datetime.now()))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
