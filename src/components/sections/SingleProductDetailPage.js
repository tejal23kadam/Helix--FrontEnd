
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function SingleProductDetailPage({ isOpen, handleClose, productId }) {
    const data = useSelector((state) => state.allData.data);
    const user = useSelector((state) => state.auth.user);

    const handleAddToCart = async (productId) => {
        if (user && user._id) {
            try {
                const tokenStr = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Authorization": `Bearer ${tokenStr}`
                    }
                }
                const payload = {
                    userId: user._id,
                    products: [{
                        product: productId,
                        quantity: 1,
                    }]
                };
                console.log("res from single product detail page  = " + JSON.stringify(payload))
                const res = await axios.post('http://localhost:2000/api/addCart', payload, config)
                //console.log("res from single product detail page  = " + JSON.stringify(res))
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
             alert("Login required to continue. Please sign in.")
        }
    };

    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header className='bg-color text-white text-center' closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Product Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <div className='row '>
                        {
                            (data) ? (
                                data.filter(item => item._id === productId).map(product => {
                                    return (

                                        <div className='allProdutDiv'>
                                            <section >
                                                <div >
                                                    <div className="main-info">
                                                        <div className="item-image-main">
                                                            <img src={product.image[0].path} alt="Product" />
                                                        </div>

                                                        <h4>{product.title}</h4>
                                                        <div className='discountDiv'>
                                                            <h5><s>{product.price}</s> </h5>
                                                            <h4>${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h4>
                                                            <p className="discount">{product.discount}%</p>
                                                            <p>off</p>

                                                        </div>
                                                        <h6>Brand : <span>{product.brand}</span></h6>

                                                        <h6>Color : <span>{product.color}</span></h6>
                                                    </div>

                                                    <div className="select-items">
                                                        <h5>About This Product</h5>
                                                        <p>{product.description}</p>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-warning w-100" type="button" onClick={() => { handleAddToCart(product._id) }} >ADD TO CART</button>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    );
                                })) :
                                (<h1>OOPs!!there is some error!!</h1>)
                        }
                    </div>
                </div>
                {/* </div> */}
            </Modal.Body>
        </Modal>


    )
}
export default SingleProductDetailPage

