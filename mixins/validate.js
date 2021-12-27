import Vue from 'vue'

const validate = {
  methods: {
    requiredRule: (value, name) => {
      return !!value || `Vui lòng nhập ${name}`
    },
    numberRule: (value, name) => {
      if (!value) {
        return true
      }
      return /^\d+$/.test(value) || `Vui lòng nhập đúng định dạng ${name}`
    },
    minLengthRule: (value, name, min) => {
      return value?.length >= min || `${name} phải lớn hơn ${min} ký tự`
    },
    maxLengthRule: (value, name, max) => {
      if (!value) {
        return true
      }
      return value.length <= max || `${name} không được vượt quá ${max} ký tự`
    },
    emailRule: (value, name) => {
      if (!value) {
        return true
      }
      return (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        `Vui lòng nhập đúng định dạng ${name}`
      )
    },
    dateRule: (value, name) => {
      return (
        /^([12]\d{3})[/](((0[13456789]|1[0-2])[/](0[1-9]|[12][0-9]|3[01]))|02[/](0[1-9]|[12][0-9]))$/.test(
          value
        ) || `Vui lòng nhập đúng định dạng ${name}`
      )
    },
  },
}
Vue.mixin(validate)

export default validate
