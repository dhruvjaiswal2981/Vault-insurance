import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api', // Your backend URL https://vault-insurance.onrender.com
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
