const GET_LOCATIONS = 'locations/GET_LOCATIONS'
const ONE_LOCATION = 'location/ONE_LOCATION'

const ADD_REVIEW = 'review/ADD_REVIEW';
const DELETE_REVIEW = 'review/DELETE_REVIEW';
const EDIT_REVIEW = 'review/DELETE_REVIEW';

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
        const newReview = await response
        dispatch(addReview(newReview))
    }
    return response
}


//----------REDUCER-------------//
const initialState = {}

export default function locations(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_LOCATIONS: {
            const allLocations = {};
            action.locations.locations.forEach(location => {
                allLocations[location.id] = location;
            });
            newState = { ...allLocations }
            return newState;
        }

        case ONE_LOCATION: {
            newState = Object.assign({}, state);
            newState = action.location;
            return newState
        }

        case ADD_REVIEW: {
            newState = {...state};
            newState.reviews.push(action.review);
            alert('Review posted')
            return newState;
        }

        default:
            return state
    }
}
