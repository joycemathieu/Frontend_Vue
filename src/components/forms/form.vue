<template>
    <div>
        <form novalidate  @submit.prevent="validateUser">

            <div class="md-title">Users</div>

            
                <div class="md-layout md-gutter">
                    <div class="md-layout-item">
                        <md-field :class="getValidationClass('firstName')">
                            <label for="first-name">Prenom</label>
                            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.firstName.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.firstName.minlength">Champ invalide !</span>
                        </md-field>


                        <md-field :class="getValidationClass('lastName')">
                            <label for="last-name">Nom</label>
                            <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.lastName.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.lastName.minlength">Champ invalide !</span>
                        </md-field>


                        <!-- Trouver moyen de passer verif seulement si le genre femme est coché -->
                        <md-field :class="getValidationClass('lastName')">
                            <label for="lastNameGirl">Nom de Jeune fille</label>
                            <md-input name="lastNameGirl" id="lastNameGirl" autocomplete="family-name" v-model="form.lastNameGirl" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.lastNameGirl.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.lastNameGirl.minlength">Champ invalide !</span>
                        </md-field>

                        <md-datepicker v-model="form.date" :disabled="sending" :class="getValidationClass('date')">
                            <label>Date de naissance</label>
                            <span class="md-error" v-if="!$v.form.date.required">Ce champ est obligatoire</span>
                        </md-datepicker>

                        <md-field :class="getValidationClass('lieuDeNaissance')">
                            <label for="LieuDeNaissance">Lieu de Naissance</label>
                            <md-input name="LieuDeNaissance" id="LieuDeNaissance" autocomplete="family-name" v-model="form.lieuDeNaissance" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.lieuDeNaissance.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.lieuDeNaissance.minlength">Champ invalide !</span>
                        </md-field>

                        <md-field :class="getValidationClass('cafat')">
                            <label for="cafat">Numéro Cafat</label>
                            <md-input type='number' name="cafat" id="cafat" autocomplete="family-name" v-model="form.cafat" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.cafat.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.cafat.maxlength">Champ invalide !</span>
                        </md-field>

                        <div class="md-layout-item md-small-size-100">
                            <md-title>Adresse</md-title>

                            <md-field :class="getValidationClassSpec('rue')">
                                <label for="Rue">Rue</label>
                                <md-input name="Rue" id="Rue" autocomplete="family-name" v-model="form.adresse.rue" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.adresse.rue.required">Ce champ est obligatoire</span>
                            </md-field>

                            <md-field :class="getValidationClassSpec('quartier')">
                                <label for="Quartier">Quartier</label>
                                <md-input name="Quartier" id="Quartier" autocomplete="family-name" v-model="form.adresse.quartier" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.adresse.quartier.required">Ce champ est obligatoire</span>
                            </md-field>

                            <md-field :class="getValidationClassSpec('quartier')">
                                <label for="Code Postal">Code Postal</label>
                                <md-input name="Code Postal" id="Code Postal" autocomplete="family-name" v-model="form.adresse.codePostal" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.adresse.codePostal.required">Ce champ est obligatoire</span>
                            </md-field>
                        </div>
                    </div>

                    <div class="md-layout-item">
                    
                        <md-field :class="getValidationClass('genre')">
                            <label for="Genre">Genre</label>
                            <md-select name="Genre" id="Genre" v-model="form.genre" md-dense :disabled="sending">
                            <md-option></md-option>
                            <md-option value="Homme">Homme</md-option>
                            <md-option value="Femme">Femme</md-option>
                            <md-option value="Autre">Autres</md-option>
                            </md-select>
                            <span class="md-error">Ce champ est obligatoire</span>
                        </md-field>

                        <md-field :class="getValidationClass('tel')">
                            <label for="tel">Tel</label>
                            <md-input type="number" id="tel" name="tel" autocomplete="tel" v-model="form.tel" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.tel.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.tel.maxlength">Champ invalide !</span>
                        </md-field>


                        <md-field :class="getValidationClass('email')">
                            <label for="email">Email</label>
                            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                        </md-field>
                    </div>
                </div>
            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
                <md-button type="submit" @click="done" class="md-primary" :disabled="sending">Suivant</md-button>
            </md-card-actions>

            <md-snackbar :md-active.sync="userSaved">Bien joué {{ lastUser }} ,vous pouvez passer a l'étape suivante !</md-snackbar>
        </form>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        lastNameGirl:null,
        genre: null,
        email: null,
        tel:null,
        date:null,
        lieuDeNaissance:null,
        cafat:null,
        adresse:{
            rue:null,
            quartier:null,
            codePostal:null
        }
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      female:false,
    }),

    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        lastNameGirl:{
            required,
            minLength: minLength(3)  
        },
        genre: {
          required
        },
        email: {
          required,
          email
        },
        date:{
            required,
        },
        tel:{
            required,
            maxlength:maxLength(6)
        },
        lieuDeNaissance:{
            required,
        },
        cafat:{
            required,
            maxLength:maxLength(7)
        },
        adresse:{
            rue:{
                required,
            },
            quartier:{
                required,
            },
            codePostal:{
                required,
                maxLength:maxLength(6)
            }
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      getValidationClassSpec (fieldName) {
        const field = this.$v.form.adresse[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      done(){
        if(!this.$v.$invalid){
            this.$emit('changePage');
        }
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

<style lang="css" scoped>
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