<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">

            <div class="md-title">Users</div>

            <md-content class="step">
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('firstName')">
                            <label for="first-name">Prenom</label>
                            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.firstName.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.firstName.minlength">Champ invalide !</span>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('lastName')">
                            <label for="last-name">Nom</label>
                            <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.lastName.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.lastName.minlength">Champ invalide !</span>
                        </md-field>
                    </div>
                </div>

                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('gender')">
                            <label for="gender">Gender</label>
                            <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                            <md-option></md-option>
                            <md-option value="M">Homme</md-option>
                            <md-option value="F">Femme</md-option>
                            <md-option value="F">Autres</md-option>
                            </md-select>
                            <span class="md-error">Ce champ est obligatoire</span>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('age')">
                            <label for="age">Age</label>
                            <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.age.required">Ce champ est obligatoire</span>
                            <span class="md-error" v-else-if="!$v.form.age.maxlength">Champ invalide !</span>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('email')">
                        <label for="email">Email</label>
                        <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                        <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                    </md-field>
                </div>
            </md-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
                <md-button type="submit" @click="test" class="md-primary" :disabled="sending">Suivant</md-button>
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
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
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
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
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
      test(){
          console.log(this.$v);
        if(!this.$v.$invalid){
            this.$store.commit('done');
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
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
.md-layout{
    flex-direction: column;
}
.md-button{
    margin: 0 auto;
}
.step{
    width: 50%;
    margin: 0 auto;
}
</style>