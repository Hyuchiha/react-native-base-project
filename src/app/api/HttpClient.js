import axios from 'axios';
import { API_PATH } from '../constants/global';
// import AuthService from '../services/Auth/AuthService';

// Add a request interceptor
const HttpClient = axios.create({
  baseURL: API_PATH,
  timeout: 4000
});

HttpClient.interceptors.request.use((config) => {
  // Do something before request is sent
  // If the header does not contain the token and the url not public, redirect to login
  // const accessToken = api.getToken();

  // if token is found add it to the header
  // if (accessToken) {
  //   if (config.method !== 'OPTIONS') {
  //     Object.assign(config.headers, { authorization: `Bearer ${accessToken}` });
  //   }
  // }
  return config;
}, error => Promise.reject(error)); // Do something with request error

// Refresh the token if expired and retry the request
HttpClient.interceptors.response.use(undefined, (err) => {
  if (err.response.status === 400 && err.response.data.error.message === 'jwt expired') {
    // const currentRefreshToken = api.getRefreshToken();
    //
    // // Make the refresh
    // return AuthService.refreshToken(currentRefreshToken).then((response) => {
    //   const { token, refreshToken } = response.session.session;
    //   // Update the params in the cache and config the header for retry
    //   return api.updateTokens(token, refreshToken).then(() => {
    //     Object.assign(err.config.headers, { authorization: `Bearer ${token}` });
    //     return HttpClient.request(err.config);
    //   });
    // });
  }

  return Promise.reject(err);
});

export default HttpClient;
