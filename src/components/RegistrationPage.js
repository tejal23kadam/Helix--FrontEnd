import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setToast } from '../redux/slice/toastSlice';

function RegistrationPage({ setSignIn, handleClose }) {
  const initialState = {
    name: '',
    email: '',
    password: '',
    ConfirmPassword: '',
    userType: ''
  };

  const [imgPrev, setImgPrev] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [formdata, setFormdata] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);

    const imagePreview = fileArray.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve({ src: reader.result, name: file.name });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePreview).then(images => {
      setImgPrev(images);
      setSelectedFile(fileArray);
    });
  };

  const addUser = async () => {
    if (formdata.password !== formdata.ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const allFormData = new FormData();
    allFormData.append("folder", "userImg");

    selectedFile.forEach(file => {
      allFormData.append('image', file);
    });

    for (let key in formdata) {
      allFormData.append(key, formdata[key]);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    try {
      const res = await axios.post('http://localhost:2000/api/addUser', allFormData, config);
      dispatch(setToast({ message: res.data.data.message, type: "success" }));
      handleClose(); // close modal on success
      setSignIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Profile Image Upload */}
      <div className="mb-3 text-center">
        <input
          type="file"
          accept="image/*"
          name="image"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          ref={(input) => (window.profileInput = input)}
        />
        <div
          onClick={() => window.profileInput.click()}
          className="rounded-circle overflow-hidden mx-auto"
          style={{
            width: '150px',
            height: '150px',
            cursor: 'pointer',
            border: '2px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
          }}
        >
          {imgPrev.length > 0 ? (
            <img
              src={imgPrev[0].src}
              alt={imgPrev[0].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span className="text-muted">Click to upload</span>
          )}
        </div>
      </div>

      {/* Input Fields */}
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>User Type</label>
        <input
          type="number"
          name="userType"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <button
          type="button"
          className="form-control btn bg-color btn-outline text-white btn-animation"
          onClick={addUser}
        >
          Sign In
        </button>
      </div>

    </>
  );
}

export default RegistrationPage;
