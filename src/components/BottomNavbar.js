import { useState } from 'react'
import { Link } from 'react-router-dom';

import CloseButton from 'react-bootstrap/esm/CloseButton';

const BottomNavbar = () => {
    const [activeLink, setActiveLink] = useState("Dashboard");
    const [visibleSearchBar, setVisibleSearchBar] = useState(true);


    return (
        <>
            {/*   searchbar section start  */}
            {(visibleSearchBar) ? (
                <div className='search-section d-lg-none d-flex w-100 p-4'>
                    <div className="has-search flex-grow-1 ">
                        <span className="bi bi-search form-control-feedback p-2"></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                </div>) : (<></>)}



            {/* searchbar section end  */}



            <div class="navbar1 d-lg-none bg-color ">

                <div>
                    <Link className={activeLink === "Dashboard" ? "active" : ""}
                        onClick={() => setActiveLink("Dashboard")}
                        to='/admin' >
                        <i className="bi bi-building-fill-dash px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === "Order" ? "active" : ""}
                        onClick={() => setActiveLink("Order")}
                        to='/admin/order' >
                        <i className="bi bi-box-seam px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === "Settings" ? "active" : ""}
                        onClick={() => setActiveLink("Settings")}
                        to='/admin/settings' >
                        <i className="bi bi-gear px-2"></i>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default BottomNavbar
