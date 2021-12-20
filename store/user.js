export const state = {
  data: {},
}

export const getters = {
  getUser(state) {
    return state.data
  },
}

export const actions = {
  setUser({ commit }, user) {
    commit('setUser', user)
  },
}

export const mutations = {
  setUser(state, user) {
    state.data = user
  },
}
