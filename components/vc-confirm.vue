<template>
  <div class="text-center">
    <v-dialog v-model="dialog" :width="width">
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark @click="confirmed">
            {{ okButton }}
          </v-btn>
          <v-btn @click="canceled"> {{ cancelButton }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 500,
      },
    },
    data() {
      return {
        title: null,
        message: null,
        okButton: 'ok',
        cancelButton: 'cancel',
        dialog: false,
      }
    },
    methods: {
      confirmed() {
        this.dismissConfirm()
        this.resolvePromise(true)
      },

      canceled() {
        this.dismissConfirm()
        this.resolvePromise(false)
      },

      dismissConfirm() {
        this.dialog = false
      },

      /**
       * Return confirm status async
       * @params {object} opts
       * @returns {Promise} status confirm
       */
      show(opts = {}) {
        this.title = opts.title
        this.message = opts.message

        if (opts.okButton) {
          this.okButton = opts.okButton
        }

        if (opts.cancelButton) {
          this.cancelButton = opts.cancelButton
        }

        this.dialog = true

        return new Promise((resolve, reject) => {
          this.resolvePromise = resolve
          this.rejectPromise = reject
        })
      },
    },
  }
</script>
