import Vue from "vue";
import VcLabel from "@/components/base/vc-label.vue";
import VcDatepicker from "@/components/base/vc-datepicker.vue";
import VcToast from "@/components/base/vc-toast.vue";

const components = { VcLabel, VcDatepicker, VcToast };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
