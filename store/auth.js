export const state = {
  loggedIn: false,
};

export const getters = {
  loggedIn(state) {
    return state.loggedIn;
  },
};

export const actions = {
  login(context) {
    // change state
    context.commit("changeAuth", true);

    // show layout
    context.dispatch("layout/toggleLayout", true, { root: true });

    // go to home page
    this.$router.push("/");
  },
  logout(context) {
    context.commit("changeAuth", false);
    // show layout
    context.dispatch("layout/toggleLayout", false, { root: true });

    // go to home page
    this.$router.push("/login");
  },
};

export const mutations = {
  changeAuth(state, data) {
    state.loggedIn = data;
  },
};
