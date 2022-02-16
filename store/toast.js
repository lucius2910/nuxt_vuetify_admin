import _helper from 'util/helper'

export const state = {
  items: [],
}

export const getters = {
  getToast(state) {
    return state.items
  },
}

export const actions = {
  pushNotify({ commit }, item) {
    item.isShow = true
    item._id = _helper.newGuid()
    commit('pushNotify', item)
  },

  dissmisNotify({ commit }, item) {
    commit('dissmisNotify', item)
    setTimeout(() => {
      commit('pop', item)
    }, 2000)
  },
}

export const mutations = {
  pushNotify(state, item) {
    state.items.push(item)
  },

  dissmisNotify(state, item) {
    state.items.map(
      (obj) => (obj.isShow = obj._id === item._id ? false : obj.isShow)
    )
  },

  pop(state) {
    if (state.items.find((obj) => obj.isShow)?.length <= 0) state.items = []
  },
}
