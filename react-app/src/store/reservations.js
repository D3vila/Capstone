const GET_ALL_RESERVATIONS = 'reservations/GET_ALL_RESERVATIONS'
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS'
const ADD_RESERVATION = 'reservation/ADD_RESERVATION'
const EDIT_RESERVATION = 'reservation/EDIT_RESERVATION'
const DELETE_RESERVATION = 'reservation/DELETE_RESERVATION'


const getAllReservations = (reservations) => {
    return {
        type: GET_ALL_RESERVATIONS,
        reservations
    }
}

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

const deleteReservation = (reservationId) => ({
    type: DELETE_RESERVATION,
    reservationId
})


export const allReservationThunk = () => async (dispatch) => {
    const response = await fetch('/api/reservation/')
    if (response.ok) {
        const reservations = await response.json()
        await dispatch(getAllReservations(reservations))
        return response
    }
}

export const getReservationsThunk = (userId) => async (dispatch) => {
    // console.log(userId)
    const response = await fetch(`/api/reservation/user/${userId}/`)
    // console.log(response)
    if (response.ok) {

        const reservations = await response.json()
        await dispatch(getReservations(reservations))

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

// EDIT THUNK
export const editReservationThunk = (reservation) => async (dispatch) => {
    // console.log('THUNK', reservation)
    const response = await fetch(`/api/reservation/${reservation.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    })

    if (response.ok) {
        const editedReservation = await response.json();
        console.log(editedReservation)
        dispatch(editReservation(editedReservation))
        return editedReservation
        // return response
    }

    // console.log("response", response)
    // console.log("editedReservation", editedReservation)

}
/////////????????????????????????????
export const deleteReservationThunk = (reservationId) => async (dispatch) => {
    const response = await fetch(`/api/reservation/user/${reservationId}/`, {
        method: 'DELETE',
    });
    if (response) {
        // const removedReservation = await response.json();
        dispatch(deleteReservation(reservationId))
        // console.log('THUNK', response)
        // return removedReservation;
        return response
    }
}

//-----------REDUCER----------------//

let initialState = {}

export default function reservations(state = initialState, action) {
    let newState;
    // if(!action) return state;
    switch (action.type) {

        case GET_ALL_RESERVATIONS: {
            const allReservations = {};
            action.reservations.reservations.forEach(reservation => {
                allReservations[reservation.id] = reservation;
            });
            newState = { ...allReservations }
            return newState
        }

        case GET_RESERVATIONS: {
            const allReservations = {};
            action.reservations.reservations?.forEach(reservation => {
                allReservations[reservation?.id] = reservation;
            })
            return allReservations;
        }

        case ADD_RESERVATION: {
            const newState = {
                ...state,
                [action.reservation?.id]: action.reservation
            }
            alert('Reservation created, go to profile page to see reservations')
            return newState;
        }

        case EDIT_RESERVATION: {
            const newState = {
                ...state,
                // reservation: { ...state.reservations, [action.reservations?.id]: action.reservations }
                [action.reservation?.id]: action.reservation

            };
            console.log("newState", newState)
            return newState
        }
        // {

        //     if (!state[action.reservations?.id]) {
        //     const newState = {
        //       ...state,
        //       [action.reservations?.id]: action.reservations
        //     };
        //     return newState;
        //   }
        //   return {
        //     ...state,
        //     [action.reservations?.id]: {
        //       ...action.reservations,
        //     }
        //   };
        // }

        case DELETE_RESERVATION: {
            // return { ...state, [action.id]: action.id }??????????
            newState = { ...state };
            delete newState[action.reservationId];
            // console.log('NEWSTATE', newState)

            return newState;
        }
        default:
            return state
    }
}
