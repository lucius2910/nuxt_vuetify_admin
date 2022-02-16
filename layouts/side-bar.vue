<template>
  <div>
    <v-navigation-drawer
      width="200"
      color="primary"
      class="side-bar"
      :value="isShowNav"
      :mini-variant="miniSideBar"
      fixed
      app>
      <v-list class="pa-0" nav dense>
        <template v-for="(item, index) in items">
          <div :key="index">
            <!-- if it's a menu item with no children -->
            <v-list-item
              v-if="!item.subItems"
              :key="item.title"
              class="ma-0"
              :prepend-icon="item.icon"
              :to="item.path">
              <v-list-item-icon>
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-title class="fw-400 fs-14" v-text="item.title" />
            </v-list-item>

            <!-- else if it has children -->
            <v-list-group
              v-if="item.subItems"
              :key="item.title"
              class="ma-0"
              :prepend-icon="item.icon"
              :append-icon="item.subItems ? 'mdi-chevron-down' : null"
              no-action>
              <template #activator>
                <v-list-item-content class="ma-0" :to="item.path">
                  <v-list-item-title class="fw-400 fs-14" v-text="item.title" />
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.subItems"
                :key="child.title"
                :to="child.path"
                class="ma-0 pl-4"
                link>
                <v-list-item-icon class="child-icon">
                  <v-icon v-text="'mdi-circle-medium'" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="fw-400 fs-13"
                    v-text="child.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import menu from 'common/menu'

  export default {
    computed: {
      ...mapGetters('layout', ['miniSideBar', 'isShowNav']),
      items() {
        return menu
      },
    },
  }
</script>
