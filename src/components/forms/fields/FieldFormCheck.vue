<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item" >
                
                <div class="md-layout-item" :class="getValidationClass (name)">
                    <md-checkbox class="md-primary" :key="index" v-for="(checkbox,index) in checkboxs" v-model="value" :value="`${checkbox}`" @change="sendValue" > {{ checkbox }} </md-checkbox>
                </div>
                <span class="md-error" v-if="ifError(name)"> Veuillez cocher au moins une case ! </span>
            </div>
        </div>
    </div>
</template>

<script>

/**
 * Ce composant utilise un tableau passer en props qui contient les valeurs des checkboxs
 * la fonction error ne fonctionne pas ainsi que la font getvalidationClass qui permet la couleur rouge lros du display du message d'erreur
 * 
 */
export default {
    name:"FieldFormCheckbox",
    props:{
        name:{
            type:String
        },
        label:{
            type:String
        },
        checkboxs:{
            type:Array
        },
        validationField:{  //Ceci est l'objet $v (vuelidate)
            type:Object
        }
    },
    data(){
        return{
            value:[],   // permet le choix multiples
        }
    },

    methods:{
        sendValue() {
            this.$emit("valueChange", {value: this.value, name: this.name})
        },
        ifError(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].minLength;
                if(!error && typeof this.validationField[fieldName].$params.minLength != "undefined"){
                    return true
                }
            }
        },
        getValidationClass (fieldName) {
            const field = this.validationField[fieldName];
          return {'md-invalid': field.$invalid && field.$dirty}
        },
    },
}
</script>

<style>

</style>