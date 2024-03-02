import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastComponent({ statusMsg, setStatusMsg }: any) {

    return (
        <>
        {
            statusMsg.length>0 &&
            <ToastContainer
            className="p-3 mt-20 position-fixed"
            position="top-end"
            style={{ zIndex: 80 }}
            >
                <Toast onClose={() => setStatusMsg("")} >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto fs-5 text-primary fw-bold">Info</strong>
                        {/* <small>11 mins ago</small> */}
                        <Button variant="close" onClick={() => setStatusMsg("")} />
                    </Toast.Header>
                    <Toast.Body className='bg-white fs-6 fw-bold'>{statusMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
            }
        </>
    );
}

export default ToastComponent;