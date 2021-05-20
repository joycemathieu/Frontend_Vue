<template lang="html">
  <div :data-type="context.type" >
    <textarea class="textarea" :type="context.type" v-model="context.model" @blur="context.blurHandler"/>
  </div>

</template>

<script>

export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
    }
  }

}
</script>

<style lang="css" scoped>

</style>
