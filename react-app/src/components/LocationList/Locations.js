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
            <div className='locations__container'>
                {locations.map(location => (
                    <div className='box'>
                        <div className='imgBox'>
                            <img src={location.img1} className='splash__img' alt='locationPic'/>
                        </div>
                        <div className='details'>
                            <div className='content'>
                                <a href={`/locations/${location.id}`} id={location.id}>
                                    <h2>{location.name}</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>

    )
}

export default Locations
