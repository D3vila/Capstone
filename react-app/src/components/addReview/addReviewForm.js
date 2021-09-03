import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReviewThunk } from '../../store/locations';


const AddReviewForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useSelector((state) => state.locations)

    const dispatch = useDispatch();


    const [review, setReview] = useState('');
    const createReview = (e) => setReview(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const addReview = {
            userId: sessionUser.id,
            locationId: location.location.id,
            review
        };
        await dispatch(createReviewThunk(addReview))
        setReview('');
    };

    return (
        <div className='review__div'>
            <form onSubmit={handleSubmit}>
                <textarea type='text' onChange={createReview} required={true} placeholder='What did you think of your visit?' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddReviewForm
