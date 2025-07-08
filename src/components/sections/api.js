import axios from 'axios';

export const fetchData = async () => {
    try {
        //const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
        const response = await axios.get('http://localhost:2000/api/getAllProduct')       
        return response.data.data.data;
    } catch (error) {
        throw error;
    }
};