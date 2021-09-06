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
        <div className='reservationEditPage__div'>
            <h1 className='reservationEdit__titlePage'>Edit Reservation # {reservationId}</h1>
            {filteredReservation?.map((reservation) => (
                <div className='editReservation__container' key={reservationId}>
                    {/*<img className='reservation__pic' src={reservation?.location?.img3} alt='locationPic'></img>
                    <div className=''>{reservation?.location?.movieName}</div>
                    <div className=''>Time traveling to: {reservation?.location?.month}, {reservation?.location?.day} {reservation?.location?.year}</div>
            <div className=''>Location: {reservation?.location?.city}, {reservation?.location?.state} ({reservation?.location?.country})</div>*/}
                    <div>Reservation created on: {reservation.createdAt}</div>
                    <div>Location Id: {reservation.locationId}</div>
                    <div className='timeCircuit__div'>
                        <div className='_div_spacer'>
                        <div className='circuitBox box1'>
                            <div className='_div_'>
                                <p className='sticker__label'>MONTH</p>
                                <p className='circuitDisplay'>{reservation?.startDate.substring(7, 11)}</p>
                            </div>
                            <div className='_div_'>
                                <p className='sticker__label'>DAY</p>
                                <p className='circuitDisplay'>{reservation?.startDate.substring(5, 7)}</p>
                            </div>
                            <div className='_div_'>
                                <p className='sticker__label'>Year</p>
                                <p className='circuitDisplay'>{reservation?.startDate.substring(12, 16)}</p>
                            </div>
                            <p className='large__label'>Start date</p>
                            <div className='ciruitBox box2'>
                                <div className='_div_'>
                                    <p className='sticker__label'>MONTH</p>
                                    <p className='circuitDisplay'>{reservation?.endDate.substring(7, 11)}</p>
                                </div>
                                <div className='_div_'>
                                    <p className='sticker__label'>DAY</p>
                                    <p className='circuitDisplay'>{reservation?.endDate.substring(5, 7)}</p>
                                </div>
                                <div className='_div_'>
                                    <p className='sticker__label'>Year</p>
                                    <p className='circuitDisplay'>{reservation?.endDate.substring(12, 16)}</p>
                                </div>
                                <p className='large__label'>End DATE</p>
                            </div>
                            <div className='_div_1'>
                                <p className='large__label'>Location Id: {reservation.locationId}</p>
                                <p className='large__label'>User Id: {reservation.userId}</p>
                            </div>

                                <div className=''>Start Date: {reservation?.startDate.substring(0, 17)}</div>
                                <div className=''>End Date: {reservation?.endDate.substring(0, 17)}</div>
                        </div>
                        </div>
                    </div>
                    <EditReservationForm reservationId={reservationId} locationId={reservation?.locationId} userId={sessionUser.id}/>
                </div>
            ))}


        </div>
    )



}
export default EditReservationPage;
