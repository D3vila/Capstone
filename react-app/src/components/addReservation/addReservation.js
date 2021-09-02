import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservationThunk } from '../../store/reservations';


const ReservationForm = () => {
    const sessionUser = useSelector(state => state.session.user)

    const [errors, setErrors] = useState([])
    const [locationI]
}
