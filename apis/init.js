import cookies from 'js-cookie';
import axios from 'axios';
import {baseURL} from '../config';
import {setAuthToken, resetAuthToken} from '~/utils/auth';

axios.defaults.baseURL = baseURL;
console.log(baseURL)
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

const token = cookies.get('x-auth-token');

if (token){
  setAuthToken(token);
} else{
  resetAuthToken();
}
