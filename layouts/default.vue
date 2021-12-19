<template>
  <v-app>
    <side-bar></side-bar>
    <nav-bar></nav-bar>

    <v-main>
      <v-container fluid class="pa-5">
        <Nuxt />
      </v-container>
    </v-main>

    <vc-toast></vc-toast>
  </v-app>
</template>

<script>
import SideBar from "./side-bar.vue";
import NavBar from "./nav-bar.vue";

export default {
  name: "default",
  components: {
    SideBar,
    NavBar,
  },
};
</script>
