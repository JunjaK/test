import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import testModule from './partials/testModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiData: null,
  },
  getters: {
    getApiData: (state) => state.apiData,
  },
  mutations: {
    SET_API_DATA: (state, payload) => {
      state.apiData = payload;
    },
  },
  actions: {
    setApiData(context) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/comments')
          .then((r) => {
            context.commit('SET_API_DATA', r.data);
            resolve(r);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
  modules: {
    TEST: testModule,
  },
});
