
export const state = () => ({
  counter: 0,

})

export const mutations = {
  add(state) {
    state.counter++
  },
  sub(state) {
    state.counter--
  },

}
