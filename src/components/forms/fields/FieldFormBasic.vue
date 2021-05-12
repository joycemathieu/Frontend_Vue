<template>
    <div>
        <md-field :class="getValidationClass(name)" >
            <label :for="name"> {{ label }} </label>
            <md-input :type="type" :id="name" :name="name" v-model="value" :autocomplete="name" @change="sendValue" />
            <span class="md-error" v-if="ifError(name)">Le champ  {{ label }} est requis !</span>
        </md-field>
    </div>
</template>
<script>
export default {
    name:'FieldForm',
    props:{
        name:{
            type:String,
        },
        label:{
            type:String,
            required:false,
        },
        type:{
            type:String,
        },
        validationField:{
            type:Object
        }
    },
    data(){
        return{
            value:"",
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