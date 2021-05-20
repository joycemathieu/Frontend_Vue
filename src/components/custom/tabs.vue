<template lang="html">
  <div class="">
    <div class="head">
      <div class="title" v-for="tab in pages" :key="tab.index" @click="activeTab = tab.index">
        {{tab.title}}
      </div>
    </div>
    <div class="content">
      <div v-for="tab in pages" :key="tab.index">
        <div v-if="activeTab === tab.index">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    pages: {
      type: Array,
      required: true,
    },
    defaultTab: {
      type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      activeTab: 0,
    }
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
