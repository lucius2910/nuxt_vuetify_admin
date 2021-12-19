<template>
  <v-app-bar fixed app dense tile flat v-model="isShowNav">
    <v-btn icon @click="toggleSideBar">
      <v-icon>mdi-{{ `chevron-${miniSideBar ? "right" : "left"}` }}</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-menu bottom offset-y transition="scroll-y-reverse-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" tile class="user-menu">
          <v-avatar color="primary" class="avartar mr-2"></v-avatar>
          <span>Lưu Công Thìn</span>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("layout", ["miniSideBar", "isShowNav"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("layout", ["toggleSideBar"]),
  },
  data() {
    return {
      items: [
        {
          icon: "mdi-export",
          title: "Logout",
        },
      ],
    };
  },
};
</script>
