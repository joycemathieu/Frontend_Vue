<template lang="html">
  <div class="">
    <label :for="context.id"  class="label">
      {{ context.label }}
      <span  class="material-icons-outlined"></span>

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
