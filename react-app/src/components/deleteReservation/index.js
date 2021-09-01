import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReservation from './DeleteReservation';



function DeleteReservationModal({id}) {
    const [showModal, setShowModal] = useState(false);

	return (
        <>
            <button className='deleteReservation__button' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteReservation id={id} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

	);
}

export default DeleteReservationModal;
