import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocations } from '../../store/locations'


function Locations() {
    const locations = useSelector((state) => Object.values(state.locations))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);


    return (
        <>
            <div>
                {locations.map(location => (
                    <div>
                        <a href={`/locations/${location.id}`} id={location.id}>
                            <h2>{location.name}</h2>
                            <img src={location.img1} className='splash__img' alt='locationPic' />
                        </a>
                    </div>
                ))}
            </div>


        </>

    )
}

export default Locations
