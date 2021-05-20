<template lang="html">
  <div :data-type="context.type" class="md-layout" >

    <label>

      <input class="file-input" :type="context.type">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          {{ context.label }}
        </span>

      </span>

    </label>

    <md-field class="md-layout-item md-size-100">
      <label :for="context.id">
        {{ context.label }}
      </label>
      <md-file :type="context.type" v-model="context.model" @blur="context.blurHandler"/>
    </md-field>
  </div>

</template>

<script>

export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
    }
  }

}
</script>

<style lang="css" scoped>

</style>
