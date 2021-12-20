export const state = {
  items: []
}

export const getters = {
  getToast (state) {
    return state.items
  }
}

export const actions = {
  pushNotify ({ commit }, item) {
    commit('pushNotify', item)
  },
  dissmisNotify ({ commit }, index) {
    commit('dissmisNotify', index)
  }
}

export const mutations = {
  pushNotify (state, item) {
    state.items.push(item)
  },
  dissmisNotify (state, index) {
    state.items.splice(index, 1)
  }
}
