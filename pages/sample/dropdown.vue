<template>
  <v-card class="mb-7" flat>
    <v-card-title class="card-title"> Dropdown </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <div class="input-group">
            <vc-label :required="true"> Normal </vc-label>
            <v-combobox
              v-model="gender"
              dense
              outlined
              validate-on-blur
              item-value="id"
              item-text="name"
              :items="genders"
              :rules="[(v) => requiredRule(v, 'giới tính')]"
            />
          </div>

          <div class="input-group">
            <vc-label :required="true"> Autocomplte </vc-label>
            <v-combobox
              v-model="gender"
              dense
              outlined
              validate-on-blur
              item-value="id"
              item-text="name"
              :items="genders"
              :rules="[(v) => requiredRule(v, 'giới tính')]"
            />
          </div>

          <div class="input-group">
            <vc-label :required="true"> Grid custom </vc-label>
            <v-combobox
              v-model="gender"
              dense
              outlined
              validate-on-blur
              item-value="id"
              item-text="name"
              :items="genders"
              :rules="[(v) => requiredRule(v, 'giới tính')]"
            />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import gender from 'common/gender'
  export default {
    computed: {
      genders() {
        return gender
      },
    },
  }
</script>
