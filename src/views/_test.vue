<template>
  <div class="test">
    <iForm :fields="fields"/>
  </div>
</template>

<script>
import iForm from "@/components/__dead__/iForm.vue"
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Test',
  components: {
    iForm
  },
  data: () => {
    return {
      value: "",
      fields: [
        {
          id: 0,
          input_type: "text",
          name: "nom",
          label: "Nom",
          placeholder: "Smith",
          msg: {
            errors: {
              required: "Le champs est requis",
              minLength: "Le champ doit contenir plus de " + String(3) + " characteres",
            },
            success: "Lui le vrai.",
            helper: "Tape sur le clavier"
          },
          validations: {
            required,
            minLength: minLength(3),
          }
        },
        {
          id: 1,
          input_type: "text",
          name: "prenom",
          label: "Prenom",
          placeholder: "John",
          msg: {
            errors: {
              required: "Le champs est requis",
              minLength: "Le champ doit contenir plus de " + String(3) + " characteres",
            },
            success: "Lui le vrai.",
            helper: "Tape sur le clavier"
          },
          validations: {
            required,
            minLength: minLength(3),
          }
        },

      ]
    }
  },
  methods: {
    saveValue (value) {
      this.value = value
    }
  }
}
</script>
