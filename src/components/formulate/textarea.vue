<template lang="html">
  <div :data-type="context.type" class="md-layout" >


    <md-field class="md-layout-item md-size-100">
      <label :for="context.id">
        {{ context.label }}
      </label>
      <md-textarea :type="context.type" v-model="context.model" @blur="context.blurHandler"/>
    </md-field>
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
