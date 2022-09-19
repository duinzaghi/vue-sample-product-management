
import api from '~/apis';
export const state = () => ({
  products: null,
  searchData: {
    page: 0,
    size: 10,
    keyword: "",
    sortBy: "",
    sortType: "",
  },
  pagination: {},
});

export const mutations = {
  set (state, data) {
    state.products = data;
  },
  createProductSuccess (state, data) {
    state.products.push(data)
  },
  pagination(state) {
    return state.pagination;
  },
  fetchSuccess(state, payload) {
    state.products = payload.data;
    state.pagination.currentPage = payload.currentPage
    state.pagination.totalPage = payload.totalPage
    state.pagination.totalRow = payload.totalRow
  },
  pageSize(state, payload) {
    state.pagination.pageSize = payload
  },
};

export const getters = {
  getAll(state) {
    return state.products;
  },
  pagination(state) {
    return state.pagination;
  }
}


export const actions = {
  fetch ({commit, state}) {
    return api.products.getlist()
      .then(response => {
        commit('fetchSuccess', response.data);
        commit("pageSize", state.searchData.size);
        return response.data;
      });
  },

  pagination({ commit, state }, data) {
    return new Promise((resolve, reject) =>{
      api.categories.getlist({...state.searchData, page: data.page})
        .then(res => {
          commit("fetchSuccess", res.data);
          commit("pageSize", state.searchData.size);
          resolve(res.data);
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  create ({commit}, data) {
    return new Promise((resolve, reject)=>{
      api.products.create(data)
      .then(res => {
        commit("createProductSuccess", res.data);
        resolve(res.data);
      })
      .catch(err => {
        alert("Failed to create");
        reject(err)
      })
    })
  },

  update ({commit}, data) {

  },

};
