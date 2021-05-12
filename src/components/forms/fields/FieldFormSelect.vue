<template>
    <div>
        <md-field>
            <label :for="name">Genre</label>
            <md-select :name="name" :id="name" v-model="value" md-dense @change="sendValue">
            <md-option></md-option>
            <md-option value="Homme">Homme</md-option>
            <md-option value="Femme">Femme</md-option>
            <md-option value="Autre">Autres</md-option>
            </md-select>
            <span class="md-error" v-if="ifError(name)">Le champ  {{ label }} est requis !</span>
        </md-field>

    </div>
</template>

<script>
export default {
    name:'FieldFormSelect',
    props:{
        name:{
            type:String,
        },
        label:{
            type:String,
        },
        validationField:{
            type:Object,
        }
    },
    data(){
        return{
            value:'',
        }
    },
    methods:{
        sendValue() {
            this.$emit("valueChange", {value: this.value, name: this.name})
        },
        getValidationClass (fieldName) {
            const field = this.validationField[fieldName];

          return {'md-invalid': field.$invalid && field.$dirty}
        },
        ifError(fieldName){
            const error = this.validationField[fieldName].required;
            if(!error){
                return true;
            }
        }
    }
}
</script>

<style>

</style>