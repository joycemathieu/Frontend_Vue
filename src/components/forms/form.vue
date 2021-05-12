<template>
  <div>
    <form novalidate  @submit.prevent="validateUser">
      <div class="md-title">Users</div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <FielFormExtend 
            name="prenom" 
            label="prenom" 
            type="text"
            @valueChange="updateValue"
          />
          <FielFormExtend 
            name="nom" 
            label="nom"
            type="text"
            @valueChange="updateValue"
          />
          <FieldFormSelect 
            name="genre"
            @valueChange="updateValue"
          />
          <FielFormExtend 
            name="nomDeJeuneFille" 
            label="Nom de jeune fille"
            type="text"
            @valueChange="updateValue"  
          />
          <FieldFormDate 
            label="dateNaissance"
            type="date" 
            @valueChange="updateValue"
          />
          <FielFormExtend 
            name="lieuDeNaissance" 
            label="Lieu de Naissance"
            type="text" 
            @valueChange="updateValue"
          />
          
        </div>
      
        <div class="md-layout-item" @click="done">
          <FieldForm 
            name="tel"
            label="tel" 
            type="tel"
            @valueChange="updateValue"
          />
          <FieldForm 
            name="email" 
            label="Email"
            type="email" 
            @valueChange="updateValue" 
            @click="getValidationClass (email)"
          />
          <FieldForm 
            name="rue" 
            label="Rue" 
            type="text" 
            @valueChange="updateValue"
          />
          <FieldForm 
            name="quartier" 
            label="Quartier" 
            type="text" 
            @valueChange="updateValue"
          />
          <FieldForm 
            name="codePostal" 
            label="Code Postal"
            type="number" 
            @valueChange="updateValue"
          />
        </div>
      
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
            <md-button type="submit" class="md-primary">Suivant</md-button>
        </md-card-actions>
    </div>
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
import FielFormExtend from './fields/FieldFormExtend'
import FieldFormDate from './fields/FieldFormDate'
import FieldFormSelect from './fields/FieldFormSelect'
  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components:{
      FieldForm,
      FielFormExtend,
      FieldFormDate,
      FieldFormSelect,
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
          minLength:minLength(4)
        },
        nom:{
          required,
          minLength:minLength(4)
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
          maxLength:maxLength(7)
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
        },
        
      }
    },
    methods: {
      done(){
        console.log(this.$v);
      },
      updateValue(data) {
        this.user[data.name] = data.value
      },
      clearForm () {
        this.$v.$reset()
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()
        console.log(this.$v);
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      getValidationClass (fieldName) {
        const field = this.$v.user[fieldName]
        console.log(this.$v.form);
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
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