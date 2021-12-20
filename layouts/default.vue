<template>
  <v-app>
    <side-bar />
    <nav-bar />

    <v-main>
      <v-container fluid class="pa-5">
        <Nuxt />
      </v-container>
    </v-main>

    <vc-toast />
  </v-app>
</template>

<script>
  import SideBar from './side-bar.vue'
  import NavBar from './nav-bar.vue'

  export default {
    name: 'Default',
    components: {
      SideBar,
      NavBar,
    },
  }
</script>
