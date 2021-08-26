const GET_LOCATIONS = 'locations/GET_LOCATIONS'
const ONE_LOCATION = 'location/ONE_LOCATION'

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

const initialState = {}

//----------REDUCER-------------//

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

        default:
            return state
    }
}
