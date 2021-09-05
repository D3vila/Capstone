import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReservationsThunk } from '../../store/reservations'
import DeleteReservationModal from '../deleteReservation';
// import EditReservationModal from '../editReservation';

import './User.css'

function User() {
  const [user, setUser] = useState({});

  // const [endDate, setEndDate] = useState({})

  const dispatch = useDispatch()
  const { userId } = useParams();
  // const profileUser = useSelector(state => state.session.user)
  const userReservation = useSelector(state => Object.values(state?.reservations))
  // const locations = useSelector((state) => Object.values(state.locations))
  // console.log(userReservation.length)
  // const endingDays = userReservation.map(x => x.endDate)

  // useEffect(()=> {

  // })

  useEffect(() => {
    dispatch(getReservationsThunk(userId));
  }, [dispatch, userId])

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  let sessionReservation;
  if (userReservation.length) {
    sessionReservation = (
      <>
        {userReservation?.map((reservation) => (
          <div className='reservation__container' key={Math.floor(Math.random() * 1000)}>
            <a href={`/locations/${reservation?.locationId}`}>
              <img className='reservation__pic' src={reservation?.location?.img2} alt='locationPic'></img>
            </a>
            <div className='movieName__res'>{reservation?.location?.movieName}</div>
            <div className='timeTravel__res'>Time traveling to: {reservation?.location?.month}, {reservation?.location?.day} {reservation?.location?.year}</div>
            <div className='location__res'>Location: {reservation?.location?.city}, {reservation?.location?.state} ({reservation?.location?.country})</div>
            <div className='startDate__res'>Start Date: {reservation?.startDate.substring(0, 17)}</div>
            <div className='endDate__res'>End Date: {reservation?.endDate.substring(0, 17)}</div>
            <div className='price__res'>Price: ${reservation?.location?.price}</div>
            <div className='editDelete__res'>
              <DeleteReservationModal reservationId={reservation?.id} />
              <a href={`/edit-reservation/${reservation?.id}`}>
                <i className="fas fa-edit"></i>
              </a>
              {/*<EditReservationModal reservationId={reservation?.id} locationId={reservation?.locationId} userId={reservation?.userId} />*/}
            </div>

          </div>
        ))}
      </>
    )
  } else {
    sessionReservation = (
      <>
        <h1 className='noReservation'>- You Have No Reservations! -</h1>
      </>
    )
  }

  return (
    <>
      <div className='profile__container'>
        <div className='userProfile__info' key={user?.id}>
          <div className='profile__pic__container'>
            <img src={user?.profile_image} className='profilePic' alt='profilePic' />
          </div>
          <div className='userId__container'>
            <strong className='strong'>User Id: </strong> {userId}
          </div>
          <div className='userName__container'>
            <strong className='strong'>User Name: </strong> {user?.username}
            {/*<strong>Username</strong> {profileUser.username}*/}
          </div>
          <div className='firstName__container'>
            <strong className='strong'>first Name: </strong> {user?.first_name}
          </div>
          <div className='lastName__container'>
            <strong className='strong'>Last Name: </strong> {user?.last_name}
          </div>
        </div>
        <div className='reservation__div'>
          <h2 className='reservationTitle'>Your Reservations</h2>
          {sessionReservation}
        </div>
        <div>
        </div>
      </div>
      <a className='backtoTop' href='#top'>Back to top</a>
    </>
  );
}
export default User;
