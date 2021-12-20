<template>
  <v-row>
    <v-col cols="6" offset="3">
      <v-form ref="loginForm" v-model="valid" lazy-validation>
        <v-card flat>
          <v-card-text class="pa-4">
            <div class="input-group">
              <vc-label>User name</vc-label>
              <v-text-field
                v-model="user_name"
                outlined
                dense
                :rules="userNameRules"
              />
            </div>
            <div class="input-group">
              <vc-label>Password</vc-label>
              <v-text-field
                v-model="password"
                outlined
                dense
                type="password"
                :rules="passwordRules"
              />
            </div>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn color="primary" block @click="login">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      user_name: null,
      password: null,

      valid: true,
      userNameRules: [v => !!v || 'Name is required'],
      passwordRules: [v => !!v || 'Name is required']
    }
  },
  methods: {
    login () {
      if (this.$refs.loginForm.validate()) {
        this.$store.dispatch('auth/login')
      }
    }
  }
}
</script>
