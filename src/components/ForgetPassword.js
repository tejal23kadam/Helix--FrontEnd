import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:2000/api/forget-password', { email });
        setMsg(res.data.message);
    };

    return (
        <div className='container'>
            <div className='row col-6 text-center justify-content-center'>
                <div>
                    <h3>Forget Password</h3>
                </div>
                <div className='col-12'>
                    <input value={email} className="form-control my-2 my-lg-0" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary active w-100" onClick={handleSubmit}>Send Reset Link</button>
                </div>
                <p>{msg}</p>
            </div>
        </div>
    );
}

export default ForgotPassword
