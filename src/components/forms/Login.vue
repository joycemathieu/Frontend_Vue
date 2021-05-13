<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-25 md-small-size-100 login">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="username">Nom d'utilisateur</label>
                <md-input name="username" id="username" autocomplete="given-name" v-model="form.username" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.username.required">Le Nom d'utilisateur est requis</span>
                <span class="md-error" v-else-if="!$v.form.username.minlength">Le Nom d'utilisateur est invalide !</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Mot de passe</label>
                <md-input name="password" id="password" autocomplete="family-name" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.password.required">Le Mot de passe est requis !</span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">Le Mot de passe est incorrect !</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Se connecter</md-button>
        </md-card-actions>
        <router-link to="">Mot de passe oublié ? </router-link>
        <router-link to="/SignUp">Vous n'avez pas de compte ?</router-link>
      </md-card>
      
      <md-snackbar :md-active.sync="userSaved">Vous ête connecté avec succès !</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        username: null,
        password: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        },
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
      clearForm () {
        this.$v.$reset()
        this.form.username = null
        this.form.password = null
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

        if (!this.$v.$invalid) {
          this.saveUser()
          alert("Vous ête connecté !")
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .login{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>