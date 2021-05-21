<template>
  <div id="app">

    <!-- NAVBAR -->
    <nav id="nav" class="navbar">
      <div class="navbar-brand">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Accueil</router-link>
          <router-link class="navbar-item" to="/SignUp">Sign Up</router-link>
          <router-link class="navbar-item" to="/interimaire">Interimaire</router-link>
        </div>

      </div>
    </nav>
    <router-view/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Interim+</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
