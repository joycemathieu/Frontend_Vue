<template>
  <div>
       <md-field :class="getValidationClass(`${attrField}`)">
            <label for="attrField"> {{ label }} </label>
            <md-input type='text' name="attrField" id="attrField" autocomplete="family-name" v-model="form.fieldValue" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.attrField.required">Ce champ est obligatoire</span>
            <span class="md-error" v-else-if="!$v.form.attrField.minLength">Champ invalide !</span>
        </md-field>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
} from 'vuelidate/lib/validators'

export default {
    name:'FieldFormExtend',
    mixins: [validationMixin],
    props:{
        attrField:{
            type:String,
            required:true,
        },
        label:{
            type:String,
            required:false,
            
        }

    },
    data(){
        return{
            form:{
                fieldValue:null,
            },
            sending:false,
        }
    },
    validations:{
        form:{
          attrField:{
            required,
            minLength:minLength(3)
          }
        }
    },
    
    methods:{
        getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
    }
}
</script>

<style>

</style>