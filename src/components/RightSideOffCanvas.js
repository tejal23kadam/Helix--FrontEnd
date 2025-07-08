import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setCanvasState } from '../redux/slice/RightSideOffCanvasSlice';



const RightSideOffCanvas = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const rightCanvasState = useSelector((state) => state.rightSideOffCanvas.canvasState);

    const logoutUser = () => {
        localStorage.removeItem("token");
        dispatch(unSetIsAuth());
        navigate("/");
    }

    const handleRightClose = () => {
        dispatch(setCanvasState())
    }
    return (
        <>
            <div >
                <Offcanvas show={rightCanvasState} onHide={handleRightClose} placement='end' className='navbar-bg-color'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="sitename text-capitalize text-center text-white">{(user !== null) ? (user.name) : ("User")}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <ul className="navmenu navbar-nav me-auto mb-2 mb-lg-0">
                            <li key={0} className="nav-item mx-3">
                                <Link to="/" onClick={() => logoutUser()} ><i className="bi bi-gear px-2"></i>Sign Out</Link>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default RightSideOffCanvas