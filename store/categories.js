
import api from '~/apis';
export const state = () => ({
  categories: null,
  searchData: {
    page: 0,
    size: 10,
    keyword: "",
    sortBy: "",
    sortType: "",
  },
  pagination: {},
  searchDataAll: {
    isAll: true
  }
});

export const mutations = {
  pagination(state) {
    return state.pagination;
  },
  fetchSuccess(state, payload) {
    state.categories = payload.data;
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
    return state.categories;
  },
  pagination(state) {
    return state.pagination;
  }
}


export const actions = {
  fetch ({commit, state}) {
    return new Promise((resolve, reject) =>{
      return api.categories.getlist(state.searchData)
        .then(response => {
          commit("fetchSuccess", response);
          commit("pageSize", state.searchData.size);
          resolve(response);
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  pagination({ commit,state }, data) {
    return new Promise((resolve, reject) =>{
      api.categories.getlist({...state.searchData, page: data.page})
        .then(res => {
          commit("fetchSuccess", res);
          commit("pageSize", state.searchData.size);
          resolve(res);
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  fetchAll ({commit, state}) {
    return new Promise((resolve, reject) =>{
      return api.categories.getlist(state.searchDataAll)
        .then(response => {
          commit("fetchSuccess", response);
          resolve(response);
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  update ({commit}, data) {

  },

};
