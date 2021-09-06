import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editReviewThunk } from '../../store/locations';
import './editReview.css'

const EditReviewForm = (review) => {
    const sessionUser =useSelector(state => state.session.user)
    const location = useSelector((state) => state.locations)

    const dispatch = useDispatch();

    const [editedReview, setEditedReview] = useState('');

    const createEditedReview = (e) => setEditedReview(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        review = review.review
        const editedNewReview = {
            id: review.id,
            userId: sessionUser.id,
            locationId: location.location.id,
            review: editedReview + '(edited)',
        };
        dispatch(editReviewThunk(editedNewReview))
        setEditedReview('')
    };


    return (
        <div className='editedForm__div'>
            <form className='reviewEditForm' onSubmit={handleSubmit}>
                <textarea type='text' onChange={createEditedReview} value={editedReview} required={true} placeholder='Edit your review' />
                <div className='reviewEdit__button'>
                    <button type='submit'>Submit Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditReviewForm
