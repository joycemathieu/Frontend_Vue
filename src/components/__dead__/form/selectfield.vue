<template>
    <!-- {{ }} -->
    <div class="field is-horizontal">
      <div class="field-label">
        <label :for="name" class="label">{{label}}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <!-- <input class="input" type="text" :name="name" v-model="value" v-on:change="sendValue"> -->
            <div class="select">
              <select name="" v-model="value" v-on:change="sendValue">
                <option v-for="choice in choices" v-bind:key="choice"  :value="choice[options.value]">{{choice[options.label]}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>


export default {
  name: 'selectfield',
  props: {
    label: String,
    name: String,
    choices: Array,
    options: Object,
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
