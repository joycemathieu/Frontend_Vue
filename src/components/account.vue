<template>
    <div>
        <h2 class="subscribe_title">S'inscrire</h2>
        <FormulateForm v-model="values" :schema="schema" />
        <button class="button modal-button" data-target="modal" aria-haspopup="true" @click="isActive = !isActive">
            Déjà inscrit ? Connectez-vous.
        </button>
        <!--modal-->
        <div class="modal" :class="isActive ? 'is-active' : ''">
          <div class="modal-background"></div>
              <div class="modal-content">
                  <div class="column">
                    <div class="card">
                      <div class="card-content">
                        <div class="content">
                          <Login />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <i class="modal-close is-large" aria-label="close"  @click="isActive = false"></i>
        </div>
    </div>
</template>

<script>
import Schema from "../schemas/FormShema/Account"
import Login from '../components/login.vue'


export default {
  name: 'Account',
    data: () => ({
    schema:Schema,
    values:{},
    isActive: false,
  }),
  components: {
    Login
  }
}
</script>

<style lang="css" scoped>

  .subscribe_title{
      text-align: center
  }

</style>