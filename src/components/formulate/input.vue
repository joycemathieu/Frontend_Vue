<template lang="html">
  <div :data-type="context.type">
    <div class="control" :class="icon || iconLookup[context.type] ? 'has-icons-left' : ''">
        <input class="input" :type="context.type" v-model="context.model" @blur="context.blurHandler"/>
        <span v-if="Object.keys(iconLookup).includes(context.type) || icon"
          class="icon is-small is-left">
        <i class="fas" :class="icon ? icon : iconLookup[context.type]"></i>
      </span>
    </div>
  </div>

</template>

<script>
const iconLookup = {
  username: 'fa-user',
  email: 'fa-envelope',
  tel: 'fa-phone',
  password: 'fa-lock',
}
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
    icon: {
      type: [String, Boolean],
      default: false,
    }
  },
  data: () => {
    return {
      iconLookup,
    }
  }

}
</script>

<style lang="css" scoped>

</style>
