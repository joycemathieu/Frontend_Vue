<template lang="html">
  <div v-on="$listeners">
    <inputField v-if="input_types.includes(field.input_type)" :field="field"/>
    <selectField v-else-if="field.input_type === 'select'" :field="field"/>
    <dateField v-else-if="field.input_type === 'date'" :field="field"/>
  </div>
</template>

<script>
import inputField from "./inputField.vue"
import selectField from "./selectField.vue"
import dateField from "./dateField.vue"

export default {
  name: "iField",
  components: {
    iInput,
    iSelect,
  },
  props: {
    field: Object,
  },
  data: () => {
    return {
      input_types: ["text", "password","email","phone"],
    }
  },
  methods: {
    validate (value) {
      this.$emit('validated', value)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
