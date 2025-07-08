import { React, useState } from 'react';
//import Modal from 'react-modal';
import axios from 'axios'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//toast.config;


function NewEmployee() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");    
    const [address, setAddress] = useState("");
   
    const employee = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobileNo,
        address: address,
        email: email,
        password: password,

    };
    const addEmployee = async () => {
        try {

            const tokenStr = localStorage.getItem('token');
            const config = {
                headers: {
                    "Authorization": `Bearer ${tokenStr}`
                }
            }
            const res = await axios.post('http://localhost:2000/api/addnewEmployee', employee, config)



            console.log("res api " +res)
            setShow(false);
            alert("successfully added")

        }
        catch (error) {
            console.log(error)
        }
    }

    const notify = () => {

        toast.success("success notification ! ", {
            position: "top-right"
        });
    }
    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
                add new employee
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className='bg-color text-white text-center' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Welcome To Registration
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-3 ">

                        {/* <div className="row bg-light p-5 p-sm-none "> */}

                        <div className="col-sm-12 form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First name." onChange={e => setFirstName(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name." onChange={e => setLastName(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group">
                            <label >Mobile No.</label>
                            <input type="mobile" className="form-control" placeholder="Mobile No." onChange={e => setMobileNo(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group">
                            <label >Address</label>
                            <input type="address" className="form-control" placeholder="Address" onChange={e => setAddress(e.target.value)} required />
                        </div>

                        <div className="col-sm-12 form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email." onChange={e => setEmail(e.target.value)} required />
                        </div>

                        <div className="col-sm-12 form-group">
                            <label >Password</label>
                            <input type="Password" name="password" className="form-control" placeholder="Enter your password." onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group mb-0">
                            <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addEmployee(); }} >Submit</button>
                        </div>
                    </div>

                    {/* </div> */}
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default NewEmployee