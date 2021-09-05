import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReservation from './DeleteReservation';



function DeleteReservationModal({reservationId}) {
    const [showModal, setShowModal] = useState(false);

	return (
        <>
            <button className='deleteReservation__button' onClick={() => setShowModal(true)}><i className="fas fa-trash"></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteReservation reservationId={reservationId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

	);
}

export default DeleteReservationModal;
