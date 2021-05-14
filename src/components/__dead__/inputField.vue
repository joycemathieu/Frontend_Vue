<template lang="html">
  <div class="iInput">
    <label :for="field.name">{{ field.label }}</label>
    <input v-model.trim="$v[field.name].$model" v-on:change="validate"
      :name="field.name"
      :placeholder="field.placeholder"
      :type="field.input_type"
    />

    <div v-if="$v[field.name].$error" class="error">
      <div class="" v-for="validation in Object.keys($v[field.name])">
        <div class="error" v-if="!$v[field.name].[validation]"> field.msg.errors[validation] </div>
      </div>
    </div>
    <span v-else-if="!$v[field.name].$invalid" class="success">{{ field.msg.success }}</span>
    <span v-else class="helper">{{ field.msg.helper }}</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
//import { required } from 'vuelidate/lib/validators'
export default {
  name: "iInput",
  mixins: [validationMixin],
  props: {
    field: Object,
  },
  data: () => {
    return {
      value: "",
    }
  },
  methods: {
    validate () {
      if (!this.$v[this.field.name].invalid) {
        this.$emit("validated", this.$v[this.field.name].$model)
      }
    },
  },
  validations:() => {
    return {
      value : this.field.validation
    }

  }

}
</script>

<style lang="css" scoped>
.error {
  color: red;
}
.success {
  color: green;
}
.helper {
  color: grey;
}
</style>
