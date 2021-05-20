<template>
  <div class="">
    <tabs :pages="mesTabs" :defaultTab="0"/>
    <div v-if="false">

    </div>

  </div>
</template>

<script>

import tabs from "@/components/custom/tabs"
import test from "@/views/test/Form"
import Home from "@/views/Home"
import Interimaire from "@/views/interimaire"

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
          title: "Hello00World",
          content: test,
        },
        {
          index: 1,
          title: "Hello11World",
          content: Home,
        },
        {
          index: 2,
          title: "Hello22World",
          content: Interimaire,
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
