<template lang="html">

<formInput v-for="field in fields" :field="field">
</template>

<script>
import formInput from "@/components/form_input.vue"
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
  },
  data: () => {
    return {
      example_field: {
        type: "text",
        name: "Name",
        label: "label",
        placeholder: "placeholder",
        helper: "helper text",
        validate_msg: "validation message",
      },
      fields: [
        {
          type: "text",
          name: "nom",
          label: "Nom",
          placeholder: "John Doe",
          helper: "Entrez votre nom",
          validate_msg: "validation message",
        },
        {
          type: "password",
          name: "password",
          label: "Mot de passe",
          placeholder: "soupe a l'onion et aux croutons",
          helper: "Entrez votre mot de passe",
          validate_msg: "validation message",
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
