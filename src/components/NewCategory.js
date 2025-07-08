import { React, useEffect, useState } from 'react';
//import Modal from 'react-modal';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//toast.config;


const NewCategory = () => {

        const initialState = {
                name: '',
                remark: ''
        };

        const [selectedFile, setSelectedFile] = useState([]);
        const [show, setShow] = useState(false);
        const [formdata, setFormdata] = useState(initialState)

        const addCategory = async () => {
                try {
                        const tokenStr = localStorage.getItem('token');
                        const config = {
                                headers: {
                                        Authorization: `Bearer ${tokenStr}`

                                }
                        }
                        const res = await axios.post('http://localhost:2000/api/addnewCategory', formdata, config)
                        console.log("add new category api response  " + res)
                        setShow(false);

                }
                catch (error) {
                        console.log(error)
                }
        }
        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormdata({ ...formdata, [name]: value })
        }
        return (
                <div>
                        <Button variant="primary" onClick={() => setShow(true)}>
                                Add new Category
                        </Button>

                        <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                        >
                                <Modal.Header className='bg-color text-white text-center' closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                                Add new category
                                        </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <div className="container mt-3 ">

                                                {/* <div className="row bg-light p-5 p-sm-none "> */}

                                                <div className="col-sm-12 form-group">
                                                        <label>Category Name</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Category name" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >Remark</label>
                                                        <input type="text" className="form-control" name="remark" placeholder="remark" onChange={handleChange} required />
                                                </div>

                                                <div className="col-sm-12 form-group mb-0">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addCategory(); }} >Submit</button>
                                                </div>
                                        </div>

                                        {/* </div> */}
                                </Modal.Body>
                        </Modal>
                </div >
        )
}

export default NewCategory