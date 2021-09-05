import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import EditReservationForm from "./editReservation";
import { getReservationsThunk } from '../../store/reservations'
import './editReservation.css'


function EditReservationPage() {
    const dispatch = useDispatch();
    const { reservationId } = useParams();

    const sessionUser = useSelector(state => state.session.user)
    // const editLocation = useSelector((state) => state.locations)
    // const filteredLocation = editLocation.filter(location => location.id === )

    const userReservation = useSelector(state => Object.values(state?.reservations))
    const filteredReservation = userReservation.filter(reservationEdit => reservationEdit.id === +reservationId )
    // console.log(filteredReservation)

    useEffect(() => {
        dispatch(getReservationsThunk(sessionUser.id));
    }, [dispatch, sessionUser.id])



    return (
        <>
            <h1>Edit Reservation # {reservationId}</h1>
            {filteredReservation?.map((reservation) => (
                <div className='editReservation__container' key={reservationId}>
                    {/*<img className='reservation__pic' src={reservation?.location?.img3} alt='locationPic'></img>
                    <div className=''>{reservation?.location?.movieName}</div>
                    <div className=''>Time traveling to: {reservation?.location?.month}, {reservation?.location?.day} {reservation?.location?.year}</div>
            <div className=''>Location: {reservation?.location?.city}, {reservation?.location?.state} ({reservation?.location?.country})</div>*/}
                    <div>Reservation created on: {reservation.createdAt}</div>
                    <div>Location Id: {reservation.locationId}</div>
                    <div className=''>Start Date: {reservation?.startDate.substring(0, 17)}</div>
                    <div className=''>End Date: {reservation?.endDate.substring(0, 17)}</div>
                    <EditReservationForm reservationId={reservationId} locationId={reservation?.locationId} userId={sessionUser.id}/>
                </div>
            ))}


        </>
    )



}
export default EditReservationPage;
