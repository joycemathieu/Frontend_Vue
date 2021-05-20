<template>
  <div class="">  
    <tabs :pages="mesTabs" :defaultTab="0"/>
  </div>
</template>

<script>
import tabs from "@/components/custom/tabs"
export default {
  name: 'Test',
  components: {
    tabs,
  },
  data: () => {
    return {
      mesTabs: [
        {
          index: 0,
          title: "Hello00World",
          content: "X0Y0Z",
        },
        {
          index: 1,
          title: "Hello11World",
          content: "X1Y2Z",
        },
        {
          index: 2,
          title: "Hello22World",
          content: "X2Y2Z",
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
