<template>
  <div>
    <form novalidate  @submit.prevent="validateUser">
      <div class="md-title">Users</div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <FielFormExtend attrField="firstName" label="Prenom"/>
          <FielFormExtend attrField="lastName" label="Nom"/>
          <!-- Trouver moyen de passer verif seulement si le genre femme est coché -->
          <FielFormExtend attrField="lastNameGirl" label="Nom de jeune fille"/>

          <FieldFormDate label="Date de naissance"/>
          <FielFormExtend attrField="lieuDeNaissance" label="Lieu de Naissance"/>
        </div>
      
        <div class="md-layout-item">
          <FieldForm attrField="tel" label="Tel" @input="setName($event.target.value)" filedValue="form.filedValue"/>
          <FieldForm attrField="email" label="Email"/>
          <FieldForm attrField="Rue" label="Rue"/>
          <FieldForm attrField="Quartier" label="Quartier"/>
          <FieldForm attrField="Code Postal" label="Code Postal"/>
        </div>
      
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
            <md-button type="submit" @click="done" class="md-primary" :disabled="sending">Suivant</md-button>
        </md-card-actions>

        <md-snackbar :md-active.sync="userSaved">Bien joué {{ lastUser }} ,vous pouvez passer a l'étape suivante !</md-snackbar>
    </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
required,
} from 'vuelidate/lib/validators'
import FieldForm from './fields/FieldFormBasic'
import FielFormExtend from './fields/FieldFormExtend'
import FieldFormDate from './fields/FieldFormDate'
  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components:{
      FieldForm,
      FielFormExtend,
      FieldFormDate,
    },
    data: () => ({
      userSaved: false,
      sending: false,
      lastUser: null,
      fieldValue:'',
      form:{
        filedValue:null,
      }
    }),
    validations:{
      fieldValue:{
        required,

      }
    },
    methods: {
      done(){
        console.log(this.$v);
      },
    setName(value) {
      this.fieldValue = value;
      console.log(this.fieldValue);
      this.$v.fieldValue.$touch();
    },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.genre = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
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