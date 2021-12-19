export const state = {
  miniSideBar: false,
  isShowNav: true,
};

export const getters = {
  miniSideBar(state) {
    return state.miniSideBar;
  },

  isShowNav(state) {
    return state.isShowNav;
  },
};

export const actions = {
  toggleSideBar(context) {
    context.commit("toggleSideBar");
  },

  toggleLayout(context, is_show) {
    context.commit("toggleLayout", is_show);
  },
};

export const mutations = {
  toggleSideBar(state) {
    state.miniSideBar = !state.miniSideBar;
  },

  toggleLayout(state, is_show) {
    state.isShowNav = is_show;
  },
};
