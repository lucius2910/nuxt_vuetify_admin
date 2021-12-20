export const state = {
  miniSideBar: false,
  isShowNav: true
}

export const getters = {
  miniSideBar (state) {
    return state.miniSideBar
  },

  isShowNav (state) {
    return state.isShowNav
  }
}

export const actions = {
  toggleSideBar (context) {
    context.commit('toggleSideBar')
  },

  toggleLayout (context, isShow) {
    context.commit('toggleLayout', isShow)
  }
}

export const mutations = {
  toggleSideBar (state) {
    state.miniSideBar = !state.miniSideBar
  },

  toggleLayout (state, isShow) {
    state.isShowNav = isShow
  }
}
