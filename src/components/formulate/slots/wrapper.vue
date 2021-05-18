<template lang="html">
  <div class="" :data-type="context.type">
    <p class="md-caption"> custom wrapper</p>
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
