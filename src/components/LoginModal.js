import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { addToCart } from '../sliceComponent/CartSlice';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { setToast } from '../redux/slice/toastSlice'
import { setIsAuth } from '../redux/slice/AuthSlice';
import RegistrationPage from './RegistrationPage';
import { Link } from 'react-router-dom';


const LoginModal = ({ isOpen, handleClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialState = {
        email: '',
        password: ''

    };

    const [formdata, setFormdata] = useState(initialState)
    const [showmodal, setShowModal] = useState(true); //shows modal
    const [signIn, setSignIn] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }

    const checkUser = async () => {
        try {
            const res = await axios.post('http://localhost:2000/api/validateUser', formdata)
            console.log("res = " + res.data.status);
            console.log("formdata = " + JSON.stringify(formdata));
            if (res.data.status) {
                localStorage.setItem("token", res.data.data.token)
                dispatch(setIsAuth(res.data.data.user));
                dispatch(setToast({ message: res.data.data.message, type: "success" }));
                console.log("res.data123" + res.data)
                if (res.data.data.user.userType === 1) {
                    navigate("/admin", { state: { name: res.data.data.user.name, image: res.data.data.user.image[0].name } });
                }
                else {
                    navigate("/user", { state: { name: res.data.data.user.name } })
                }
            }
        }
        catch (error) {
            console.log("error = " + error)
        }
    }


    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            //  dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header className='bg-color text-white text-center' closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Welcome to Helix
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form className="container">
                    <div className='row' >
                        {!signIn ? (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Id</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3 text-center">
                                    <Link to="/forget-password">
                                        Forgot password?
                                    </Link>

                                </div>

                                
                                    <div className='col-md-6'>
                                    <button
                                        type="button"
                                        className="form-control btn bg-color btn-outline text-white btn-animation"
                                        onClick={checkUser}
                                    >
                                        Sign In
                                    </button>
                                    </div>
                                    <div className='col-md-6'>
                                        <button
                                            type="button"
                                            className="form-control btn bg-color btn-outline text-white btn-animation"
                                            onClick={() => setSignIn(true)}
                                        >
                                            Sign Up
                                        </button>
                                    
                                </div>
                            </>
                        ) : (
                            <RegistrationPage setSignIn={setSignIn} handleClose={handleClose} />
                        )}
                    </div>
                </form>
            </Modal.Body>
        </Modal>



    )
}
export default LoginModal

