import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { removeToast } from '../redux/slice/toastSlice';

const ToastProvider = ({ children }) => {
        const dispatch = useDispatch();
        const toastState = useSelector(state => state.toast);

        useEffect(() => {
                if (toastState.message && toastState.type) {
                        toast[toastState.type](toastState.message, {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                draggable: true,
                                pauseOnHover: true,
                                theme: "dark",
                                onClose: () => {
                                        dispatch(removeToast());
                                },
                        });
                }
        }, [toastState, dispatch]);

        return (
                <>
                        {children}
                        <ToastContainer />
                </>
        );
};

export default ToastProvider;
