<template>
  <v-row>
    <v-col cols="12">
      <v-card class="pa-5" flat>
        <v-btn color="primary" @click="addAlert('info')"> Add info </v-btn>
        <v-btn color="primary" @click="addAlert('success')">
          Add success
        </v-btn>
        <v-btn color="primary" @click="addAlert('error')"> Add error </v-btn>
        <v-btn color="primary" @click="addAlert('warning')">
          Add warning
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions('toast', ['pushNotify']),
      addAlert(type) {
        this.pushNotify({
          type,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        })
      },
    },
  }
</script>
