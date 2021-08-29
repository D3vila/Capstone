import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation, deleteReviewThunk } from '../../store/locations'
import { useParams } from 'react-router-dom';
import AddReviewForm from '../addReview/addReviewForm';
import EditReviewForm from '../editReview/editReview';
import './Location.css';


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

    function handleDeleteReview(e, reviewIdToDelete) {
        e.preventDefault();
        return dispatch(deleteReviewThunk(reviewIdToDelete))
            .catch(async (res) => {
                await res.json();
            });
    }

    function userReviewOptions(sessionUser, review) {
        if (sessionUser && (sessionUser.id === review.userId)) {
            return (
                <>
                    <EditReviewForm review={review} />
                    <button onClick={(e) => handleDeleteReview(e, review.id)}>Delete</button>
                </>
            )
        }
    }

    function locationDescription() {
        return (
            <>
                <div className='locationPic__div'>
                    <div className='slides'>
                        <input type='radio' name='r' id='r1' defaultChecked />
                        <input type='radio' name='r' id='r2' />
                        <input type='radio' name='r' id='r3' />
                        <input type='radio' name='r' id='r4' />
                        <div className='pics s1'>
                            <img src={location.location.img4} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location.img3} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location.img2} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location.img1} alt='locationPic' />
                        </div>
                        <div className='navigation'>
                            <label htmlFor='r1' className='bar'></label>
                            <label htmlFor='r2' className='bar'></label>
                            <label htmlFor='r3' className='bar'></label>
                            <label htmlFor='r4' className='bar'></label>
                        </div>
                    </div>
                </div>
                <div className='locationTitle__div'>
                    {<h1>{location.location.name}</h1>}
                </div>
                <div className='locationDes__div'>
                    <h3>{location.location.description}</h3>
                </div>

            </>
        )
    }

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
            <div className='locationDescription__div'>
                {location.location && locationDescription()}
                <div className='review__reserve'>
                    <div className='reviews__div'>
                        <h1>Reviews</h1>
                        {sessionReview}
                        {location.reviews?.map(review => (
                            <div className='review_box' key={review.id}>
                                <div className='review__userId'>User: {review.userId}</div>
                                <div className='review__createdAt'>{review.createdAt}</div>
                                <div className='review__review'>{review.review}</div>
                                {userReviewOptions(sessionUser, review)}
                            </div>
                        ))}
                    </div>
                    <div className='reserve__container'>
                        <h1>Reserve the DeLorean</h1>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Location;
