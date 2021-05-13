<template>
    <div>
        <md-datepicker  v-model="value" @change="sendValue" :class="getValidationClass(name)">
            <label> {{ label }} </label>
            <span class="md-error" v-if="ifError(name)">Veuillez insérer une date !</span>
            <span class="md-error" v-else-if="ifErrorDate(name)">Veuillez insérer une date valide !</span>
        </md-datepicker>
        <p> {{ value }} </p>
    </div>
</template>

<script>

/**
 * Ce composant ne fonctionne pas avec la validation
 * 
 * 
 * 
 */
export default {
    name:'FieldFormDate',
    props:{
        label:{
            type:String,
        },
        validationField:{  //Ceci est l'objet $v (vuelidate)
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
            //cette fonction n'est jamais appeler mais this.value recupere bien la valeur
            this.$emit("valueChange", {value: this.value, name: this.name})
        },
        getValidationClass (fieldName) {
            const field = this.validationField[fieldName];

          return {'md-invalid': field.$invalid && field.$dirty}
        },
        ifError(fieldName){
            const error = this.validationField[fieldName].required;
            //const field = this.validationField[fieldName];
            if(!error && typeof this.validationField[fieldName].required != "undefined"){
                return true;
            }
        },
        ifErrorDate(fieldName){
            const error = this.validationField[fieldName].maxValue;
            if(!error && typeof this.validationField[fieldName].maxValue != "undefined"){
                return true;
            }
        }
    }
}
</script>

<style>

</style>