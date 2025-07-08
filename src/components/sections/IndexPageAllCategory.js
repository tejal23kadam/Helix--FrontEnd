import React from 'react'
import '../../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link } from 'react-router-dom';
//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 8,
    margin: 30,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        375: {
            items: 3
        },
        768: {
            items: 5
        },
        1440: {
            items: 7
        }
    }
};

function IndexPageAllCategory() {
    return (
        <div>
            <section className=" section">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section title --> */}
                            <div className="section-title">
                                <h2>All Categories</h2>

                            </div>
                            <div className="row">
                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tv icon-bg-1" viewBox="0 0 16 16">
                                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2 " />
                                            </svg>
                                            <h4><Link to="/appliances">Appliances</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mic-fill icon-bg-2" viewBox="0 0 16 16">
                                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                            <h4><Link to="/audio">Audio</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cassette icon-bg-3" viewBox="0 0 16 16">
                                                <path d="M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.691l-1.362-2.724A.5.5 0 0 0 12 10H4a.5.5 0 0 0-.447.276L2.19 13H1.5a.5.5 0 0 1-.5-.5zM11.691 11l1 2H3.309l1-2z" />
                                            </svg>
                                            <h4><Link to="/gaming">Gaming</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop-fill icon-bg-4" viewBox="0 0 16 16">
                                                <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                            </svg>
                                            <h4><Link to="/laptop">Laptop</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}

                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone-vibrate-fill icon-bg-5" viewBox="0 0 16 16">
                                                <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                                            </svg>
                                            <h4><Link to="/mobile">Mobile</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div className="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pip icon-bg-6" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                                                <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                            <h4><Link to="/tv">Tv</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>


            <section className=" section bg-shade">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {/* <!-- Category list --> */}
                                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header-text">
                                            <h4>Secure Shopping</h4>
                                            <h6>Our website is encrypted with the most advanced SSL, ensuring your personal information is safe and secure</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header-text">
                                            <h4>Free Delivery</h4>
                                            <h6>No extra charges – just great products at your doorstep. </h6>
                                            <h6>You Shop, We Ship – for FREE!</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header-text">
                                            
                                            <h4>Same day shipping</h4>
                                            <h6>No extra waiting. No delays. Shop now and experience lightning-fast service with our Same-Day Shipping option!</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div className="category-block">
                                        <div className="header-text">
                                            <h4>Warranty</h4>
                                            <h6>100% of our products come with a manufacturer's warranty!</h6>
                                            <h6>Buy with Confidence – Includes Warranty</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}



                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>




        </div>
    )
}

export default IndexPageAllCategory