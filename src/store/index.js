import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    data: {},
    total: 0,
  }),
  mutations: {
    setData(state, data) {
      state.data = data;
      state.total = Object.keys(state.data).length;
    },
  },
  actions: {
    grupByNode({ commit }, data) {
      try {
        let obj = {};

        const key = [...new Set(data.map((v) => v.node))];

        for (const k of key) {
          obj[k] = data.filter((v) => v.node == k);
        }

        commit("setData", obj);
      } catch (error) {
        console.log(error);
      }
    },
    addNewData({ state, commit }, data) {
      try {
        let obj = state.data;

        if (`${data.node}` in obj) {
          obj[data.node].push(data);
        } else {
          obj[data.node] = [data];
        }

        commit("setData", obj);
      } catch (error) {
        console.log(error);
      }
    },
    resetData({ commit }) {
      try {
        commit("setData", {});
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
