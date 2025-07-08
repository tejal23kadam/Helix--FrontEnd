import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { setCanvasState } from '../redux/slice/RightSideOffCanvasSlice';
import RightSideOffCanvas from './RightSideOffCanvas';
import BottomNavbar from './BottomNavbar';
import { addToCategoryFilter } from '../redux/slice/CategoryFilterSlice';


function AdminHeader(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(!show);
    const [visibleSearchBar, setVisibleSearchBar] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);

    const handleRightShow = () => {
        dispatch(setCanvasState())
    }

    return (
        <div>
            <div className="row ">
                <div className='top-navbar ' >
                    <div>
                        <div className="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                            <img src={require('../images/logo.png')} alt='no img' />
                        </div>
                    </div>

                    <div className="d-block d-lg-none py-4 px-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} className="bi bi-text-indent-right text-center" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                    

                    <div className="d-block d-lg-none text-center ">
                        <img src={require('../images/logo.png')} alt='no img' />
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

                </div>
                {/* top navbar section end */}



                <div className='main-section d-flex'>

                    {/* <div className='section-color' style={(show) ? { marginLeft: "250px" } : { marginLeft: "0px" }}> */}
                    {/*left sidebar setion start */}
                    <div className='section-color' >
                        {(!show) ? (
                            <div className='px-1 py-3 d-none d-lg-block verticleNavbar navbar-bg-color'>
                                <nav id="navmenu" className="navmenu">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li>
                                            <h2 className='text-white text-center'>{user.name}</h2>

                                        </li>
                                        {props.navSections.map((section, i) => (
                                            <li key={i} className="nav-item">
                                                <Link className={activeLink === section.secName ? "active" : ""}
                                                    onClick={() => setActiveLink(section.secName)}
                                                    to={section.linkTo} >
                                                    <i className={section.icon}></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ) :
                            (
                                /* left side navbar with icons and title view */
                                <div className=' d-none d-lg-block'>
                                    <div className='verticleNavbar navbar-bg-color'>
                                        <p className="mb-0">
                                            <div >
                                                <div className="profile-img">
                                                    <img src={"http://localhost:2000/images/userImg/" + user.image[0].name} alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <h1 className="py-4 sitename text-capitalize">{(user !== null) ? (user.name) : ("admin")}</h1>
                                                <nav id="navmenu" className="navmenu">
                                                    <ul className="navbar-nav me-auto mb-2 py-3 mb-lg-0" style={{ width: "250px" }}>
                                                        {props.navSections.map((section, i) => (
                                                            <li key={i} className="nav-item">
                                                                <Link className={activeLink === section.secName ? "active" : ""}
                                                                    onClick={() => setActiveLink(section.secName)}
                                                                    to={section.linkTo} >
                                                                    <i className={section.icon}></i>
                                                                    {section.secName}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            )}

                    </div>
                    <nav className="navbar d-flex navbar-expand-lg navbar-light navigation">
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        
                    </nav>
                    {/* left side bar setion end */}
                    <Offcanvas show={show} onHide={handleClose} className="d-block d-lg-none navbar-bg-color" responsive="lg">
                        <Offcanvas.Header className=' px-4 text-white' closeButton>
                            <h1>Menu</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <div className="mb-0">
                                    <div className=' px-2' >
                                        <nav id="navmenu" className="navmenu">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-primary">
                                                {props.navSections.map((section, i) => (
                                                    <li key={i} className="nav-item ">
                                                        <Link className={activeLink === section.secName ? "active" : ""}
                                                            onClick={() => { setActiveLink(section.secName); handleClose(); }}
                                                            to={section.linkTo} >
                                                            <i className={section.icon}></i>
                                                            {section.secName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>


                    {/* pages section start */}

                    {/* if screeen size is greater than lg */}
                    <div className={((show) ? 'setMarginLeft' : 'setMarginLeft1') + 'container-fluid section-color h-100 d-none d-lg-block'}>
                        <Outlet />
                    </div>

                    {/* if screeen size is greater than lg */}
                    <div className='container-fluid section-color h-100 d-lg-none d-block'>
                        <Outlet />
                    </div>


                    {/* pages section end  */}
                </div>
            </div>

        </div >
    )
}
export default AdminHeader

