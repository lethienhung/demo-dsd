import Vuex from 'vuex'
import Cookie from "js-cookie"
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedTrees: [],
      loadedEmployees: [],
      water: 0
    },
    mutations: {
      addWater(state) {
        state.water++
      },
      subWater(state) {
        state.water--
      },
      setTrees(state, trees) {
        state.loadedTrees = trees
      },
      setEmployees(state, employees) {
        state.loadedEmployees = employees
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        let tree = context.$axios.$get('https://fir-dsd.firebaseio.com/tree.json')
          .then(data => {
            const treeArray = []
            for (const key in data) {
              treeArray.push({...data[key],id: key})
            }
            vuexContext.commit("setTrees", treeArray)
          }).catch(e => context.error(e));
        // let employee = context.$axios.$get('https://fir-dsd.firebaseio.com/employee.json')
        //   .then(data => {
        //     const employeeArray = []
        //     for (const key in data) {
        //       treeArray.push({...data[key],id: key})
        //     }
        //     vuexContext.commit("setEmployees", employeeArray)
        //   }).catch(e => context.error(e));
        //   return {tree :tree, employee: employee}

        return tree
      },

      addWater(context, tree) {
        context.commit('addWater', tree);
      },
      subWater(context, tree) {
        context.commit('subWater', tree);
      },
      setTrees(vuexContext, trees) {
        vuexContext.commit("setTrees", trees);
      },
      setEmployees(vuexContext, employees) {
        vuexContext.commit("setEmployees", employees);
      },

    },
    getters: {
      loadedTrees(state) {
        return state.loadedTrees;
      },
      loadedEmployees(state) {
        return state.loadedEmployees;
      },
      treeInfo(state,id) {
        return state.loadedTrees.find(id);
      }
    }
  });
};

export default createStore;
