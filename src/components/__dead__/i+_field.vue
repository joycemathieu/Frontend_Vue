<template lang="html">
  <div class="">
    <comp2 v-on="$listeners" :field="field"/>
    
  </div>
</template>

<script>
import comp2 from "./i+_input.vue"

export default {
  name: "iField",
  components: {
    comp2
  },
  props: {
    field: Object
  },
  data: () => {
    return {
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
