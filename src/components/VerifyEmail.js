import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VerifyEmail() {
    const { token } = useParams();
    const [message, setMessage] = useState('Verifying...');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:2000/api/verify-email/${token}`);
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Verification failed. The link may be expired or invalid.');
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div className="container mt-5 text-center">
            <h3>{message}</h3>
        </div>
    );
}

export default VerifyEmail;
