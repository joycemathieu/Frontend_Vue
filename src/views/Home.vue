<template>
  <div class="home ">

    <!-- S'enregistrer -->
    <div class=" md-layout">
      <div class="md-layout-item md-display-3 md-primary"> Nous Rejoindre </div>
      <div  class="md-layout-item md-primary md-content"> Nous rejoindre :D </div>
    </div>


    <!-- S'authentifier -->
    <div class=" md-layout">
      <div class="md-layout-item md-display-3 md-accent"> Deja Membre ? </div>
      <div  class="md-layout-item md-accent md-content"> Venez par ici ! </div>
    </div>





    <!-- <login/> -->
  </div>
</template>

<script>

//import Login from '@/components/login.vue'

export default {
  name: 'Home',
  components: {
   //Login
  }
}
</script>

<style lang="css" scoped>
  .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
