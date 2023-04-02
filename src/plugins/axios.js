/* eslint-disable */
import axios from 'axios';
const instance = axios.create({
  // baseURL:process.env.VUE_APP_BASE_URL,
 
  headers: {
    'Content-Type': 'application/json'
  }
});


axios.interceptors.request.use(function (config) {
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default instance;