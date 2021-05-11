<template>
  <div class="SignupUser">
    <h1>Login</h1>

    <form v-on:submit.prevent="submitForm">

      <label for="username">Identifiant</label>
      <input type="text" name="username" v-model="username">

      <label for="password">Mot de Passe</label>
      <input type="password" name="password" v-model="password">

      <button type="submit" v-on:click="submitForm">S'identifier</button>
      <p>Pas inscrit? <router-link to="/signup">Inscrivez-vous</router-link></p>

    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupUser',
  props: {
  },
  data () {
    return {
      username: "",
      password: "",
    }
  },
  methods : {
    submitForm: function () {
      alert("submitForm: " + this.username + " " + this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
