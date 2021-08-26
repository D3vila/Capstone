const GET_LOCATIONS = 'locations/GET_LOCATIONS'

const loadLocations = (locations) => {
    return {
        type: GET_LOCATIONS,
        locations
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
        default:
            return state
    }
}
