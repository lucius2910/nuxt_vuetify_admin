<template>
  <div>
    <v-form ref="userForm" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="9">
          <v-card class="mb-7" flat>
            <v-card-title class="card-title"> Thông tin chung </v-card-title>
            <v-divider />
            <v-card-text class="pa-4">
              <div class="input-group">
                <vc-label :required="true"> Tên khách hàng </vc-label>
                <v-text-field
                  v-model="user.name"
                  outlined
                  dense
                  validate-on-blur
                  :rules="[(v) => requiredRule(v, 'tên khách hàng')]"
                />
              </div>

              <div class="input-group">
                <vc-label :required="true"> Tuổi </vc-label>
                <v-text-field
                  v-model="user.age"
                  outlined
                  dense
                  validate-on-blur
                  :rules="[
                    (v) => requiredRule(v, 'tuổi'),
                    (v) => numberRule(v, 'tuổi'),
                  ]"
                />
              </div>

              <div class="input-group">
                <vc-label :required="true"> Ngày sinh </vc-label>
                <vc-datepicker
                  v-model="user.birthday"
                  :rules="[
                    (v) => requiredRule(v, 'ngày sinh'),
                    (v) => dateRule(v, 'ngày sinh'),
                  ]"
                />
              </div>

              <div class="input-group">
                <vc-label :required="true"> Giới tính </vc-label>
                <v-combobox
                  v-model="user.gender"
                  :items="genders"
                  dense
                  outlined
                  validate-on-blur
                  item-value="id"
                  item-text="name"
                  :rules="[(v) => requiredRule(v, 'giới tính')]"
                />
              </div>

              <div class="input-group">
                <vc-label :required="true"> Địa chỉ </vc-label>
                <v-text-field
                  v-model="user.address"
                  outlined
                  dense
                  validate-on-blur
                  :rules="[(v) => requiredRule(v, 'địa chỉ')]"
                />
              </div>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-title class="card-title"> Thông tin bổ sung </v-card-title>
            <v-divider />
            <v-card-text class="pa-4">
              <span>ádkjhasdjhasjdhasgj</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card flat>
            <v-card-title class="card-title"> Thông tin khác </v-card-title>
            <v-divider />
            <v-card-text class="pa-4">
              <span>ádkjhasdjhasjdhasgj</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-btn color="primary" @click="save"> Save </v-btn>
    </v-form>
    <vc-confirm ref="saveConfirm"></vc-confirm>
  </div>
</template>

<script>
  import gender from 'common/gender'

  export default {
    data() {
      return {
        valid: true,
        user: {},
      }
    },
    computed: {
      genders() {
        return gender
      },
    },
    methods: {
      async save() {
        // validate form
        if (!this.$refs.userForm.validate()) return

        const confirmed = await this.$refs.saveConfirm.show({
          title: 'User',
          message: 'Do you change this user?',
        })

        if (!confirmed) return
      },
    },
  }
</script>
