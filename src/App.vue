<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/SignUp">Sign Up</router-link>|
      <router-link to="/interimaire">Interimaire</router-link>
    </div>
    <router-view/>
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
