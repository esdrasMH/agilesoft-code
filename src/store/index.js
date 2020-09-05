import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const baseURL = 'http://157.245.138.232:9091';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    superheros: [],
    loading: true,
    notification: false,
    message: ''
  },
  mutations: {
    setSuperHeros(state, payload) {
      state.superheros = payload.filter((item) => item.id == 1 || item.puedeVolar);
    },
    setLoader(state) {
      state.loading = !state.loading
    },
    setNotification(state, payload) {
      state.notification = !state.notification
      state.message = payload
    }
  },
  actions: {
    getSuperHeros({ commit }) {
      return axios({
        method: 'get',
        url: `${baseURL}/api/v1/test/superheroes`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((result) => {
 
        if (result.data.data.length) {
          commit('setSuperHeros', result.data.data);
        } else {
          commit('setNotification', 'Oops! no hay Superhéroes disponibles');
        }
        commit('setLoader');

      }).catch((err) => {

        commit('setLoader');
        commit('setNotification', `Oops! ocurrio un error ${err.response.status}`);
        
      })
    },
  }
});
