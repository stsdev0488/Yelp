import axios from 'axios';
import { API_KEY, API_ENDPOINT } from '../constants/configs';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default axiosInstance;
