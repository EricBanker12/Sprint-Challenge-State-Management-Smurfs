import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import SmurfForm from './SmurfForm'

function EditModal(props) {
    return (
        <Modal isOpen={props.edit}>
            <ModalBody>
                <SmurfForm edit={props.edit} setEdit={props.setEdit} />
            </ModalBody>
        </Modal>
    )
}

export default EditModal