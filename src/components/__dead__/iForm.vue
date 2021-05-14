<template lang="html">
  <div class="">
    <iField v-for="field in fields" :field="field" v-bind:key="field.name" v-on:validated="saveValue"/>
  </div>
</template>

<script>
import iField from "@/components/__dead__/iField.vue"
export default {
}
</script>

<style lang="css" scoped>
</style>
