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
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type='text' onChange={createReview} placeholder='What did you think of your visit?'/>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddReviewForm
