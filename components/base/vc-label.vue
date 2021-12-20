<template>
  <label class="input-group-label">
    <slot />
    &nbsp;<span v-show="required" class="required">*</span>
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
  }
</script>
