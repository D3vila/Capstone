from app.models import db, Reservation
from datetime import date
from datetime import datetime


def seed_reservations():
    seedArray = []

    seedArray.append(Reservation(locationId=1, userId=1, startDate=datetime(2021, 12, 25), endDate=datetime(2021, 12, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=2, userId=2, startDate=datetime(2021, 12, 25), endDate=datetime(2021, 12, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=3, userId=3, startDate=datetime(2021, 12, 25), endDate=datetime(2021, 12, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=4, userId=1, startDate=datetime(2021, 11, 25), endDate=datetime(2021, 11, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=5, userId=2, startDate=datetime(2021, 11, 25), endDate=datetime(2021, 11, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=6, userId=3, startDate=datetime(2021, 11, 25), endDate=datetime(2021, 11, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=7, userId=1, startDate=datetime(2021, 10, 25), endDate=datetime(2021, 10, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=8, userId=2, startDate=datetime(2021, 10, 25), endDate=datetime(2021, 10, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=9, userId=3, startDate=datetime(2021, 10, 25), endDate=datetime(2021, 10, 26), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=10, userId=1, startDate=datetime(2021, 10, 6), endDate=datetime(2021, 10, 7), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))
    seedArray.append(Reservation(locationId=11, userId=2, startDate=datetime(2021, 10, 6), endDate=datetime(2021, 10, 7), createdAt=datetime.now(), updatedAt=datetime.now(), days=1))

    for item in seedArray:
        db.session.add(item)
    db.session.commit()


def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
