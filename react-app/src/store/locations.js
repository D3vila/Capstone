const GET_LOCATIONS = 'locations/GET_LOCATIONS'
const ONE_LOCATION = 'location/ONE_LOCATION'

const ADD_REVIEW = 'review/ADD_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const EDIT_REVIEW = 'review/EDIT_REVIEW';

const loadLocations = (locations) => {
    return {
        type: GET_LOCATIONS,
        locations
    }
}

const getLocation = (location) => {
    return {
        type: ONE_LOCATION,
        location
    }
}

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})

const deleteReview = (review) => ({
    type: DELETE_REVIEW,
    review
})

//--------Location THUNKS--------//
export const getLocations = () => async (dispatch) => {
    const response = await fetch('/api/location/')

    if (response.ok) {
        const locations = await response.json()
        await dispatch(loadLocations(locations))
        return response
    }
}

export const getOneLocation = (locationId) => async (dispatch) => {
    const response = await fetch(`/api/location/${locationId}/`)
    if (response.ok) {
        const location = await response.json()
        await dispatch(getLocation(location))
        return response
    }
}

//------------REVIEW THUNKS -----------//

export const createReviewThunk = review => async (dispatch) => {
    const response = await fetch(`/api/review/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const newReview = await response.json()
        dispatch(addReview(newReview))
    }
    // console.log("CreateThunk", response)
    return response
}

export const editReviewThunk = (review) => async (dispatch) => {
    const response = await fetch(`/api/review/${review.id}/`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const editedReview = await response.json();
        dispatch(editReview(editedReview))

    }
    // console.log('editThunk', response)
    return response
}

export const deleteReviewThunk = id => async (dispatch) => {
    // console.log(id)
    const response = await fetch(`/api/review/${id}/`, {
        method: "DELETE",
    });

    if (response.ok) {
        const removedReview = await response.json();
        dispatch(deleteReview(removedReview))
        console.log('deleteThunk', removedReview)
        // await response.json();
        // dispatch(deleteReview(id))
        return removedReview
    }
    console.log('deleteThunk', response)
    // return response
}

//----------REDUCER-------------//
const initialState = {}

export default function locations(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_LOCATIONS: {
            const allLocations = {};
            action.locations.locations?.forEach(location => {
                allLocations[location.id] = location;
            });
            newState = { ...allLocations }
            return newState;
        }

        case ONE_LOCATION: {
            // newState = Object.assign({}, state);
            newState = { ...state };
            newState = action.location;
            return newState;
        }

        case ADD_REVIEW: {
            newState = { ...state }

            // const newState = { ...state, [action.review?.id]: action.review };
            // newState[action.review.id] = action.review
            newState.reviews?.push(action.review);
            // console.log("CreateReducer", newState)
            alert('Review posted')
            return newState;
        }

        case EDIT_REVIEW: {
            newState = { ...state };
            // console.log(newState)
            for (let i = 0; i < newState.reviews.length; i++) {
                if (newState.reviews[i] && (newState.reviews[i].id === action.review.id))
                    newState.reviews[i] = action.review
            }
            alert('Review edited successfully')
            // console.log('editReducer', newState)
            return newState;
        }

        case DELETE_REVIEW: {
            newState = { ...state };
            console.log('NEWSTATE', newState)
            for (let i = 0; i < newState.reviews.length; i++) {
                if (newState.reviews[i] && (newState.reviews[i].id === action.review.id)) {
                    delete newState.reviews[i];
                    console.log('reducer', newState)
                }
                // alert('Review Deleted')
                // return newState;
            }
            alert('Review Deleted')
            console.log('REDUCER', newState)
            return newState;
        }

        default:
            return state
    }
}
