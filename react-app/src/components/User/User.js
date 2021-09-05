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
  // console.log(userReservation)
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

  return (
    <>
      <ul className='userProfile__info' key={user?.id}>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>User Name</strong> {user?.username}
          {/*<strong>Username</strong> {profileUser.username}*/}
        </li>
        <li>
          <strong>first Name</strong> {user?.first_name}
        </li>
        <li>
          <strong>Last Name</strong> {user?.last_name}
        </li>
        <li>
          <img src={user?.profile_image} className='profilePic' alt='profilePic' />
        </li>
      </ul>
      <div className='reservation__div'>
        <h2>Your Reservations</h2>
        {userReservation?.map((reservation) => (
          <div className='reservation__container' key={Math.floor(Math.random() * 1000)}>
            <a href={`/locations/${reservation?.locationId}`}>
              <img className='reservation__pic' src={reservation?.location?.img2} alt='locationPic'></img>
            </a>
            <div className=''>{reservation?.location?.movieName}</div>
            <div className=''>Time traveling to: {reservation?.location?.month}, {reservation?.location?.day} {reservation?.location?.year}</div>
            <div className=''>Location: {reservation?.location?.city}, {reservation?.location?.state} ({reservation?.location?.country})</div>
            <div className=''>Start Date: {reservation?.startDate.substring(0, 17)}</div>
            <div className=''>End Date: {reservation?.endDate.substring(0, 17)}</div>
            <div className=''>Price: ${reservation?.location?.price}</div>
            <div className=''>
              <DeleteReservationModal reservationId={reservation?.id} />
              <a href={`/edit-reservation/${reservation?.id}`}>
                <i className="fas fa-edit"></i>
              </a>
              {/*<EditReservationModal reservationId={reservation?.id} locationId={reservation?.locationId} userId={reservation?.userId} />*/}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
export default User;
