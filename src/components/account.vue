<template>
    <div>
        <h2 class="subscribe_title">S'inscrire</h2>
        <FormulateForm v-model="values" :schema="schema" />
        <i class="modal-button" data-target="modal" aria-haspopup="true" @click="isActive = !isActive">
            Déjà inscrit ? Cliquez-ici pour vous connecter.
        </i>
        <ModalLogin :isActive="isActive"/>
    </div>
</template>

<script>
import Schema from "../schemas/FormShema/Account"
import ModalLogin from '@/views/modal-login.vue'

export default {
  name: 'Account',
    data: () => ({
    schema:Schema,
    values:{},
    isActive: false,
  }),
  components: {
    ModalLogin
  }
}
</script>

<style lang="css" scoped>

  .subscribe_title{
      text-align: center
  }
  .modal-button{
    cursor:pointer
  }

</style>