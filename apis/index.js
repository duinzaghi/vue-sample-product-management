import axios from 'axios';

export default {
  auth: {
    me: () => axios.get('user/profile'),
    login: (data) => axios.post('user/login', data),
    register: (data) => axios.post('user/register', data),
    update: (id,data) => axios.put(`user/update/${id}`, data),
  },
  categories: {
    getlist: () => axios.get('categories'),
  }
}
