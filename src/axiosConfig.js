// axiosConfig.js
import axios from 'axios';

// Configure Axios to send credentials (cookies) with each request
axios.defaults.withCredentials = true;

export default axios;
