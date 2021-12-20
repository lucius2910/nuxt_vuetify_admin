<template>
  <div class="vc-toast">
    <v-alert
      v-for="(item, index) in items"
      :key="index"
      :type="item.type"
      :value="item.show"
      :icon="false"
      dismissible
      colored-border
      border="left"
      transition="slide-y-transition"
      width="300"
      class="pa-2 pl-5 pr-3 mb-2 fs-13"
      @input="dissmisNotify(index)"
    >
      {{ item.content }}
    </v-alert>
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
