<template lang="html">

  <textInput v-if="text_fields.includes(field.type)" :field="field" v-on:change="updateValue"/>
  <dateInput v-else-if="field.type == 'date'" :field="field" v-on:change="updateValue"/>
  <selectInput v-else-if="field.type == 'select'" :field="field" v-on:change="updateValue"/>


</template>

<script>
import dateInput from "@/components/date_input.vue"
import selectInput from "@/components/select_input.vue"
import textInput from "@/components/text_input.vue"

export default {
  props: {
    field: {
      type: Object,
      required: true
    },
  },
  data: () => {
    return {
      text_fields: ["password", "text", "email", "tel"],
      value: "",
    }
  },
  methods: {
    updateValue: function() {
      this.$emit("updateValue", {this.field.name, this.value})
    }
  }
}
</script>

<style scoped>
</style>
