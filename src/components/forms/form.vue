<template>
  <div>
    <form novalidate class="md-layout md-alignement-center-center"  @submit.prevent="validateUser">
      <h3 class="md-title"> Informations générales </h3>
      <md-divider></md-divider>

        <div class="md-layout-item">
          <FieldForm 
            name="prenom" 
            label="Prénom" 
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldForm 
            name="nom" 
            label="Nom"
            type="text"
            @valueChange="updateValue"
            :validationField=$v.user
          />
          <FieldFormSelect 
            name="genre"
            label="Genre"
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
            type="date" 
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
            type="number" 
            @valueChange="updateValue"
            :validationField=$v.user
          />   
          <md-button type="submit" class="md-primary">Suivant</md-button> <!-- Le bouton submit ne valide pas tout Probleme avec le fieldDate ! -->
        </div>
    
      <md-progress-bar md-mode="indeterminate" v-if="sending" /> <!-- Ne fonctionne plus ! :( -->
      <md-snackbar :md-active.sync="userSaved">Vous avez validé cette étape avec success !!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
required,
email,
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
    props:{
      changePage:{
        type:Function,
      }
    },
    data: () => ({
      userSaved: false,
      sending: false,
      lastUser: null,
      user:{
        prenom:'',
        nom:'',
        genre:'',
        nomDeJeuneFille:'',
        dateNaissance:'',
        lieuDeNaissance:'',
        tel:'',
        email:'',
        rue:'',
        quartier:'',
        codePostal:'',
      },
    }),
    validations:{
      user:{
        prenom:{
          required,
          minLength:minLength(4)// Instaurer le message d'erreur if attr minlength  != null dans composant field form basic
        },
        nom:{
          required,
          minLength:minLength(4)// Instaurer le message d'erreur if attr minlength  != null dans composant field form basic
        },
        genre:{
          required,
        },
        nomDeJeuneFille:{
        },
        dateNaissance:{
          required,
        },
        lieuDeNaissance:{
          required,
        },
        tel:{
          required,
          maxLength:maxLength(7) // Instaurer le message d'erreur if attr maxlength  != null dans composant field form basic
        },
        email:{
          required,
          email,
        },
        rue:{
          required,
        },
        quartier:{
          required,
        },
        codePostal:{
          required,
          maxLength:maxLength(5)// Instaurer le message d'erreur if attr maxlength  != null dans composant field form basic
        },
        
      }
    },
    methods: {
      updateValue(data) {
        this.user[data.name] = data.value; // permet de remonter la valeur de l'input de l'enfant aux parents pour validation
      },
      changePAge(){
        this.changePage();
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.userSaved = true
          this.sending = false
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.changePAge();
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