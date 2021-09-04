import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneLocation, deleteReviewThunk } from '../../store/locations'
import { useParams } from 'react-router-dom';
import AddReviewForm from '../addReview/addReviewForm';
import EditReviewForm from '../editReview/editReview';
import ReservationForm from '../addReservation/addReservation'
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

    let sessionReservation;
    if (sessionUser) {
        sessionReservation = (
            <>
                <ReservationForm user={sessionUser} location={locationId}/>
            </>
        )
    } else {
        sessionReservation = (
            <>
                <h2 className='mustBeLogin'>⏰ Must be Login to make a reservation ⏰</h2>
            </>
        )
    }

    function userReviewOptions(sessionUser, review) {
        if (sessionUser && (sessionUser.id === review.userId)) {
            return (
                <>
                    <EditReviewForm review={review} />
                    <button className='reviewDelete__button' onClick={(e) => handleDeleteReview(e, review.id)}>Delete</button>
                </>
            )
        }
    }

    function locationDescription() {
        return (
            <>
                <div className='movie__title'>
                    <h1>{location.location?.movieName}</h1>
                </div>
                <div className='locationTitle__div'>
                    {<h2>{location.location?.name}</h2>}
                </div>
                <div className='locationPic__div'>
                    <div className='slides'>
                        <input type='radio' name='r' id='r1' defaultChecked />
                        <input type='radio' name='r' id='r2' />
                        <input type='radio' name='r' id='r3' />
                        <input type='radio' name='r' id='r4' />
                        <div className='pics s1'>
                            <img src={location.location?.img4} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location?.img3} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location?.img2} alt='locationPic' />
                        </div>
                        <div className='pics'>
                            <img src={location.location?.img1} alt='locationPic' />
                        </div>
                        <div className='navigation'>
                            <label htmlFor='r1' className='bar'></label>
                            <label htmlFor='r2' className='bar'></label>
                            <label htmlFor='r3' className='bar'></label>
                            <label htmlFor='r4' className='bar'></label>
                        </div>
                    </div>
                </div>
                <div className='trip__details'>
                    <h2>Trip Details:</h2>
                </div>
                <div className='timeTravel__div'>
                    <h3>Time traveling to: {location.location?.month},{location.location?.day} {location.location?.year}</h3>
                </div>
                <div className='location__place'>
                    <h3>Location: {location.location?.city}, {location.location?.state} ({location.location?.country})</h3>
                </div>
                <div className='movieInfo__div'>
                    <h2>Movie Information:</h2>
                </div>
                <div className='locationDes__div'>
                    <h3>{location.location?.description}</h3>
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
                <h2 className='mustBeLogin'>⏲ Login to leave a comment ⏲</h2>
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
                            <div className='review__box' key={review.id}>
                                <div className='review__userId'>User: {review.userId}</div>
                                <div className='review__createdAt'>{review.createdAt}</div>
                                <div className='review__reviewDiv'>
                                    <div className='review__review'>{review.review}</div>
                                </div>
                                {userReviewOptions(sessionUser, review)}
                            </div>
                        ))}
                    </div>
                    <div className='reserve__container'>
                        <h1>Reserve the DeLorean</h1>
                        {sessionReservation}
                        <div className='price__div'>
                            <h2>${location.location?.price}/day</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Location;
