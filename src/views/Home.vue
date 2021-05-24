<template>
  <div class="home ">
    <div class="column is-one-quarter">
      <div class="card">

        <Login />

      </div>

    </div>





    <!-- <login/> -->
  </div>
</template>

<script>

import Login from '@/components/login.vue'

export default {
  name: 'Home',
  components: {
   Login
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
