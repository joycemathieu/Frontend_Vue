<template>
    <div>
        <md-datepicker v-model="form.fieldValue" :disabled="sending" :class="getValidationClass('date')">
            <label> {{ label }} </label>
            <span class="md-error" v-if="!$v.form.date.required">Ce champ est obligatoire</span>
        </md-datepicker>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
required,
} from 'vuelidate/lib/validators'
export default {
    name:'FieldFormDate',
    mixins: [validationMixin],
    props:{
        label:{
            type:String,
            required:false,
        }
    },
    data(){
        return{
            form:{
                fieldValue:null,
            }
        }
    },
    validations:{
        form:{
            date:{
                required,
            }
        }
    },
    methods:{
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]
        console.log(field);

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