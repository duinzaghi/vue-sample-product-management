
import api from '~/apis';
export const state = () => ({
  products: null
});

export const mutations = {
  set (store, data) {
    store.products = data;
  },

};

export const getters = {
  getAll(state) {
    return state.products;
  }
}


export const actions = {
  fetch ({commit}) {
    return api.products.getlist()
      .then(response => {
        commit('set', response.data);
        return response;
      });
  },

  update ({commit}, data) {

  },

};
