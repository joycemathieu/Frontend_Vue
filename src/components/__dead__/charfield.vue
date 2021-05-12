<template>
    <!-- {{ }} -->
    <div class="field is-horizontal">
      <div class="field-label">
        <label :for="name" class="label">{{label}}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="text" :name="name" v-model="value" v-on:change="sendValue" :placeholder="placeholder">
          </div>
        </div>
      </div>

    </div>
</template>

<script>


export default {
  name: 'charfield',
  props: {
    label: String,
    name: String,
  },
  data: () => {
    return {
      value: "",
    }
  },
  methods: {
    sendValue: function () {
      this.$emit("value_change", {value: this.value, name: this.name})
    }
  }
}
</script>
