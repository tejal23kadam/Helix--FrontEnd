import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


import axios from 'axios';
import Header from './Header';


const CheckoutOrders = ({orderData}) => {

    const user = useSelector((state) => state.auth.user);
    const [cartOrdersData, setCartOrdersData] = useState([]);
    console.log("orderdata " + orderData)
    const getUserOrderDetail = async () => {
        console.log("rhis is called")
        try {
            const res = await axios.get('http://localhost:2000/api/getUserOrderDetail', {
                params: {
                    userId: user._id
                }
            })
            console.log("res get user order = " + JSON.stringify(res.data.data.data[0]));
            setCartOrdersData(res.data.data.data[0]);

        }
        catch (error) {
            console.log("error = " + error)
        }
    }

    useEffect(() => {

        if (user && user._id)
            getUserOrderDetail();
    }, [user]);
    if (!cartOrdersData) return <div>Loading...</div>;



    return (
        <div>
            <Header />
            <section className="page-title">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Dispatched Items</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {
                (cartOrdersData.length > 0) ?
                    (<div className="pt-4 pb-4 container" >
                        <h1 className='text-center'>Order List</h1>
                        <div className="mt-5 gap-3 gap-lg-0 row">
                            <div className="col-12" >
                                <div className="card">
                                    {
                                        cartOrdersData.products.map((product) => {
                                            return (
                                                <div className="mt-2 store-item bottom-line pb-3" >
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img className="image-store" src={product.image[0].path} alt='no data' />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                                                                <h5>{product.title}</h5>

                                                            </div>

                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Original Price : ${product.price} </h6>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                {
                                                                    (product.discount) ? (
                                                                        <h6> Discount : {product.discount}% </h6>)
                                                                        : (
                                                                            <h6> Discount : NIL </h6>
                                                                        )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between mb-3" >
                                                                {(product.discount) ? (
                                                                    < h6 > Total Price : ${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h6>)
                                                                    : (
                                                                        < h6 > Total Price : ${product.price} </h6>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Total Quantity : {product.quantity} </h6>
                                                            </div>


                                                        </div>


                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div >
                    ) : (
                        <h1 className="text-center mt-5" >oops!!   Your Cart is Empty</h1>
                    )
            }
        </div >
    )
}
export default CheckoutOrders