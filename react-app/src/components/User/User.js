import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteReservationThunk, getReservationsThunk } from '../../store/reservations'

function User() {
  // const [user, setUser] = useState({});
  const dispatch = useDispatch()
  const { userId } = useParams();
  const profileUser = useSelector(state => state.session.user)
  const userReservation = useSelector(state => Object.values(state.reservations))
  // const locations = useSelector((state) => Object.values(state.locations))
  // console.log(userReservation)

  useEffect(() => {
    dispatch(getReservationsThunk(userId));
  }, [dispatch, userId])

  function handleDeleteReservation(e, reservationToDelete) {
    e.preventDefault();
    return dispatch(deleteReservationThunk(reservationToDelete))
      .catch (async (res) => {
        await res.json();
    });
  }

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (!user) {
  //   return null;
  // }

  return (
    <>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {profileUser.username}
        </li>
        <li>
          <strong>first Name</strong> {profileUser.first_name}
        </li>
        <li>
          <strong>Last Name</strong> {profileUser.last_name}
        </li>
        <li>
          <img src={profileUser.profile_image} className='profilePic' alt='profilePic' />
        </li>
      </ul>
      <div>
        <h2>Your Reservations</h2>
        {userReservation.map(reservation => (
          <div key={reservation.id}>
            <div>{reservation.startDate}</div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default User;
