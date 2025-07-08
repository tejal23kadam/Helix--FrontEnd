import { useEffect, useState } from 'react';
//import Modal from 'react-modal';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
//toast.config;


const NewProduct = () => {

        const initialState = {
                title: '',
                price: '',
                description: '',
                brand: '',
                model: '',
                color: '',
                category: '',
                discount: 0

        };

        const [imgPrev, setImgPrev] = useState([]);
        const [selectedFile, setSelectedFile] = useState([]);
        const [show, setShow] = useState(false);
        const [formdata, setFormdata] = useState(initialState)
        const [categoryData, setCategoryData] = useState([])
        const [title, setTitle] = useState('');
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState('');
        const [brand, setBrand] = useState('');
        const [modal, setModal] = useState('');
        const [color, setColor] = useState('');
        const [discount, setDiscount] = useState('');
        const [category, setCategory] = useState("nmnmsdn")

        const [allAPIData, setAllApiData] = useState([]);
        const handleImageChange = (e) => {

                const files = e.target.files;
                const fileArray = Array.from(files);

                const imagePreview = fileArray.map(file => {
                        const reader = new FileReader()
                        return new Promise((resolve) => {
                                reader.onloadend = () => {
                                        resolve({
                                                src: reader.result,
                                                name: file.name
                                        })
                                }
                                reader.readAsDataURL(file)
                        })
                })
                Promise.all(imagePreview).then(image => {
                        setImgPrev(image)

                        setSelectedFile(fileArray)

                })

        }

        useEffect(() => {
                getAllCategory();
                getAllAPIData();
        }, [])

        const addProduct = async () => {
                try {
                        const allFormData = new FormData();
                        allFormData.append("folder", "productImg");

                        selectedFile.forEach(file => {
                                allFormData.append('image', file)
                        })

                        for (let key in formdata) {
                                allFormData.append(key, formdata[key])
                        }
                        allFormData.forEach((value, key) => {
                                console.log("form data key and value " + key, value);
                        });

                        const tokenStr = localStorage.getItem('token');
                        const config = {
                                headers: {
                                        'Content-Type': 'multipart/form-data',
                                        "Authorization": `Bearer ${tokenStr}`
                                }
                        }
                        const res = await axios.post('http://localhost:2000/api/addnewProduct', allFormData, config)
                        // console.log("add new product api response ] " + res)
                        setShow(false);


                }
                catch (error) {
                        console.log(error)
                }
        }

        const getAllCategory = async () => {

                try {
                        const res = await axios.get('http://localhost:2000/api/getAllCategory')
                        //  console.log("get all category api response  " + JSON.stringify(res.data.data.data))
                        setCategoryData(res.data.data.data);
                }
                catch (error) {
                        console.log(error)
                }
        }


        const getAllAPIData = async () => {

                try {
                        const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
                        // console.log("get all api data  response  " + JSON.stringify(res.data.products))
                        setAllApiData(res.data.products);
                }
                catch (error) {
                        console.log(error)
                }
        }


        const handleChange = (e) => {
                const { name, value } = e.target;
                console.log("name " + name)
                console.log("valuse" + value)
                setFormdata({ ...formdata, [name]: value })
        }
        const showData = (e) => {

                let productData = allAPIData.filter((data) => data.id === 149);
                console.log("id = " + productData[0].id);
                setTitle(productData[0].title);
                setPrice(productData[0].price);
                setDescription(productData[0].description);
                setBrand(productData[0].brand);
                setModal(productData[0].model);
                setColor(productData[0].color);
                setDiscount(productData[0].discount);
                setCategory(productData[0].category);
        }
        return (
                <div>
                        <Button variant="primary" onClick={() => setShow(true)}>
                                Add new product
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


                                                <div className="col-sm-12 form-group">
                                                        <label>Title</label>
                                                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        {imgPrev.map((image, index) => (
                                                                <div key={index}>
                                                                        <img src={image.src} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '10px' }} />
                                                                </div>
                                                        ))}
                                                        <input type='file' name="image" accept='image/*' multiple onChange={handleImageChange} style={{ height: "200px", width: "200px" }}></input>
                                                        <Button type="button" > submit</Button>
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>price</label>
                                                        <input type="number" className="form-control" name="price" placeholder="price" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >Description</label>
                                                        <input type="text" className="form-control" name="description" placeholder="description" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >brand</label>
                                                        <input type="text" className="form-control" name="brand" placeholder="brand" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >model</label>
                                                        <input type="text" className="form-control" name="model" placeholder="model" onChange={handleChange} required />
                                                </div>

                                                <div className="col-sm-12 form-group">
                                                        <label >color</label>
                                                        <input type="text" className="form-control" name="color" placeholder="color" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >discount</label>
                                                        <input type="number" className="form-control" name="discount" placeholder="discount" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>Category</label>
                                                        <select className="form-control" name="category" onChange={handleChange}>
                                                                {categoryData.map(option => (
                                                                        <option value={option.catName}>{option.catName}</option>
                                                                ))}
                                                        </select>
                                                </div>

                                                <div className="col-sm-12 form-group mb-0">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addProduct(); }} >Submit</button>
                                                </div>

                                        </div>

                                </Modal.Body>

                                {/* this codeis written for ht temporary purpose */}


                                {/* <Modal.Body>
                                        <div className="container mt-3 ">


                                                <div className="col-sm-12 form-group mb-0">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={(e) => { showData(); }} >show data</button>
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>Title</label>
                                                        <input type="text" value={title} className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        {imgPrev.map((image, index) => (
                                                                <div key={index}>
                                                                        <img src={image.src} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '10px' }} />
                                                                </div>
                                                        ))}
                                                        <input type='file' name="image" accept='image/*' multiple onChange={handleImageChange} style={{ height: "200px", width: "200px" }}></input>
                                                        <Button type="button" > submit</Button>
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>price</label>
                                                        <input type="text" value={price} className="form-control" name="price" placeholder="price" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >Description</label>
                                                        <input type="text" value={description} className="form-control" name="description" placeholder="Description" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >brand</label>
                                                        <input type="text" value={brand} className="form-control" name="brand" placeholder="brand" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >modal</label>
                                                        <input type="text" value={modal} className="form-control" name="modal" placeholder="modal" onChange={handleChange} required />
                                                </div>

                                                <div className="col-sm-12 form-group">
                                                        <label >color</label>
                                                        <input type="text" className="form-control" value={color} name="color" placeholder="color" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >discount</label>
                                                        <input type="text" className="form-control" value={discount} name="discount" placeholder="discount" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>Category</label>
                                                        <input type="text" className="form-control" value={category} name="category" placeholder="category" onChange={handleChange} required />                                                </div>

                                                <div className="col-sm-12 form-group mb-0">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addProduct(); }} >Submit</button>
                                                </div>
                                        </div>


                                </Modal.Body> */}
                                {/* this code ends ovr here */}
                        </Modal>
                </div >
        )
}

export default NewProduct 