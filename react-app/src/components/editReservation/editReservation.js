import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReservationThunk } from "../../store/reservations";


function EditReservationForm ({reservationId, locationId, userId, setShowModal}) {
    const dispatch = useDispatch();
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
        console.log(startDate)
        const editedReservation = {
            id: reservationId,
            locationId: locationId,
            userId: userId,
            startDate: startDate,
            endDate: endDate,
        }
        dispatch(editReservationThunk(editedReservation))

        setShowModal(false)
        if (editedReservation) {
            // alert('Reservation has been updated')
        }
    }

    return (
        <>
            <div className='reservationEdit__div'>
                <form onSubmit={handleEdit} className='reservationEdit__form'>
                    <div>
                        <label htmlFor='startDate'>Enter a start date for your reservation:</label>
                        <input type='date' name='startDate' onChange={updateStartDate} required={true} value={startDate}></input>
                    </div>
                    <div>
                        <label htmlFor='endDate'>Enter a end date for your reservation:</label>
                        <input type='date' name='endDate' onChange={updateEndDate} required={true} value={endDate}></input>
                    </div>
                    <div>
                        <button type='submit'>Update Reservation</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default EditReservationForm
