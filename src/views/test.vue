<template>
  <div class="login md-layout md-gutter md-alignment-top-space-around">
      <md-card md-with-hover class="md-layout-item md-size-40 md-small-size-50 md-xsmall-size-90">
        <md-card-header>
          <div class="md-display-2 md-primary">
            Tous les Inputs
          </div>
        </md-card-header>
        <md-card-content>
          <FormulateForm v-model="values" :schema="schema"/>
        </md-card-content>
      </md-card>

      <md-card md-with-hover class="md-layout-item md-size-40 md-small-size-50 md-xsmall-size-90">
        <md-card-header>
          <div class="md-display-2 md-primary">
            Debug
          </div>
        </md-card-header>
        <md-card-content>
          <md-tabs class="md-primary md-elevation-2" md-alignment="centered">
            <md-tab id="tab-value" md-label="Form values">
              <pre v-text="values" class="md-elevation-3"></pre>
            </md-tab>

            <md-tab id="tab-schema" md-label="Form Schema">
              <pre v-text="schema" class="md-elevation-3"></pre>
            </md-tab>

          </md-tabs>
        </md-card-content>
      </md-card>





  </div>

</template>

<script>
import testFormSchema from "@/schemas/test_form"
//import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Test',
  components: {
    //iForm
  },
  data: () => {
    return {
      value: "",
      values: {},
      schema: testFormSchema,
      //schema_original: JSON.parse(JSON.stringify(loginFormSchema)),
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
