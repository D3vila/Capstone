import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation } from '../../store/locations';
import './HomePage.css';


function HomePage () {
    const location = useSelector((state) => state.locations)

    const randomNumber = Math.floor(Math.random() * 15) + 1

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneLocation(randomNumber))
    }, [dispatch, randomNumber]);

    return (
        <>
            <h1>Featured location</h1>
            <div className='movieName__div'>
                <div>
                {location.location?.movieName}
                </div>
                <div>
                {location.location?.name}
                </div>
                <div>
                {location.location?.state}
                </div>
                <div>
                {location.location?.year}
                </div>
            </div>
        </>
    )
}

export default HomePage
