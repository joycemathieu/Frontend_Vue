<template>
  <div class="test">
    <iForm/>
  </div>
</template>

<script>
import iField from "@/components/__dead__/iForm.vue"
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Test',
  data: () => {
    return {
      value: "",
      fields: [
        {
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
  components: {
    iField
  },
  methods: {
    saveValue (value) {
      this.value = value
    }
  }
}
</script>
