<template>
  <label class="input-group-label">
    <slot></slot>
    &nbsp;<span class="required" v-show="required">*</span>
  </label>
</template>
<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
