import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReservationThunk } from "../../store/reservations";
import { useHistory } from "react-router";
import './editReservation.css'
// import { Redirect } from "react-router-dom";


const EditReservationForm = ({reservationId, locationId, userId }) => {
    // const sessionUser = useSelector(state => state.session.user)
    // const userReservation = useSelector(state => Object.values(state?.reservations))
    // const filteredReservation = userReservation.filter(reservationEdit => reservationEdit.id === +reservationId )

    const dispatch = useDispatch();
    const history = useHistory()

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const updateStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const updateEndDate = (e) => {
        setEndDate(e.target.value)
    }


    const handleEdit =  (e) => {
        e.preventDefault();
        // console.log(startDate)
        const editedReservation = {
            id: reservationId,
            locationId: locationId,
            userId: userId,
            startDate: startDate,
            endDate: endDate,
        }
        dispatch(editReservationThunk(editedReservation))
        alert('Reservation Updated Sucessfully')
        history.push(`/users/${userId}`)
        // return <Redirect push to={`/users/${userId}`} />;
        // if (data) {

        //     return
        // }

    }

    return (
        <>
            <div className='reservationEdit__div'>
                <form onSubmit={handleEdit} className='reservationEdit__form'>
                    <div className='resEdit__form__startDate'>
                        <label htmlFor='startDate'>Enter a start date for your reservation: </label>
                        <input type='date' name='startDate' onChange={updateStartDate} required={true} value={startDate}></input>
                    </div>
                    <div className='resEdit__form__endDate'>
                        <label htmlFor='endDate'>Enter a end date for your reservation: </label>
                        <input type='date' name='endDate' onChange={updateEndDate} required={true} value={endDate}></input>
                    </div>
                    <div className='resEdit__form__button'>
                        <button type='submit'>Update Reservation</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default EditReservationForm
