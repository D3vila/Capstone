import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { addReservationThunk } from '../../store/reservations';
import './addReservation.css'


const ReservationForm = ({user, location}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    // const [errors, setErrors] = useState([])
    // const [locationId, setLocationId] = useState('')
    // const [userId, setUserId] = useState('')

    // const user = useSelector(state => state.session.user)
    // const location = useSelector((state) => state.locations)
    // console.log(user)

    // const userId = user.id

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    const updateStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const updateEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const addReservation = {
            // locationId: location.location.id,
            locationId: +location,
            userId: user.id,
            startDate,
            endDate
        };
        dispatch(addReservationThunk(addReservation))
        alert('Reservation Successful')
        history.push(`/users/${sessionUser.id}`)

    }

    return (
        <div className='addReservation__div'>
            <form onSubmit={handleSubmit}>
                <div className='startDate__div'>
                    <label htmlFor='startDate'>Enter a start date for your reservation:</label>
                    <input type='date' name='startDate' onChange={updateStartDate} required={true} value={startDate}></input>
                </div>
                <div className='endDate__div'>
                    <label htmlFor='endDate'>Enter a end date for your reservation:</label>
                    <input type='date' name='endDate' onChange={updateEndDate} required={true} value={endDate}></input>
                </div>
                <div className='addReservation__button'>
                    <button type='submit'>Reserve</button>
                </div>
            </form>

        </div>
    )

}

export default ReservationForm
