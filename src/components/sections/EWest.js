import React from 'react'

function EWest() {
    return (
        <div>
             <section className="page-title">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>E-Waste</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            <section className="blog single-blog section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-7 my-1">
                            <div>

                                <div>
                                    <article className="single-post">
                                        <h1 className='pb-5'>Understanding the e-Waste Problem</h1>
                                        <div className='text-center'>
                                            <img className='recycleImg' src={require('../../images/e-west.jpg')} alt="no img" />
                                        </div>
                                        <p>
                                            The Information and Communication revolution has transformed our lives, bringing unprecedented convenience and innovation.
                                            However, this revolution also brings a significant challenge: electronic waste, or e-waste.
                                            E-waste comprises discarded electrical electronic equipment, and the waste generated from the manufacturing and repair of
                                            these electronic products.The improper disposal of e-waste can pose serious threats to human health and the environment.</p>

                                        <p>E waste has been defined as-</p>


                                        <p>“Waste electrical and electronic equipment, whole or in part or rejects from their manufacturing and repair
                                            process, which are intended to be discarded.”</p>
                                    </article>


                                </div>
                                <div>

                                    <article className="single-post">
                                        <h2>Adverse effects of E-Waste</h2>
                                        <div className='text-center'>
                                            <img className='recycleImg' src={require('../../images/recycle.jpg')} alt="no img" />
                                        </div>
                                        <p>The issue of proper management of such hazardous E-Waste is therefore critical to the protection of livelihood, health and environment. To deal with this ever-rising problem of E-Waste, the government of India,
                                            through its Ministry of Environment and forest, formulated the E-Waste (Management and Handling) Rules in 2011. </p>
                                    </article>


                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5 my-1">
                            <div >
                                <div>
                                    <div className="sidebar">
                                        {/* <!-- Search Widget --> */}
                                        <div>
                                            <h2>why Recycle?</h2>
                                        </div>
                                        {/* <!-- Category Widget --> */}
                                        <div>
                                            <div className="widget user text-center bg-color-khakhi">

                                                <img className="rounded-circle img-fluid mb-5 px-5" src={require('../../images/conserve-resources.png')} alt="no img" />
                                                <h4>Conserve Resources</h4>
                                                <p className="member-time">Recycling e-waste helps conserve natural resources by reusing existing materials.
                                                    For instance, recycling one million cell phones can recover 35,000 pounds of copper,
                                                    772 pounds of silver, and 75 pounds of gold. By reducing the need for raw material extraction,
                                                    we can preserve natural resources and minimize environmental damage.</p>


                                            </div>
                                        </div>
                                        {/* <!-- Archive Widget --> */}
                                        <div>
                                            <div className="widget user text-center bg-color-khakhi">
                                                <img className="rounded-circle img-fluid mb-5 px-5" src={require('../../images/save-energy.png')} alt="no img" />
                                                <h4>Save Energy</h4>
                                                <p className="member-time">Recycling electronic products requires less energy compared to manufacturing new
                                                    products from scratch. The process of extracting raw materials, refining them, and transporting
                                                    them consumes significant energy. Recycling skips these steps, leading to substantial energy
                                                    savings.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="widget user text-center bg-color-khakhi">
                                                <img className="rounded-circle img-fluid mb-5 px-5" src={require('../../images/prevent-pollution.png')} alt="no img" />
                                                <h4>Prevent Pollution</h4>
                                                <p className="member-time">By recycling e-waste, we can prevent pollution of air, water, and land.
                                                    Recycling reduces the need for new raw materials, which in turn reduces the pollution caused by their
                                                    extraction and processing. This helps lower greenhouse gas emissions and mitigates global warming.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='section-sm'>
                            <div className="container bg-color-khakhi">
                                <div className="row justify-content-md-center text-center">
                                    <div className="col-md-12 col-lx-8">
                                        <div className="content-holder mt-5">
                                            <h2>How can you contribute to a greener environment?</h2>
                                            <img className="e-waste-img img-fluid mb-5 mt-5" src={require('../../images/green-e-waste-logo.png')} alt="no img" />
                                            <div className="row">
                                                <div className=" col-sm-4 mb-5 ">
                                                    <div className='text-center'>
                                                        <p className='ewest-fonts '>1</p>
                                                    </div>
                                                    <h5>Hand Over E-Waste to Authorized Recyclers: Ensure that all electronic products are handed over to authorized e-waste recyclers for proper disposal.</h5>
                                                </div>
                                                <div className=" col-sm-4 mb-5 ">
                                                    <h3 className='ewest-fonts'>2</h3>
                                                    <h5>Isolate E-Waste: Keep non-functional or un-repairable e-waste in an isolated area to prevent accidental breakage.</h5></div>
                                                <div className=" col-sm-4 mb-5">
                                                    <h3 className='ewest-fonts'>3</h3>
                                                    <h5>Deposit at Collection Points: You can also deposit your e-waste directly at our designated collection points. </h5></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 my-1">
                            <div>
                               
                                    <div className='text-center'>
                                        <img src={require('../../images/Intro-to-E-Waste.jpg')} alt="no img" />
                                    </div>
                            

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 my-1">
                            <div >
                                <div>
                                    <div className="sidebar">
                                        {/* <!-- Search Widget --> */}
                                        <div>
                                            <h2 className="pb-4">Do's and Don'ts for E-Waste Management</h2>
                                        </div>
                                        {/* <!-- Category Widget --> */}

                                        {/* <!-- Archive Widget --> */}
                                        <div>
                                            <div className="do-widget user text-center">
                                                <h4>Hand Over E-Waste to Authorized Recyclers:</h4>
                                                <p className="member-time"> Always ensure that e-waste is handed over to authorized recyclers.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="do-widget user text-center">
                                                <h4>Do Not Dismantle:</h4>
                                                <p className="member-time"> Avoid dismantling electronic products yourself. Leave this to authorized service personnel.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="do-widget user text-center">
                                                <h4>Avoid Unauthorized Resale: </h4>
                                                <p className="member-time"> Do not sell e-waste to unauthorized agencies or scrap dealers.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="do-widget user text-center">
                                                <h4>Keep Spare Parts Protected: </h4>
                                                <p className="member-time"> Do not leave replaced spare parts exposed to open environments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default EWest