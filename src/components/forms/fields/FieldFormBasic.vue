<template>
    <div>
        <md-field :class="getValidationClass(name)" >
            <label :for="name"> {{ label }} </label>
            <md-input :type="type" :id="name" :name="name" v-model="value" :autocomplete="name" @change="sendValue" />
            <span class="md-error" v-if="ifError(name)">Le champ  {{ label }} est requis !</span>
            <span class="md-error" v-else-if="ifErrorNum(name)">Le champ  {{ label }} doit contenir que des chiffres !</span>
            <span class="md-error" v-else-if="ifErrorMaxLength(name)">Le champ  {{ label }} doit contenir aux maximum {{ max }} caractères !</span>
            <span class="md-error" v-else-if="ifErrorMinLength(name)">Le champ  {{ label }} doit contenir aux minimums {{ min }} caractères !</span>
            <span class="md-error" v-else-if="ifErrorMail(name)">Veuillez entrer un {{ label }} valide ! </span>
            <span class="md-error" v-else-if="ifErrorPassword(name)"> Les deux mot de passe doivent être identiques ! </span>
        </md-field>
    </div>
</template>
<script>

/**
 * 
 * Pour utiliser ce composants veuillez indiquer a son parent:
 *              -son name permet de rendre dynamique les fonctions error
 *              -son label permet de rendre dynamique le mssage d'erreur
 *              -son type qui permet entre autre pour le champs tel
 *              -l'instante de vuelidate qui permet al verification du formulaire avec la props validationField
 *              -et ensuite max et min qui sont des conditions de validation et permet le mssage d'erreur dynamique
 */
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
        validationField:{   //Ceci est l'objet $v (vuelidate)
            type:Object
        },
        max:{
            type:String
        },
        min:{
            type:String
        }
    },
    data(){
        return{
            value:"",
        }
    },
    methods:{
        sendValue() {
            this.$emit("valueChange", {value: this.value, name: this.name}) //renvoie la valeur de l'input au parent pour verif
        },
        getValidationClass (fieldName) {
            const field = this.validationField[fieldName];          // ajoute la class md-invalid si erreur il y a (permet la couleur rouge sur les champs invalide !)
            if(typeof field != "undefined"){
                return {'md-invalid': field.$invalid && field.$dirty}
            }
            return ''
        },
        // Verifie et display les messages d'erreur pour tout les cas possibles !
        ifError(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].required;
                if(!error && typeof this.validationField[fieldName].$params.required != "undefined"){
                    return true;
                }
            } 
        },
        ifErrorNum(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].numeric;
                if(!error && typeof this.validationField[fieldName].$params.numeric != "undefined"){
                    return true;
                }
            }
        },
        ifErrorMaxLength(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].maxLength;
                if(!error && typeof this.validationField[fieldName].$params.maxLength != "undefined"){
                    return true;
                }
            }
        },
        ifErrorMinLength(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].minLength;
                if(!error && typeof this.validationField[fieldName].$params.minLength != "undefined"){
                    return true;
                }
            }
        },
        ifErrorMail(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].email;
                if(!error && typeof this.validationField[fieldName].$params.email != "undefined"){
                    return true;
                }
            }
        },
        ifErrorPassword(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].sameAsPassword;
                if(!error && typeof this.validationField[fieldName].$params.sameAsPassword != "undefined"){
                    return true;
                }
            }
        }
    }
}
</script>

<style>

</style>