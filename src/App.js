import './App.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Settings from './components/Settings';
import AdminLayout from './layout/AdminLayout';
import NewProduct from './components/NewProducts';
import EnduserLayout from './layout/EnduserLayout';
import NewEmployee from './components/NewEmployee';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from 'react-redux';
import IndexPage from './components/sections/IndexPage';
import AboutUs from './components/sections/AboutUs';
import AudioCategory from './components/sections/AudioCategory';
import AppliancesCategory from './components/sections/AppliancesCategory';
import GamingCategory from './components/sections/GamingCategory';
import LaptopCategory from './components/sections/LaptopCategory';
import MobileCategory from './components/sections/MobileCategory';
import TvCategory from './components/sections/TvCategory';
import ShoppingCartData from './components/sections/ShoppingCartData';
import SingleProductDetailPage from './components/sections/SingleProductDetailPage';
import ContactUs from './components/sections/ContactUs';
import EWest from './components/sections/EWest';
import NewCategory from './components/NewCategory';
import { fetchDatasAsync } from './redux/slice/AllDataSlice';
import { ProductShippingDetails } from './components/ProductShippingDetail';
import CheckoutOrders from './components/CheckoutOrders';
import SearchingResultProducts from './components/sections/SearchingResultProducts';
import VerifyEmail from './components/VerifyEmail';
import ForgotPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword'

function App() {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);


  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data whenever the current page changes
    dispatch(fetchDatasAsync());

  }, []);
  return (
    <>
      <Routes>
        {/* <Route path='/' element={
          (!isAuth) ?
            (<EnduserLayout />)
            : (
              (user.userType === 1) ? <Navigate to="/admin" /> : <Navigate to="/user" />
            )} />
 */}

        <Route path='/' element={<EnduserLayout />} />


        <Route path='/signup' element={<RegistrationPage />} />
        {/* <Route path='/login' element={(!isAuth) && <LoginPage />} /> */}
        <Route path='/shippingDetail' element={(!isAuth) && <ProductShippingDetails />} />

        {isAuth && <Route path="/admin" element={(user.userType === 1) ? <AdminLayout /> : <Navigate to="/" />} >
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<NewProduct />} />
          <Route path="newEmployee" element={<NewEmployee />} />
          <Route path="newCategory" element={<NewCategory />} />
          <Route path="settings" element={<Settings />} />
        </Route>}
        {/* {isAuth && <Route path="/user" element={(user.userType === 0) ? <EnduserLayout /> : <Navigate to="/" />}> */}
        {isAuth && <Route path="/user" element={<IndexPage />}>

          <Route index element={<IndexPage />} />
        </Route>
        }
        <Route path="about" element={<AboutUs />} />
        <Route path="audio" element={<AudioCategory />} />
        <Route path="appliances" element={<AppliancesCategory />} />
        <Route path="gaming" element={<GamingCategory />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="laptop" element={<LaptopCategory />} />
        <Route path="mobile" element={<MobileCategory />} />
        <Route path="tv" element={<TvCategory />} />
        <Route path="product-details" element={<SingleProductDetailPage />} />
        <Route path="cartData" element={<ShoppingCartData />} />
        <Route path="eWest" element={<EWest />} />
        <Route path="checkoutOrders" element={<CheckoutOrders />} />
        <Route path="searchProduct" element={<SearchingResultProducts />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
