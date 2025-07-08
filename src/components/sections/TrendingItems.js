import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductIDFilter } from '../../redux/slice/ProductIdSlice';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function TrendingItems() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.allData.data);

    const [randomItems, setRandomItems] = useState([]);
    const user = useSelector((state) => state.auth.user);
    const [buttonText, setButtonText] = useState({});

    const breakpoints = {
        0: { slidesPerView: 1 },
        376: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    };

    useEffect(() => {
        if (data.length) {
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            setRandomItems(shuffled.slice(0, 7));
        }
    }, [data]);

    const handleAddToCart = async (productId) => {
        if(user && user._id){
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
            const res = await axios.post('http://localhost:2000/api/addCart', payload, config)
            console.log("response for add cart api  " + JSON.stringify(res))
            setButtonText(prev => ({ ...prev, [productId]: { disabled: true, text: 'PRODUCT ADDED!!' } }));
        }
        catch (error) {
            console.log(error)
        }
    }
    else{
        alert("Login required to continue. Please sign in.")
    }
    };
    if (!data || data.length === 0) {
        return <p>Loading trending items...</p>;
    }

    return (
        <section className="popular-deals section bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Trending Items</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <Swiper
                            spaceBetween={0}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="mySwiper custom-swiper"
                            breakpoints={breakpoints}
                        >
                            {randomItems.length > 0 ? (
                                randomItems.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="card position-relative mb-5">
                                            <span className="brand-badge">{item.discount}% off</span>
                                            <Link to="/product-details" onClick={() => dispatch(addToProductIDFilter(item.id))}>
                                                <div className="trending-image-container">
                                                    <img
                                                        className="img-fluid card-img-top"
                                                        src={item.image[0]?.path || "/fallback-image.jpg"}
                                                        alt={item.title}
                                                    />
                                                </div>
                                            </Link>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-around slider-font-size">
                                                    <span className="rating-badge">
                                                        <s>${item.price}</s>
                                                    </span>
                                                    <span className="text-decoration-none">
                                                        ${Math.trunc(item.price - (item.price * item.discount) / 100)}
                                                    </span>
                                                </div>
                                                <p className="mt-2 mb-3 overme">{item.title}</p>
                                                <button
                                                    className="btn btn-warning w-100"
                                                    onClick={() => handleAddToCart(item._id)}
                                                    disabled={buttonText[item._id]?.disabled}                                                >
                                                    {buttonText[item._id]?.text || 'ADD TO CART'}
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <h3>No trending items available</h3>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingItems;
