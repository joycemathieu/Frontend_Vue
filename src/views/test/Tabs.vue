<template>
  <div class="">
    <div class="container">
      <tabs :pages="mesTabs" :defaultTab="0"/>

    </div>
  </div>
</template>

<script>

import tabs from "@/components/custom/tabs"
import FormAccount from "@/components/formStep/formAccount"
import FormPerso from "@/components/formStep/formPersonnelle"
import FormPro from "@/components/formStep/formProfessionnelle"

export default {
  name: 'Test',
  components: {
    tabs
  },
  data: () => {
    return {
      mesTabs: [
        {
          index: 0,
          title: "First Step",
          content: FormAccount,
        },
        {
          index: 1,
          title: "Second Step",
          content: FormPerso,
        },
        {
          index: 2,
          title: "Third Step",
          content: FormPro,
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
