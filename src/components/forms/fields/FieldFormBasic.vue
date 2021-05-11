<template>
    <div>
        <md-field :class="getValidationClass(`${attrField}`)" >
            <label for="attrField"> {{ label }} </label>
            <md-input type="text" id="attrField" name="attrField" autocomplete="attrField" v-model="form.fieldValue" :disabled="sending" />
            <span @click="test" class="md-error" v-if="!$v.form.attrField.required">Ce champ est obligatoire</span>
        </md-field>
    </div>
</template>

<script>
export default {
    name:'FieldForm',
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
            sending: false,
            label: "potato"
        }
    },
    methods:{
        test(){
            console.log(this.$v);
        },
        getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
        console.log(this.$v.form);
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
