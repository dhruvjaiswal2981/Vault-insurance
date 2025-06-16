import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vault-insurance.onrender.com/api', // Your backend URL https://vault-insurance.onrender.com
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
