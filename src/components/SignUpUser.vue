<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="First Step" md-description="Optional" :md-done.sync="first">
        <Formgeneral v-on:changePage="setDone('first','second')"/>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step" :md-error="secondStepError" :md-done.sync="second">
        
        <Form v-on:changePage="setDone('first','second')"/>

        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
      </md-step>

      <md-step id="third" md-label="Third Step" :md-done.sync="third">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Form from './forms/form'
import Formgeneral from './forms/formGeneral'
  export default {
    name: 'StepperLinear',
    components:{
      Form,
      Formgeneral
    },
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
    }
  }
</script>

<style lang="scss" scoped></style>