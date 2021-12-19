<template>
  <div>
    <v-navigation-drawer
      width="200"
      color="primary"
      class="side-bar"
      :value="isShowNav"
      :mini-variant="miniSideBar"
      fixed
      app
    >
      <v-list class="pa-0" nav>
        <template v-for="item in items">
          <!-- if it's a menu item with no children -->
          <v-list-item
            v-if="!item.subItems"
            class="ma-0"
            :prepend-icon="item.icon"
            :key="item.title"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="fw-400 fs-14"
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item>

          <!-- else if it has children -->
          <v-list-group
            v-if="item.subItems"
            class="ma-0"
            :key="item.title"
            :prepend-icon="item.icon"
            :append-icon="item.subItems ? 'mdi-chevron-down' : null"
            no-action
          >
            <template v-slot:activator class="ma-0" :to="item.path">
              <v-list-item-content class="ma-0">
                <v-list-item-title
                  class="fw-400 fs-14"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.subItems"
              :key="child.title"
              :to="child.path"
              class="ma-0 pl-4"
              link
            >
              <v-list-item-icon class="child-icon">
                <v-icon v-text="'mdi-circle-medium'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="fw-400 fs-13"
                  v-text="child.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import menu from "common/menu";

export default {
  computed: {
    ...mapGetters("layout", ["miniSideBar", "isShowNav"]),
    items() {
      return menu;
    },
  },
};
</script>
