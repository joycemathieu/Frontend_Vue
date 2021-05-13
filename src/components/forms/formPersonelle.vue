<template>
  <div>
    <form novalidate class="md-layout md-alignement-center-center"  @submit.prevent="validateUser">
        <div class="md-layout-item">
          <h3 class="md-title"> Informations générales </h3>
          <md-divider></md-divider>
          <FieldForm
            name="prenom"
            label="Prénom"
            min="4"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="nom"
            label="Nom"
            min="4"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldFormSelect
            name="genre"
            label="Genre"
            :options=options
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="nomDeJeuneFille"
            label="Nom de jeune fille"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldFormDate
            name="dateNaissance"
            label="Date de naissance"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="lieuDeNaissance"
            label="Lieu de Naissance"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="tel"
            label="Téléphone"
            type="tel"
            max="6"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="rue"
            label="Rue"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="quartier"
            label="Quartier"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm
            name="codePostal"
            label="Code Postal"
            max="6"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <md-button type="submit" class="md-primary">Suivant</md-button> <!-- Le bouton submit ne valide pas tout Probleme avec le fieldDate et select ! -->
        </div>

      <md-snackbar :md-active.sync="userSaved">Vous avez bientot terminer encore une dcerniere étapes, courage !</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
required,
email,
numeric,
maxValue,
minLength,
maxLength,
} from 'vuelidate/lib/validators'
import FieldForm from './fields/FieldFormBasic'
import FieldFormDate from './fields/FieldFormDate'
import FieldFormSelect from './fields/FieldFormSelect'
  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components:{
      FieldForm,
      FieldFormDate,
      FieldFormSelect,
    },
    data: () => {
      return {
        userSaved: false,
        lastUser: null,
        user:{
          prenom:'',
          nom:'',
          genre:'',
          nomDeJeuneFille:'',
          dateNaissance: Date(),
          lieuDeNaissance:'',
          tel:'',
          email:'',
          rue:'',
          quartier:'',
          codePostal:'',
        },
      options:["Homme","Femme","Autre"]
      }
    },
    validations:{
      user:{
        prenom:{
          required,
          minLength:minLength(4)
        },
        nom:{
          required,
          minLength:minLength(4)
        },
        genre:{
          required,
        },
        dateNaissance:{
          required,
          maxValue:maxValue(new Date())
        },
        lieuDeNaissance:{
          required,
        },
        tel:{
          required,
          numeric,
          maxLength:maxLength(7)
        },
        email:{
          required,
          email,
        },
        rue:{
          required,
        },
        codePostal:{
          required,
          numeric,
          maxLength:maxLength(5)
        },

      }
    },
    methods: {
      updateValue(data) {
        this.user[data.name] = data.value; // permet de remonter la valeur de l'input de l'enfant aux parents pour validation

      },
      saveUser () {
        // save to store for each step
        // concat all stored users at the end of the stepper
      },
      validateUser () {
        this.$v.$touch()          //verifie si toutes les conditions passer dans la propriété validations sont correct (console.log($v) pour y voir plsu claire)
        if (!this.$v.$invalid) {
          this.saveUser();
        }
      },
    },
  }
</script>

<style lang="css" >
.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}
.md-layout-item{
    width: 25%;
}

.md-button{
    margin: 0 auto;
}
</style>
