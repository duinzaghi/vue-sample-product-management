import axios from 'axios';

export function setAuthToken (token) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

export function resetAuthToken () {
  // eslint-disable-next-line dot-notation
  delete axios.defaults.headers.common['Authorization'];
}
