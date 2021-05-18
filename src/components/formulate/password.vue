<template lang="html">
  <div class="" :data-type="context.type">
    <md-input
      type="password"
      v-model="context.model"
      v-bind="context.attributes"
      @blur="context.blurHandler"
    >
  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
