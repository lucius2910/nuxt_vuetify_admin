import Vue from 'vue'
import VcLabel from '@/components/base/vc-label.vue'
import VcDatepicker from '@/components/base/vc-datepicker.vue'
import VcToast from '@/components/base/vc-toast.vue'
import VcAlert from '@/components/base/vc-alert.vue'
import VcConfirm from '@/components/base/vc-confirm.vue'

const components = { VcLabel, VcDatepicker, VcToast, VcAlert, VcConfirm }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
