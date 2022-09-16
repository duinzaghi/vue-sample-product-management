import axios from 'axios';

export default {
  auth: {
    me: () => axios.get('user/profile'),
    login: (data) => axios.post('user/login', data),
    register: (data) => axios.post('user/register', data),
    update: (id,data) => axios.put(`user/update/${id}`, data),
  },
  categories: {
    getlist: (searchData) => {
      const query = Object.keys(searchData)
      .map(e => e + "=" + encodeURIComponent(searchData[e]))
      .join("&");
      return axios.get(`categories?${query}`)
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
    },
    getOne: (id) => axios.get(`categories/${id}`),
    create: (data) => axios.post('categories', data),
    update: (id, data) => axios.put(`categories/${id}`, data),
    delete: (id) => axios.delete(`categories/${id}`),
  },
  products: {
    getlist: () => axios.get('product'),
    getOne: (id) => axios.get(`product/${id}`),
    create: (data) => axios.post('product', data),
    update: (id, data) => axios.put(`product/${id}`, data),
    delete: (id) => axios.delete(`product/${id}`),
  }
}
