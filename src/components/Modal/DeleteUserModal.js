import { Button, Modal } from 'react-bootstrap'


const DeleteUserModal =({  showDeleteModal,modalCloseHandler,onDeleteHandler, email }) => {
    return (
        <Modal show={showDeleteModal} onHide={modalCloseHandler} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete "{email}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="my-3">
                    Are you sure you want to delete this User?
                    </h6>
                    </Modal.Body>
            <Modal.Footer>
                {/* <Button variant='secondary' onClick={modalCloseHandler}>
                    No
                </Button> */}
                <button className='btn btn-primary w-25 btn-one search-text text-white' onClick={onDeleteHandler}>
                    Yes
                </button>
            </Modal.Footer>
        </Modal>

    )
}

export default DeleteUserModal