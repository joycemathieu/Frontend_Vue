<template>
    <div>
        <md-field :class="getValidationClass('genre')">
            <label for="Genre">Genre</label>
            <md-select name="Genre" id="Genre" v-model="form.fieldValue" md-dense :disabled="sending">
            <md-option></md-option>
            <md-option value="Homme">Homme</md-option>
            <md-option value="Femme">Femme</md-option>
            <md-option value="Autre">Autres</md-option>
            </md-select>
            <span class="md-error">Ce champ est obligatoire</span>
        </md-field>

    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
    required,
} from 'vuelidate/lib/validators'
export default {
    name:'FieldFormSelect',
    mixins: [validationMixin],
    data(){
        return{
            form:{
                fieldValue:null,
            }
        }
    },
    validations:{
        form:{
            genre:{
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