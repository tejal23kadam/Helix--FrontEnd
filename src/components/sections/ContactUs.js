import React from 'react'
import Footer from './Footer'


function ContactUs() {
    return (
        <div>
            
            <section className="page-title">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {/* <!-- page title --> */}

            {/* <!-- contact us start--> */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us-content p-4">
                                <h5>Contact Us</h5>
                                <h1 className="pt-3">Hello, what's on your mind?</h1>
                                <p className="pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit dolor, blandit vel euismod ac, lentesque et dolor. Ut id tempus ipsum.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="#">
                                <fieldset className="p-4">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-6 py-2">
                                                <input type="text" placeholder="Name *" className="form-control" required />
                                            </div>
                                            <div className="col-lg-6 pt-2">
                                                <input type="email" placeholder="Email *" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <select name="" id="" className="form-control w-100">
                                        <option value="1">Select Category</option>
                                        <option value="1">Laptop</option>
                                        <option value="1">iPhone</option>
                                        <option value="1">Monitor</option>
                                        <option value="1">I need</option>
                                    </select>
                                    <textarea name="message" id="" placeholder="Message *" className="border w-100 p-3 mt-3 mt-lg-4"></textarea>
                                    <div className="btn-grounp">
                                        <button type="submit" className="btn btn-primary mt-2 float-right">SUBMIT</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact us end --> */}

            <Footer/>
        </div>
    )
}

export default ContactUs