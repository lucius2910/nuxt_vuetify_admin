<template>
  <div>
    <v-alert
      :type="item.type"
      :icon="false"
      v-show="item.isShow"
      dismissible
      colored-border
      border="left"
      transition="slide-x-reverse-transition"
      width="300"
      class="pa-2 pl-5 pr-3 mb-2 fs-13"
    >
      {{ item.content }}
    </v-alert>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: {
      value: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        item: this.value,
      }
    },
    watch: {
      value(newVal) {
        this.item = newVal
      },
    },
    created() {
      var vm = this
      setTimeout(() => {
        vm.dissmisNotify(vm.item)
      }, 2000)
    },
    methods: {
      ...mapActions('toast', ['dissmisNotify']),
    },
  }
</script>
