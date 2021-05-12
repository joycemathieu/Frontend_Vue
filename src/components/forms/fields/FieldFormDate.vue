<template>
    <div>
        <md-datepicker  v-model="value" @change="sendValue" :class="getValidationClass(name)">
            <label> {{ label }} </label>
            <span class="md-error" v-if="ifError(name)">Veuillez insérer une date !</span>
        </md-datepicker>
    </div>
</template>

<script>
export default {
    name:'FieldFormDate',
    props:{
        label:{
            type:String,
        },
        validationField:{
            type:Object,
        },
        name:{
            type:String
        }
    },
    data(){
        return{
            value:null,
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
        },
    }
}
</script>

<style>

</style>