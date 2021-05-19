<template lang="html">
  <div class="">
    <label v-if="!['text','time','date', 'password', 'email', 'tel', 'number', 'week', 'month', 'textarea', 'username'].includes(context.type)" :for="context.id">
      {{ context.label }}
      <span  class="material-icons-outlined"></span>
      <md-tooltip v-if="tooltip" md-delay="200" md-direction="right">{{ tooltip }}</md-tooltip>
    </label>

  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    },
    tooltip: {
      type: [String, Boolean],
      default: false
    }
  }
}

</script>

<style lang="css" scoped>
</style>
