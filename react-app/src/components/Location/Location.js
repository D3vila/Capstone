import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation } from '../../store/locations'
import { useParams } from 'react-router-dom';


function Location() {
    const location = useSelector((state) => state.locations)
    const dispatch = useDispatch()
    const { locationId } = useParams();
    console.log(location.reviews)

    useEffect(() => {
        dispatch(getOneLocation(locationId))
    }, [dispatch, locationId]);

    function locationListing() {
        if (location.location) {
            return (
                <>
                    <div>
                        <div>
                            {<h1>{location.location.name}</h1>}
                        </div>
                        <div>
                            <img src={location.location.img4} alt='locationPic'/>
                            <img src={location.location.img3} alt='locationPic'/>
                            <img src={location.location.img2} alt='locationPic'/>
                            <img src={location.location.img1} alt='locationPic'/>
                        </div>
                        <div>
                            <h3>{location.location.description}</h3>
                        </div>
                        <div>

                        </div>
                        <div>
                            <h1>Reviews</h1>
                            {location.reviews && location.reviews.map(review => (
                                <div>
                                    <div>User: {review.userId}</div>
                                    <div>{review.createdAt}</div>
                                    <div>{review.review}</div>
                                </div>
                            ))}
                        </div>

                    </div>

                </>

            )

        }
    }
    return (
        <>
            <div>
                {locationListing()}
            </div>
        </>
    )

}

export default Location;
