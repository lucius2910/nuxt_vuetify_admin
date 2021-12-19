<template>
  <v-form ref="userForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="9">
        <v-card class="mb-7" flat>
          <v-card-title class="card-title">Thông tin chung</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <div class="input-group">
              <vc-label :required="true">Tên khách hàng</vc-label>
              <v-text-field
                outlined
                dense
                validate-on-blur
                v-model="user.name"
                :rules="[(v) => requiredRule(v, 'tên khách hàng')]"
              ></v-text-field>
            </div>

            <div class="input-group">
              <vc-label :required="true">Tuổi</vc-label>
              <v-text-field
                outlined
                dense
                validate-on-blur
                v-model="user.age"
                :rules="[(v) => requiredRule(v, 'tuổi')]"
              ></v-text-field>
            </div>

            <div class="input-group">
              <vc-label :required="true">Ngày sinh</vc-label>
              <vc-datepicker
                v-model="user.birthday"
                :rules="[(v) => requiredRule(v, 'ngày sinh')]"
              ></vc-datepicker>
            </div>

            <div class="input-group">
              <vc-label :required="true">Giới tính</vc-label>
              <v-combobox
                :items="genders"
                dense
                outlined
                validate-on-blur
                item-value="id"
                item-text="name"
                v-model="user.gender"
                :rules="[(v) => requiredRule(v, 'giới tính')]"
              ></v-combobox>
            </div>

            <div class="input-group">
              <vc-label :required="true">Địa chỉ</vc-label>
              <v-text-field
                outlined
                dense
                validate-on-blur
                :rules="[(v) => requiredRule(v, 'địa chỉ')]"
                v-model="user.address"
              ></v-text-field>
            </div>
          </v-card-text>
        </v-card>

        <v-card flat>
          <v-card-title class="card-title">Thông tin bổ sung</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <span>ádkjhasdjhasjdhasgj</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat>
          <v-card-title class="card-title">Thông tin khác</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <span>ádkjhasdjhasjdhasgj</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-btn color="primary" @click="save"> Save </v-btn>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import gender from "common/gender";

export default {
  data() {
    return {
      valid: true,
    };
  },
  computed: {
    ...mapGetters({ user: "user/getUser" }),
    genders() {
      return gender;
    },
  },
  methods: {
    ...mapActions("user", ["setUser"]),
    save() {
      if (!this.$refs.userForm.validate()) return;

      this.setUser(this.user);
    },
  },
};
</script>
