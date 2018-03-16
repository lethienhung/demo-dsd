import Vuex from 'vuex'
import Cookie from "js-cookie"
import axios from 'axios'
import firebase from 'firebase'
import fetch from 'isomorphic-fetch'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedTrees: [],
      loadedEmployees: [],
      water: 0,
      token: null
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
      addTree(state, tree) {
        state.loadedTrees.push(tree);
      },
      setEmployees(state, employees) {
        state.loadedEmployees = employees
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
       
        let tree = context.$axios.$get('https://fir-dsd.firebaseio.com/tree.json')
          .then(data => {
            const treeArray = []
            for (const key in data) {
              treeArray.push({ ...data[key],
                id: key
              })
            }
            vuexContext.commit("setTrees", treeArray)
          }).catch(e => context.error(e));

        return tree
      },
      addWater(context, tree) {
        context.commit('addWater', tree);
      },
      subWater(context, tree) {
        context.commit('subWater', tree);
      },
      addTree(vuexContext, tree) {
        const createdTree = {
          ...tree,
          updatedDate: new Date()
        };
        return this.$axios.$post(
            "https://fir-dsd.firebaseio.com/tree.json?auth=" +
            vuexContext.state.token,
            createdTree
          )
          .then(data => {
            vuexContext.commit("addTree", { ...createdTree,
              id: data.treeId
            });
          })
          .catch(e => console.log(e));
      },
      setTrees(vuexContext, trees) {
        vuexContext.commit("setTrees", trees);
      },
      setEmployees(vuexContext, employees) {
        vuexContext.commit("setEmployees", employees);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBvhVZ4GZC7wQo9sLEl5rJov8tot2mYJuA";
        if (!authData.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBvhVZ4GZC7wQo9sLEl5rJov8tot2mYJuA";
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit("setToken", result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }

    },
    getters: {
      loadedTrees(state) {
        return state.loadedTrees;
      },
      loadedEmployees(state) {
        return state.loadedEmployees;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
