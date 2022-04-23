import axios from 'axios';
import { API_PATH } from '../../constants/global';

export default {
  refreshToken: refreshToken => new Promise((resolve, reject) => {
    axios.create({
      baseURL: API_PATH,
      timeout: 1000
    }).post('refresh-token', { refreshToken }).then((res) => {
      resolve(res);
    }).catch(err => reject(err));
  })
};
