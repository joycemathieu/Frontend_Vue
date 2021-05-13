<template>
  <div>
        <form novalidate class="md-layout md-alignement-center-center"  @submit.prevent="validateUser">
            <div>
                <h3> Mobilité </h3>
                <md-divider></md-divider>
                <FieldCheckbox
                    name="mobilites"
                    label="Mobilité"
                    :checkboxs=mobilites
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
            </div>
            <div>
                <h3> Transport </h3>
                <md-divider></md-divider>
                <FieldCheckbox
                    name="transport"
                    label="Transport"
                    :checkboxs=transport
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
            </div>
            <div>
                <h3>Postes recherchés</h3>
                <md-divider></md-divider>
                <FieldBasic
                    name="poste1"
                    label="Poste n*1"
                    type="text"
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
                <FieldBasic
                    name="poste2"
                    label="Poste n*2"
                    type="text"
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
                <FieldBasic
                    name="poste3"
                    label="Poste n*3"
                    type="text"
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
                <FieldBasic
                    name="poste4"
                    label="Poste n*4"
                    type="text"
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
                <FieldBasic
                    name="poste5"
                    label="Poste n*5"
                    type="text"
                    @valueChange="updateValue"
                    :validationField=$v.user
                />
            </div>
        <md-button type="submit" class="md-primary">Finish</md-button>
        <md-snackbar :md-active.sync="userSaved">Vous êtes enregistré avec succés, Félicitation maintenat aux boulots !</md-snackbar>
      </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
minLength,
} from 'vuelidate/lib/validators'
import FieldCheckbox from './fields/FieldFormCheck'
import FieldBasic from './fields/FieldFormBasic'
export default {
    name:"formPersonnelle",
    mixins: [validationMixin],
    components:{
      FieldCheckbox,
      FieldBasic
    },
    data(){
        return{
            userSaved:null,
            sending:null,
            user:{
                poste1:'',
                poste2:'',
                poste3:'',
                poste4:'',
                poste5:'',
                mobiliter:null,
                transporter:null
            },
            //Ici ce sont tout les champs pour les checkboxs
            mobilites:["Noumea","Grand Noumea","Province Sud","Province Nord"],
            transport:["Vehicule Personnel","Famille/Ami","Transport en commun","A pied"]
        }

    },
    validations:{
        user:{
            mobilites:{
                minLength:minLength(1)
            },
            transport:{
                minLength:minLength(1)
            },
        }

    },
    methods:{
        updateValue(data) {
            this.user[data.name] = data.value; // permet de remonter la valeur de l'input de l'enfant aux parents pour validation
        },
        saveUser () {
          // save to store for each step
          // concat all stored users at the end of the stepper
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser();
        }
      },
    }
}
</script>

<style>

</style>
