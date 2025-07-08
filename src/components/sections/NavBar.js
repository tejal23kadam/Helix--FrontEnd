
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCategoryFilter } from '../../redux/slice/CategoryFilterSlice';


const NavBar = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <div className="container">
            <div className="d-flex">
                <div>
                    <nav className="navbar d-flex navbar-expand-lg navbar-light navigation">
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="d-none d-lg-block">
                            <ul className="navbar-nav ms-auto main-nav ">
                                {/* <li className="nav-item dropdown ">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category <span><i className="bi bi-chevron-compact-down"></i></span>
                                    </a>
                                    
                                    <ul className="dropdown-menu">
                                        <li className=" dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item"><Link to="/">home</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>

                                {/* <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li> */}
                                {/* <li className="nav-item"><Link to="/termsAndConditions">Terms & Conditions</Link></li> */}
                                <li className="nav-item">
                                    <div className='cartCount'>
                                        <Link to="/cartData"><i className="bi bi-cart"></i></Link>
                                        {/* <span className="quantity">{cart.length}</span> */}
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar 