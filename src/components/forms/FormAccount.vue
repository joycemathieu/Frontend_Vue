<template>
  <div>
        <form novalidate  @submit.prevent="validateUser">
            <h3 class="md-title"> Informations de compte </h3>
            <md-divider></md-divider>
            <FieldForm
                name="nomDeCompte"
                label="Nom de compte"
                type="text"
                @valueChange="updateValue"
                :validationField=$v.user
            />
            <FieldForm
                name="email"
                label="Email"
                type="email"
                @valueChange="updateValue"
                :validationField=$v.user
            />
            <FieldForm
                name="motDePasse"
                label="Mot de passe"
                type="password"
                @valueChange="updateValue"
                :validationField=$v.user
            />
            <FieldForm 
                name="confirmMotDePasse"
                label="Confirmer mot de passe"
                type="password"
                @valueChange="updateValue"
                :validationField=$v.user
            />
        <md-button type="submit" class="md-primary">Suivant</md-button>
      </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
required,
email,
sameAs
} from 'vuelidate/lib/validators'
import FieldForm from './fields/FieldFormBasic'
export default {
    name:'formGeneral',
    mixins: [validationMixin],
    components:{
        FieldForm,
    },
    data(){
        return{
            userSaved: false,
            sending: false,
            lastUser: null,
            user:{
                nomDeCompte:null,
                email:null,
                motDePasse:null,
                confirmMotDePasse:null
            }
        }
    },
    validations:{
        user:{
            nomDeCompte:{
                required,
            },
            email:{
                required,
                email
            },
            motDePasse:{
                required,
            },
            confirmMotDePasse:{
                required,
                sameAsPassword: sameAs('motDePasse')
                
            }
        }
    },
    methods:{
        updateValue(data) {
        this.user[data.name] = data.value; // permet de remonter la valeur de l'input de l'enfant aux parents pour validation
      },
    }
}
</script>

<style>

</style>