
import api from '~/apis';
export const state = () => ({
  categories: null
});

export const mutations = {
  set (store, data) {
    store.categories = data;
  },

};

export const getters = {
  getAll(state) {
    return state.categories;
  }
}


export const actions = {
  fetch ({commit}) {
    console.log('get')
    return api.categories.getlist()
      .then(response => {
        commit('set', response.data);
        return response;
      });
  },

  update ({commit}, data) {

  },

};
