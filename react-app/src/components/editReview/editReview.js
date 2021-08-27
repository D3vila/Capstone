import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editReviewThunk } from '../../store/locations';

const EditReviewForm = (review) => {
    const sessionUser =useSelector(state => state.session.user)
    const location = useSelector((state) => state.locations)

    const dispatch = useDispatch();

    const [editedReview, setEditedReview] = useState();

    const createEditedReview = (e) => setEditedReview(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        review = review.review
        const editedNewReview = {
            id: review.id,
            userId: sessionUser.id,
            locationId: location.location.id,
            review: editedReview + ' (edited)',
        };
        await dispatch(editReviewThunk(editedNewReview))
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea type='text' onChange={createEditedReview} placeholder='Edit your review' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditReviewForm
