import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReservationsThunk } from '../../store/reservations'
import DeleteReservationModal from '../deleteReservation';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch()
  const { userId } = useParams();
  // const profileUser = useSelector(state => state.session.user)
  const userReservation = useSelector(state => Object.values(state.reservations))
  // const locations = useSelector((state) => Object.values(state.locations))
  // console.log(userReservation.length)

  useEffect(() => {
    dispatch(getReservationsThunk(userId));
  }, [dispatch, userId, userReservation.length])

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
      <ul className='userProfile__info'>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>User Name</strong> {user.username}
          {/*<strong>Username</strong> {profileUser.username}*/}
        </li>
        <li>
          <strong>first Name</strong> {user.first_name}
        </li>
        <li>
          <strong>Last Name</strong> {user.last_name}
        </li>
        <li>
          <img src={user.profile_image} className='profilePic' alt='profilePic' />
        </li>
      </ul>
      <div className='reservation__div'>
        <h2>Your Reservations</h2>
        {userReservation?.map(reservation => (
          <div key={reservation.id}>
            <div>{reservation.location?.movieName}</div>
            <div>Location: {reservation.location?.city}, {reservation.location?.state} ({reservation.location?.country})</div>
            <div>Time traveling to: {reservation.location?.month}, {reservation.location?.day} {reservation.location?.year}</div>
            <img src={reservation.location?.img1} className='resPic' alt='resPic'/>
            <div>Start Date: {reservation?.startDate}</div>
            <div>End Date: {reservation?.endDate}</div>
            <div>Price: ${reservation.location?.price}</div>
            <div>
              <DeleteReservationModal id={reservation?.id}/>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
export default User;
