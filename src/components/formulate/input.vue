<template lang="html">
  <div :data-type="context.type" >
    <div class="md-layout" >
      <md-field class="md-layout-item md-size-100">
        <span v-if="Object.keys(iconLookup).includes(context.type) || icon" class="md-icon md-icon-font md-theme-default"> {{ icon ? icon : iconLookup[context.type] }} </span>
        <label :for="context.id">
          {{ context.label }}
        </label>
        <md-input  :type="context.type" v-model="context.model" @blur="context.blurHandler"/>
      </md-field>
    </div>
    
  </div>

</template>

<script>
const iconLookup = {
  username: 'account_circle',
  email: 'mail',
  tel: 'phone_iphone',
  password: 'lock',
  number: 'dialpad'
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
