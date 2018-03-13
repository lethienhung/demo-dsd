export const state = () => ({
  percentage: 0,
})

export const mutations = {
  add(state) {
    state.percentage++
  },
  sub(state) {
    state.percentage--
  },

}
