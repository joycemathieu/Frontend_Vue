<template>
  <div>
        <FieldForm 
            label="Nom de compte"
            type="text"
        />
        <FieldForm 
            label="Email"
            type="email"
        />
        <FieldForm 
            label="Mot de passe"
            type="password"
        />

        <FieldForm 
        label="Confirmer mot de passe"
        type="password"
      />
  </div>
</template>

<script>
import FieldForm from './fields/FieldFormBasic'
export default {
    name:'formGeneral',
    components:{
        FieldForm,
    },
    data(){
        return{

        }
    },
}
</script>

<style>

</style>