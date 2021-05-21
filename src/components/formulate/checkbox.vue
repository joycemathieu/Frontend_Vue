<template lang="html">
  <div :data-type="context.type" class="control">

    <label :for="option.id" class="radio" v-for="option in options" :key="option.id">

      <input
      :type="context.type"
      :id="option.id"
      v-model="context.model"
      @blur="context.blurHandler"
      :value="option.value">
      {{ option.label }}
    </label>
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
  computed: {
    options () {
      return this.context.options || {}
    },
    optionGroups () {
      return this.context.optionGroups || false
    },
    placeholderSelected () {
      return !!(!this.hasValue && this.context.attributes && this.context.attributes.placeholder)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
