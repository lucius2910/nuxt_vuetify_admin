<template>
  <div class="vc-toast">
    <vc-alert
      v-for="(item, index) in items"
      :key="index"
      :value="item"></vc-alert>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters('toast', { items: 'getToast' }),
    },
    methods: {
      ...mapActions('toast', ['dissmisNotify']),
    },
  }
</script>
