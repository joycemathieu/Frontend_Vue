<template>
  <div class="md-field">
      <label for="name">Name</label>
      <input type="text" name="name"/>
  </div>



</template>

<script>
import testFormSchema from "@/schemas/test_form"

export default {
  name: 'Test',
  components: {

  },
  data: () => {
    return {
      value: "",
      values: {},
      schema: testFormSchema,

    }
  },
  methods: {
    saveValue (value) {
      this.value = value
    }
  }
}
</script>

<style>
  .schema {
    max-height: 500px;
  }
</style>
