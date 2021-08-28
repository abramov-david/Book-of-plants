import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from '../styles/formSignUp.module.css'
import { style } from '@material-ui/system'


export function FormSignUp(props) {
    return (
        <form action="">
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className={styles.modal}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className={styles.modalTitle}>
                        Sign Up
                        <img src="/white_logo.png" alt="" className={styles.modalLogo} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className={styles.inputContainer}>
                        <div className={styles.inputContainerInputs}>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <div className={styles.inputContainerInputs}>
                            <input type="text" placeholder='Email' />
                            <select name="emails">
                                <option value="">@gmail.com</option>
                                <option value="">@yahoo.com</option>
                                <option value="">@zoho.com</option>
                            </select>
                        </div>
                        <div className={styles.inputContainerInputs}>
                            <input type="text" placeholder='Day' />
                            <select name="month">
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">Jule</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                            <input type="text" placeholder='Year' />
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.footerButtons}>
                                <button className={styles.footerButton} type='submit'>Register</button>
                                <button className={styles.footerButton} onClick={props.onHide} type='submit'>Close</button>
                            </div>
                            <div className={styles.footerTerms}>By clicking "Continue", you agree to the Terms and Privacy Policy</div>
                        </div>


                    </Container>
                </Modal.Body>
            </Modal>
        </form >
    );
}