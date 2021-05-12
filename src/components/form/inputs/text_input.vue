<template lang="html">
  <md-field>
    <label>{{field.label}}</label>
    <md-input v-model="value" :placeholder="field.placeholder" :change="updateValue"></md-input>
    <span class="md-helper-text">{{field.helper}}</span>
    <span class="md-error">{{field.validation_msg}}</span>
  </md-field>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    },
    data: () => {
      value=""
    }
  },
}
</script>

<style lang="css" scoped>
</style>
