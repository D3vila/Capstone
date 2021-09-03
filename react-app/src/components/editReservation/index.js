import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import EditReservationForm from "./editReservation";


function EditReservationModal({reservationId, locationId, userId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='editReservation__button' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReservationForm reservationId={reservationId} locationId={locationId} userId={userId} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditReservationModal;
