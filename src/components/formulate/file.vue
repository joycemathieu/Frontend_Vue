<template lang="html">
  <div :data-type="context.type">
    <div class="file has-name">
      <label class="file-label">
        <input class="file-input" :type="context.type" v-model="context.model" @blur="context.blurHandler" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            {{ context.label }}
          </span>
        </span>
        <span class="file-name">
          {{ context.model }}
        </span>
      </label>
    </div>

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
