import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from '../styles/formSignIn.module.css'
import { style } from '@material-ui/system'


export function FormSignIn(props) {
    return (
        <form action="">
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className={styles.modal}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className={styles.modalTitle}>
                        Sign In
                        <img src="/white_logo.png" alt="#" className={styles.modalLogo} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className={styles.inputContainer}>
                        <div className={styles.inputContainerInputs}>
                            EMAIL
                            <input type="email" />
                        </div>
                        <div className={styles.inputContainerInputs}>
                            PASSWORD
                            <input type="password" />
                        </div>
                        <div className={styles.footer}>
                            <button className={styles.buttonForm} type='submit'>LOGIN</button>
                            <button className={styles.buttonForm} onClick={props.onHide} type='submit'>CLOSE</button>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </form>
    );
}