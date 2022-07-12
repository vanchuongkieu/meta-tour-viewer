import axios from 'axios';

const httpOption = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpOption.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

httpOption.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default httpOption;
