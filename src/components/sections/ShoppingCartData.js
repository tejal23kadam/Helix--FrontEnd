import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CheckOutModal from './CheckOutModal';
import axios from 'axios';
import Header from '../Header';

function ShoppingCartData() {
    const [showModal, setShowModal] = useState(false);
    const data = useSelector((state) => state.cart.orders);
    const user = useSelector((state) => state.auth.user);
    const [cartOrdersData, setCartOrdersData] = useState([]);


    const navigate = useNavigate();
    const handleOpen = (id) => {
        setShowModal(true);
    };

    const navigateToConfirmOrderPage = () => {
        navigate("/checkoutOrders", { state: { orderData: cartOrdersData } });
    }

    console.log("carts data here " + JSON.stringify(data))
    const getUserCartDetail = async () => {
        console.log("thi is called")
        try {

            const res = await axios.get('http://localhost:2000/api/getUserCartDetail', {
                params: {
                    userId: user._id
                }
            })
            console.log("res get user order detail= " + JSON.stringify(res.data.data.data.products));
            setCartOrdersData(res.data.data.data.products);

        }
        catch (error) {
            console.log("error = " + error)
        }
    }

    useEffect(() => {
        
        if (user && user._id) {
            getUserCartDetail();
        }
    }, [user]);

    const removeProductFromCart = async (id) => {
        console.log("this is id " + id);
        try {
            const payload = {
                userId: user._id,
                productId: id
            };
            const res = await axios.post('http://localhost:2000/api/removeProductFromCart', payload)
            console.log("remove product from cart" + JSON.stringify(res));
            getUserCartDetail();
        }
        catch (error) {
            console.log("error = " + error)
        }
    }

    const updateQuantity = async (productId, change) => {
        try {
            cartOrdersData.reduce((totalPrice, item) => {
                return totalPrice += item.product.price;
            }, 0)


            console.log("Sending quantity change:", change);
            const res = await axios.put(`http://localhost:2000/api/updateProductQuantity`, {
                userId: user._id,
                productId: productId,
                change: change,
            });

            console.log("Response from backend:", res.data);
            getUserCartDetail(); // re-fetch updated cart
        } catch (error) {
            console.error("Failed to update quantity", error);
        }
    };

    return (
        <div>
            <Header />
            <section className="page-title">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Shopping Cart</h3>

                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {
                (cartOrdersData.length > 0) ?
                    (<div className="pt-4 pb-4 container" >
                        <h1 className='text-center'>Cart Items</h1>
                        <div className="mt-5 gap-3 gap-lg-0 row">
                            <div className="col-lg-8 col-md-12" >
                                <div className="card">
                                    {
                                        cartOrdersData.map((item) => {
                                            return (
                                                <div key={item._id} className="mt-2 store-item bottom-line pb-3" >
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img className="image-store" src={item.product.image[0].path} alt='no data' />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                                                                <h5>{item.product.title}</h5>

                                                            </div>

                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Original Price : ${item.product.price} </h6>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                {
                                                                    (item.product.discount) ? (
                                                                        <h6> Discount : {item.product.discount}% </h6>)
                                                                        : (
                                                                            <h6> Discount : NIL </h6>
                                                                        )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between mb-3" >
                                                                {(item.product.discount) ? (
                                                                    < h6 > Total Price : ${Math.trunc(item.product.price - ((item.product.price * item.product.discount) / 100))}</h6>)
                                                                    : (
                                                                        < h6 > Total Price : ${item.product.price} </h6>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-2">

                                                                    <button className="btn-list btn btn-xs btn-default" onClick={() => removeProductFromCart(item.product._id)} >
                                                                        <i className="bi bi-trash" ></i>
                                                                        Remove Item
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mt-2">

                                                            <div className="btn-quantity-container d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                                                <button className="btn-quantity btn btn-default" onClick={() => updateQuantity(item.product._id, -1)} disabled={item.quantity <= 1}>−</button>
                                                                <span className="p-quantiry">{item.quantity}</span>
                                                                <button className="btn-quantity btn btn-default" onClick={() => updateQuantity(item.product._id, 1)}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="gap-3 row">
                                    <div>
                                        <div className="card">
                                            <h4>The total amount of</h4>
                                            <div className="store-item mt-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="p-total-label" >No. of Items</p>
                                                    </div>
                                                    <div className="col-6" data-reactid=".0.1.1.0.0.0.1.1.1">
                                                        <p className="p-total">{
                                                            cartOrdersData.reduce((totalQty, item) => {
                                                                return totalQty += item.quantity;
                                                            }, 0)
                                                        }</p>
                                                    </div>
                                                </div>
                                                <div className="mt-2 row">
                                                    <div>
                                                        <div className="list-store d-flex align-items-center justify-content-between">
                                                            <p>Sub Total</p>
                                                            <p>
                                                                ${
                                                                    cartOrdersData.reduce((totalPrice, item) => {
                                                                        const price = item.product.price;
                                                                        const discount = item.product.discount || 0;
                                                                        const discountedPrice = price - (price * discount / 100);
                                                                        return totalPrice + (discountedPrice * item.quantity);
                                                                    }, 0).toFixed(2)
                                                                }</p>
                                                        </div>
                                                        <div className="bottom-line" ></div>
                                                    </div>
                                                </div>

                                                <div className="mt-2 row">
                                                    <div className="col-6">
                                                        <p className="p-total-label" >total amount</p>
                                                    </div>
                                                    <div className="col-6" data-reactid=".0.1.1.0.0.0.1.1.1">
                                                        <p className="p-total">

                                                            ${cartOrdersData.reduce((totalPrice, item) => {
                                                                const price = item.product.price;
                                                                const discount = item.product.discount || 0;
                                                                const discountedPrice = price - (price * discount / 100);
                                                                return totalPrice + (discountedPrice * item.quantity);
                                                            }, 0).toFixed(2)
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-1 row">
                                                    <div>
                                                        <button type="button" className="w-100 btn btn-md btn-primary btn-block" onClick={handleOpen}>Go To Checkout</button>
                                                    </div>
                                                </div>
                                                <div className="mt-1 row">
                                                    <div>
                                                        <button type="button" className="w-100 btn btn-md btn-primary btn-block" onClick={navigateToConfirmOrderPage}>Check Confirm Orders</button>
                                                    </div>
                                                </div>
                                                <CheckOutModal orderData={cartOrdersData} isOpen={showModal} handleClose={() => setShowModal(false)} ></CheckOutModal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    ) : (<div className='text-center'>
                        <h1 className="text-center mt-5" >oops!!   Your Cart is Empty</h1>
                        <button type="button" className="text-center btn btn-md btn-primary btn-block" onClick={navigateToConfirmOrderPage}>Check Confirm Orders</button>
                    </div>
                    )
            }
        </div >
    )
}
export default ShoppingCartData