<template>
  <v-row>
    <v-col cols="4">
      <v-card class="mb-7" flat>
        <v-card-title class="card-title"> Dropdown </v-card-title>
        <v-divider />
        <v-card-text>
          <div class="input-group">
            <vc-label :required="true"> Normal </vc-label>
            <v-select
              v-model="genderItem"
              dense
              outlined
              validate-on-blur
              item-value="id"
              item-text="name"
              :menu-props="{ 'nudge-top': -35 }"
              :items="genders"
              :rules="[(v) => requiredRule(v, 'giới tính')]"
            />
          </div>

          <div class="input-group">
            <vc-label :required="true"> Autocomplte </vc-label>
            <v-combobox
              v-model="genderItem"
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
              v-model="genderItem"
              dense
              outlined
              validate-on-blur
              item-value="id"
              item-text="name"
              :items="genders"
              :rules="[(v) => requiredRule(v, 'giới tính')]"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import gender from 'common/gender'
  export default {
    data() {
      return {
        genderItem: null,
      }
    },
    computed: {
      genders() {
        return gender
      },
    },
  }
</script>
