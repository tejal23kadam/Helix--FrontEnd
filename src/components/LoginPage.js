
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { setIsAuth } from '../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import { setToast } from '../redux/slice/toastSlice';


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const studentData = {
        email: email,
        password: password
    };

    const CheckStudent = async () => {
        try {
            const res = await axios.post('http://localhost:2000/api/validateUser', studentData)
            console.log("res= ", res);
            if (res.data.status) {
                localStorage.setItem("token", res.data.data.token)
                  
                dispatch(setIsAuth(res.data.data.user));
              
                dispatch(setToast({ message: res.data.data.message, type: "success" }));
                // dispatch(setToast({message:res.data,type:"success"}));

                if (res.data.data.user.userType === 1) {
                    navigate("/admin", { state: { name: res.data.data.user.name, image: res.data.data.user.image[0].name } });
                }
                else {
                    navigate("/user", { state: { name: res.data.data.user.name } })
                }
            }

        }
        catch (error) {
            console.log("axios error " + error)
        }
    }

    return (
        <div className="sign-in__wrapper">
            <div className='container'>
                <div className='row  '>
                    <div className='d-md-flex'>
                        <div className='col-md-6 d-none d-md-block bg-color p-5 p-md-0 sign-up-left'>
                            <div className='text-wrap text-center container w-75'>
                                <div className='text text-white pl-lg-5 pr-lg-5 pt-md-5'>
                                    <h1>Welcome to Login</h1>
                                    <p className='text-center py-4'>Welcome to Helix where fashion knows no boundries and style is limitless. At Helix, we celebrate individuality , self-expression, and the dynamic fusion of street style with modern fashion.
                                    </p>
                                    <p>Don't have an account ?</p>
                                </div>
                                <button type="button" className="form-control btn-outline text-white btn-animation" ><Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link></button>

                            </div>
                        </div>
                        <div className='col-md-6 bg-white ml-3 mr-3 ml-md-0 mr-md-0 p-3 sign-up-right'>
                            <div className='text-center '>
                                <img className="w-md-100" src={require('../images/Borcelle2_1.png')} />
                                <h3>Log in</h3>
                            </div>
                            <div className='container mx-auto '>
                                <form>
                                    <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                        <label >Email Id</label>
                                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />

                                    </div>


                                    <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                        <label >Password</label>
                                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                                    </div>


                                    <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                        <button type="button" className="form-control btn bg-color btn-outline text-white btn-animation" onClick={() => CheckStudent()}>Sign  in1</button>
                                    </div>

                                    <div className='text-wrap p-1 text-center '>
                                        <div className='text '>
                                            <p>Don't have an account ?<Link to="/signup"> Sign Up</Link></p>
                                        </div>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default LoginPage