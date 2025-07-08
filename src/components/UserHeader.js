import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { unSetIsAuth, setIsAuth } from '../redux/slice/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import userImage from '../images/User-Profile.png'
import { setToast } from '../redux/slice/toastSlice';

function UserHeader() {

        const [show, setShow] = useState(false); //shows right side offcanvas
        const [showmodal, setShowModal] = useState(false); //shows modal
        const handleClose = () => setShow(!show);
        const [rightshow, setRightShow] = useState(false);
        const handleRightClose = () => setRightShow(false);
        const handleRightShow = () => setRightShow(true);
        const [visibleSearchBar, setVisibleSearchBar] = useState(false);
        const [activeLink, setActiveLink] = useState("Dashboard");

        const dispatch = useDispatch();
        const naviget = useNavigate();
        const user = useSelector((state) => state.auth.user);
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const studentData = {
                email: email,
                password: password,

        };
        let isToken = localStorage.getItem("token")
        let profileImg;
        const logoutUser = () => {
                localStorage.removeItem("token");
                dispatch(unSetIsAuth());
                naviget("/");
        }

        const openLoginModal = () => {

                setShow(!show);
                setShowModal(true);
        }

        const CheckStudent = async () => {
                try {
                        const res = await axios.post('http://localhost:2000/api/validateUser', studentData)

                        if (res.data.status) {
                                profileImg = res.data.data.user.image[0].path
                                localStorage.setItem("token", res.data.data.token)
                                dispatch(setIsAuth(res.data.data.user));
                                dispatch(setToast({ message: res.data.data.message, type: "success" }));

                                // if (res.data.data.user.userType === 1) {
                                //         navigate("/admin", { state: { name: res.data.data.user.name } });
                                // }
                                // else {
                                //         navigate("/user", { state: { name: res.data.data.user.name } })
                                // }
                        }

                }
                catch (error) {
                        console.log(error)
                }
        }


        return (
                <div>
                        <div className="row ">
                                <div className='d-flex ' >
                                        <div>
                                                <div className="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                                                        <img src={require('../images/logo.png')} alt='no img' />
                                                </div>
                                        </div>
                                        <div className=" py-4 px-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} className="bi bi-text-indent-right text-center" viewBox="0 0 16 16">
                                                        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                                </svg>
                                        </div>

                                        {/* <div className=" py-4 px-2 d-block flex-grow-1 d-lg-none text-center ">
                                                <img src="C:\Users\Tejal\Desktop\tejal\node-js-structure-with-mongodb-application\backend\assets\userImg\1746083215162-62793607.png" alt='no img' />
                                        </div> */}
                                        <div className='d-flex justify-content-end flex-lg-grow-1'>
                                                <div className="p-2 d-none d-lg-block">
                                                        <div className="form-group has-search">
                                                                <span className="bi bi-search form-control-feedback"></span>
                                                                <input type="text" className="form-control" placeholder="Search" />
                                                        </div>
                                                </div>
                                                {/* <div className=" py-4 px-2 d-none d-lg-block ">
                                                        <Link><i className="bi bi-bell-fill"></i></Link>
                                                </div>
                                                <div className="py-4 px-2 d-none d-lg-block">
                                                        <Link><i className='bi bi-gear'></i></Link>
                                                </div> */}
                                                <div className="py-3 px-2 ">
                                                        <div className="profile">
                                                                <div className="img-box">
                                                                        {/* below commented code opens right side canvas */}
                                                                        {/* <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" onClick={handleRightShow} alt="no img" /> */}
                                                                        {
                                                                                // (isToken !== null) ? (
                                                                                //         <img src="C:\Users\Tejal\Desktop\tejal\node-js-structure-with-mongodb-application\backend\assets\userImg\1746083215162-62793607.png" onClick={handleRightShow} alt="no img" />
                                                                                // ) : (<img src={userImage} onClick={handleRightShow} alt="no img" />)

                                                                        }

                                                                </div>
                                                        </div>

                                                        {/* right side off canvas start */}
                                                        <div >
                                                                <Offcanvas show={rightshow} onHide={handleRightClose} placement='end' className='navbar-bg-color'>
                                                                        <Offcanvas.Header closeButton>
                                                                                <Offcanvas.Title className="sitename text-capitalize text-center text-white">{(user !== null) ? (user.name) : ("User")}</Offcanvas.Title>
                                                                        </Offcanvas.Header>
                                                                        <Offcanvas.Body>
                                                                                <ul className="navmenu navbar-nav me-auto mb-2 mb-lg-0">
                                                                                        <li key={0} className="nav-item mx-3" >
                                                                                                <Link onClick={openLoginModal} ><i className="bi bi-gear px-2"></i>Sign In</Link>

                                                                                        </li>
                                                                                        <li key={0} className="nav-item mx-3">
                                                                                                <Link to="/" onClick={() => logoutUser()} ><i className="bi bi-gear px-2"></i>Sign Out</Link>
                                                                                        </li>
                                                                                </ul>
                                                                        </Offcanvas.Body>
                                                                </Offcanvas>
                                                        </div>
                                                        {/* right side off canvas end */}
                                                </div>
                                        </div>
                                        {/* searchbar section start  */}
                                        {(visibleSearchBar) ? (
                                                <div className='search-section d-lg-none d-flex w-100 p-4'>
                                                        <div className="has-search flex-grow-1 ">
                                                                <span className="bi bi-search form-control-feedback p-2"></span>
                                                                <input type="text" className="form-control" placeholder="Search" />
                                                        </div>
                                                        <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                                                </div>) : (<></>)}


                                        {/* searchbar section end  */}

                                        <Modal
                                                show={showmodal}
                                                onHide={() => setShowModal(false)}
                                                dialogClassName="modal-90w"
                                                aria-labelledby="example-custom-modal-styling-title"
                                                centered
                                        >
                                                <Modal.Header className='bg-color text-white text-center' closeButton>
                                                        <Modal.Title id="example-custom-modal-styling-title">
                                                                Welcome To Registration
                                                        </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        <div className='container'>
                                                                <div className='row  '>
                                                                        <div>

                                                                                <div className='bg-white '>

                                                                                        <div >
                                                                                                <form>
                                                                                                        <div>
                                                                                                                <label >Email Id</label>
                                                                                                                <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />

                                                                                                        </div>


                                                                                                        <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                                                                                                <label >Password</label>
                                                                                                                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                                                                                                        </div>


                                                                                                        <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                                                                                                <button type="button" className="form-control btn bg-color btn-outline text-white btn-animation" onClick={() => CheckStudent()}>Sign  in</button>
                                                                                                        </div>

                                                                                                        <div className='text-wrap p-1 text-center '>
                                                                                                                <div className='text '>
                                                                                                                        <p>Don't have an account ?<Link to="/signup"> Sign Up</Link></p>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                </form>
                                                                                        </div>


                                                                                </div>
                                                                        </div>

                                                                </div>



                                                        </div>

                                                        {/* </div> */}
                                                </Modal.Body>
                                        </Modal>

                                </div>

                        </div>

                        {/* bottom position fixed navbar start */}
                        <nav className="navbar d-lg-none bottom-navbar-bg-color px-3">
                                <div>
                                        <Link className={activeLink === ("Dashboard" ? "active text-white" : "") + "text-dark"}
                                                onClick={() => setActiveLink("Dashboard")}
                                                to="/admin" >
                                                <i className="bi bi-building-fill-dash px-2"></i>
                                        </Link>
                                </div>
                                <div>
                                        <Link className={activeLink === ("Order" ? "active text-white" : "") + "text-dark"}
                                                onClick={() => setActiveLink("Order")}
                                                to="/admin/order" >
                                                <i className="bi bi-box-seam px-2"></i>
                                        </Link>
                                </div>
                                <div>
                                        <Link className={activeLink === ("Products" ? "active text-white" : "") + "text-dark"}
                                                onClick={() => setActiveLink("Products")}
                                                to="/admin/NewProduct" >
                                                <i className="bi bi-card-list px-2"></i>
                                        </Link>
                                </div>
                                <div>
                                        <Link className={activeLink === ("Employee" ? "active text-white" : "") + "text-dark"}
                                                onClick={() => setActiveLink("Employee")}
                                                to="/admin/newEmployee" >
                                                <i className="bi bi-person-add px-2"></i>
                                        </Link>
                                </div>
                                <div>
                                        <Link className={activeLink === ("Settings" ? "active text-white" : "") + "text-dark"}
                                                onClick={() => setActiveLink("Settings")}
                                                to="/admin/settings" >
                                                <i className="bi bi-gear px-2"></i>
                                        </Link>
                                </div>
                                <div>
                                        <Link className={(visibleSearchBar === true ? "active text-white" : "") + "text-dark"}
                                                onClick={() => { setVisibleSearchBar(true) }}>
                                                <i className="bi bi-search px-2"></i>
                                        </Link>
                                </div>
                        </nav>
                        {/* bottom position fixed navbar start */}
                </div >
        )
}
export default UserHeader

