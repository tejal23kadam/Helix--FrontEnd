
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slice/AuthSlice';
import { useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../baseUrl';

const AuthProvider = ({ children }) => {
        const dispatch = useDispatch();
        const verify = async () => {
                try {

                        const token = localStorage.getItem("token");
                        const config = {
                                headers: {
                                      Authorization: `Bearer ${token}`
                                }
                        }
                        const res = await axios.post(`${BASE_URL}/authVerify`, {}, config)
                        
                        if (res.data.status === true) {
                                dispatch(setIsAuth(res.data.data.data));
                        }
                }
                catch (error) {
                }
        }

        useEffect(() => {
                verify();
        }, [])

        return (
                <>
                        {children}
                </>
        )
}

export default AuthProvider;

