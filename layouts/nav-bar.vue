<template>
  <v-app-bar v-model="isShowNav" fixed app dense tile flat>
    <v-btn icon @click="toggleSideBar">
      <v-icon>mdi-{{ `chevron-${miniSideBar ? 'right' : 'left'}` }}</v-icon>
    </v-btn>

    <v-spacer />

    <v-menu bottom offset-y transition="scroll-y-reverse-transition">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" tile class="user-menu" v-on="on">
          <v-avatar color="primary" class="avartar mr-2" />
          <span>Lưu Công Thìn</span>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="logout">
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        items: [
          {
            icon: 'mdi-export',
            title: 'Logout',
          },
        ],
      }
    },
    computed: {
      ...mapGetters('layout', ['miniSideBar', 'isShowNav']),
    },
    methods: {
      ...mapActions('auth', ['logout']),
      ...mapActions('layout', ['toggleSideBar']),
    },
  }
</script>
