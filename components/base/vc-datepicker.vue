<template>
  <v-menu
    ref="datepicker"
    v-model="isShowPicker"
    transition="scroll-y-reverse-transition"
    offset-y
    max-width="290px"
    min-width="auto"
    :nudge-top="25"
    :close-on-content-click="false">
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="dateFormatted"
        dense
        outlined
        validate-on-blur
        v-bind="attrs"
        :placeholder="placeholder"
        :rules="rules"
        v-on="on" />
    </template>
    <v-date-picker
      v-model="date"
      scrollable
      no-title
      @input="isShowPicker = false" />
  </v-menu>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: null,
      },
      placeholder: {
        type: String,
        default: 'yyyy/mm/dd',
      },
      rules: {
        type: Array,
        default() {
          return []
        },
      },
    },
    data() {
      return {
        date: this.parseDate(this.value),
        isShowPicker: false,
      }
    },
    computed: {
      dateFormatted: {
        get() {
          return this.formatDate(this.date)
        },
        set(newVal) {
          return newVal
        },
      },
    },
    watch: {
      date(newVal) {
        this.$emit('input', this.formatDate(newVal))
      },
      value(newVal) {
        this.date = this.parseDate(newVal)
      },
    },

    methods: {
      formatDate(val) {
        if (!val) {
          return null
        }

        const [year, month, day] = val.split('-')
        return `${year}/${month}/${day}`
      },
      parseDate(val) {
        if (!val) {
          return null
        }

        const datePattern = /(\d{4})\/(\d{1,2})\/(\d{1,2})/
        const dateMatch = datePattern.exec(val)
        return `${dateMatch[1]}-${dateMatch[2]?.padStart(
          2,
          '0'
        )}-${dateMatch[3]?.padStart(2, '0')}`
      },
    },
  }
</script>
