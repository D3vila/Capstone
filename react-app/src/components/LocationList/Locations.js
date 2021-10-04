import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocations } from '../../store/locations';
import './Locations.css';


function Locations() {
    const locations = useSelector((state) => Object.values(state.locations))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);


    return (
        <>
            <h1 className='locations__title'>Travel to any movie location and time you want experience</h1>
            <div className='locations__container'>
                {locations.map(location => (
                    <div className='outerBox' key={Math.floor(Math.random() * 10000)}>
                        <div className='movieNameHeader'>
                            <h2>{location?.movieName}</h2>
                        </div>
                        <div className='box' key={Math.floor(Math.random() * 10000)}>
                            <a href={`/locations/${location.id}`}>
                                <div className='imgBox'>
                                    <img src={location?.img1} className='splash__img' alt='locationPic'/>
                                </div>
                                <div className='details'>
                                    <div className='content'>
                                        <h3>{location?.name}</h3>
                                        <h3>{location?.city}, {location?.state}</h3>
                                        <h3></h3>
                                        <h3>${location?.price}/day</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            <a className='backtoTop' href='#top'>Back to top</a>

        </>

    )
}

export default Locations
