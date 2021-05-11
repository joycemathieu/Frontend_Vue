<template>
  <!-- A clean !!! -->
  <div class="login">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="identifiant" />
      </div>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Mot de passe" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">S'authentifier</button>
      </p>
    </div>
    <div>
        <a :href='Login'>Vous n'êtes pas inscrit ? Cliquez ici</a>
    </div>
    <div>
        <a href='#'>Mot de passe perdu ?</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
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