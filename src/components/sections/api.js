import axios from 'axios';

export const fetchData = async () => {
    try {
        //const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
       // const response = await axios.get('http://localhost:2000/api/getAllProduct') 
       const response = await axios.get('https://chimerical-kelpie-e57963.netlify.app/.netlify/functions/index/getAllProduct')       
       
        return response.data.data.data;
    } catch (error) {
        throw error;
    }
};