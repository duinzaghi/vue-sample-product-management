import cookies from 'js-cookie';
import api from '~/apis';
import {setAuthToken, resetAuthToken} from '~/utils/auth';
export const state = () => ({
  user: null
});

export const mutations = {
  setUser (store, data) {
    store.user = data;
  },
  resetUser (store) {
    store.user = null;
  }
};

export const getters = {
  profile(state) {
    return state.user;
  }
}


export const actions = {
  fetch ({commit}) {
    return api.auth.me()
      .then(response => {
        commit('setUser', response.data);
        return response;
      });
  },

  login ({commit}, data) {
    return api.auth.login(data)
    .then(response => {
        console.log(response);
        if(response.data){
          const result = response.data;
          const token = result.access_token;
          // Set fullstory
          setAuthToken(token);
          cookies.set('x-auth-token', token, {expires: 7, path: "/"});
        }
        return response;
      });
  },

  register ({commit}, data) {
    return api.auth.register(data)
    .then(response => {
      console.log(response.data);
      if(response.data){
        const result = response.data;
      }
        return response;
      });
  },

  logout (){
    cookies.remove('x-auth-token', { path: "/" });
    resetAuthToken();
    return Promise.resolve();
  },

  profile() {
    return api.auth.me()
      .then(response => {
        return response.data;
      });
  },
};
