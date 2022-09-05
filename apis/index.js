import axios from 'axios';

export default {
  auth: {
    me: () => axios.get('user/profile'),
    login: (data) => axios.post('user/login', data),
    register: (data) => axios.post('user/register', data),
  },
}
