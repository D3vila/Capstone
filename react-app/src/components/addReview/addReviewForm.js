import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReviewThunk } from '../../store/locations';
import './addReview.css'


const AddReviewForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useSelector((state) => state.locations)

    const dispatch = useDispatch();


    const [review, setReview] = useState('');
    const createReview = (e) => setReview(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const addReview = {
            userId: sessionUser.id,
            locationId: location.location.id,
            review
        };
        dispatch(createReviewThunk(addReview))
        setReview('');
    };

    return (
        <div className='review__div1'>
            <form className='reviewForm__div' onSubmit={handleSubmit}>
                <textarea type='text' onChange={createReview} required={true} value={review} placeholder='What did you think of your visit?' />
                <div className='review__button'>
                    <button type='submit'>Submit Review</button>
                </div>
            </form>
        </div>
    )
}

export default AddReviewForm
