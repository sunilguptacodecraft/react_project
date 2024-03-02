import { Modal } from 'react-bootstrap'


const DialogModal =({  showDialog,modalDialogHandler, message ,title,status }) => {
    return (
        <Modal show={showDialog} onHide={modalDialogHandler} centered >
            <Modal.Header closeButton>
                {/* <Modal.Title>Status changed into {" "}{status===true? "Active":" InActive"}</Modal.Title> */}
                <Modal.Title>Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="my-3">
                {message}
                    </h5>
                    </Modal.Body>
        </Modal>

    )
}

export default DialogModal