const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS'
const ADD_RESERVATION = 'reservation/ADD_RESERVATION'
const EDIT_RESERVATION = 'reservation/EDIT_RESERVATION'
const DELETE_RESERVATION = 'reservation/DELETE_RESERVATION'

const getReservations = (reservations) => {
    return {
        type: GET_RESERVATIONS,
        reservations
    }
}

const addReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation
})

const editReservation = (reservation) => ({
    type: EDIT_RESERVATION,
    reservation
})

const deleteReview = (reservation) => ({
    type: DELETE_RESERVATION,
    reservation
})

export const getReservationsThunk = (userId) => async (dispatch) => {
    // console.log(userId)
    const response = await fetch(`/api/reservation/user/${userId}/`)
    // console.log(response)
    if (response.ok) {

        const reservations = await response.json()
        await dispatch(getReservations(reservations))
        // console.log('GET_THUNK', reservations)
        return response
    }
}

export const addReservationThunk = (reservation) => async (dispatch) => {
    const response = await fetch(`/api/reservation/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    if (response.ok) {
        const newReservation = await response.json()
        dispatch(addReservation(newReservation))
    }
    return response
}


export const editReservationThunk = (reservation) => async (dispatch) => {
    const response = await fetch(`/api/reservation/${reservation.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })
    if (response.ok) {
        const editedReservation = await response.json();
        dispatch(editReservation(editedReservation))
    }
    return response
}

export const deleteReservationThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/reservation/${id}/`, {
        method: 'DELETE',
    });
    if (response.ok) {
        const removedReservation = await response.json();
        dispatch(deleteReview(removedReservation))
        return removedReservation;
    }
}

//-----------REDUCER----------------//

let initialState = {}

export default function reservations(state = initialState, action) {
    if(!action) return state;
    switch (action.type) {

        case GET_RESERVATIONS: {
            const allReservations = {};
            action.reservations.reservations.forEach(reservation => {
                allReservations[reservation.userId] = reservation;
            })
            return allReservations;
        }

        case ADD_RESERVATION: {
            const newState = {
                ...state,
                [action.reservations?.id]: action.reservations
            }
            return newState;
        }

        case EDIT_RESERVATION: {
            const newState = {
                ...state,
                [action.reservations.id]: action.reservations
            };
            return newState
        }

        case DELETE_RESERVATION: {
            const newState = {...state};
            delete newState[action.reservations];
            return newState;
        }
        default:
            return state
    }
}
