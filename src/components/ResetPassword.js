import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../baseUrl';

function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleReset = async () => {
        const res = await axios.post(`${BASE_URL}/reset-password/${token}`, { password });
        setMsg(res.data.message);
    };

    return (
        <div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
            <button onClick={handleReset}>Reset Password</button>
            <p>{msg}</p>
        </div>
    );
}
export default ResetPassword