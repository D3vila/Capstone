import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteReservationThunk } from '../../store/reservations';


function DeleteReservation({id, setShowModal}) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        const success = dispatch(deleteReservationThunk(id));
        if (success) {
            e.preventDefault();
            setShowModal(false);
        } else {
            alert('error try again')
        }
    }
    const handleCancel = ((e) => {
        e.preventDefault();
        setShowModal(false)
    });

    return (
        <div>
            <div>
                <p>Do you want to cancel this reservation?</p>
            </div>
            <div>
                <button className='deleteReservation__button' onClick={handleDelete}>Delete</button>
                <button className='cancelDelete__button' onClick={handleCancel}>Cancel</button>
            </div>

        </div>

    )

}

export default DeleteReservation
