<template>
  <div class="home">
    <div class="columns">
      <div class="background column is-6 is-offset-1">
        <h2 class="interim_title">Intérimaire</h2>
        <p>Votre espace pour</p>
        <p>
          <i class="fas fa-user-edit"> Gérer votre profil de chercheur d'emploi</i>
          <i class="fas fa-clipboard-list"> Accéder à vos contrats de travail et bulletin de paie</i>
          <i class="far fa-question-circle"> Accéder à vos informations de missions</i>
        </p>
      </div>
      <!-- <background/> -->
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="content">
                <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Account from '../components/account.vue'

export default {
  name: 'Home',
  components: {
    Account
  }
}
</script>

<style lang="css" scoped>
.background{
  background-color: #F26522;
  color: #f1f2f2;
}
</style>
