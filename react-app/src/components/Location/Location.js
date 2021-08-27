import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation } from '../../store/locations'
import { useParams } from 'react-router-dom';
import AddReviewForm from '../addReview/addReviewForm';


function Location() {
    const location = useSelector((state) => state.locations)
    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch()
    const { locationId } = useParams();
    // console.log(location.reviews)

    useEffect(() => {
        dispatch(getOneLocation(locationId))
    }, [dispatch, locationId]);

    let sessionReview;

    if (sessionUser) {
        sessionReview = (
            <>
                <AddReviewForm />
            </>
        )
    } else {
        sessionReview = (
            <>
                <h2>Login to leave a comment</h2>
            </>
        )
    }


    return (
        <>
            <div>
                <div>
                    {<h1>{location.location?.name}</h1>}
                </div>
                <div>
                    <img src={location.location?.img4} alt='locationPic' />
                    <img src={location.location?.img3} alt='locationPic' />
                    <img src={location.location?.img2} alt='locationPic' />
                    <img src={location.location?.img1} alt='locationPic' />
                </div>
                <div>
                    <h3>{location.location?.description}</h3>
                </div>
                <div>

                </div>
                <div>
                    <h1>Reviews</h1>
                    {sessionReview}
                    {location.reviews?.map(review => (
                        <div key={review.id}>
                            <div>User: {review?.userId}</div>
                            <div>{review?.createdAt}</div>
                            <div>{review?.review}</div>
                        </div>
                    ))}
                </div>

            </div>

        </>

    )

}

export default Location;
