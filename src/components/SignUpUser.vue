<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="First Step" md-description="Optional" :md-done.sync="first">

        <Form v-on:changePage="setDone('first','second')"/>
        <input type="radio" v-model="user_type" value="Interimaire">
        <input type="radio" v-model="user_type" value="Client">
        {{user_type}}
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step" :md-error="secondStepError" :md-done.sync="second">
        
          <div v-if="user_type == 'Interimaire'">
            <h1>INTERIMAIRE</h1>
            <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
            <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
          </div>

          <div v-if="user_type == 'Client'">
            <h1>CLIENT</h1>
            <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
            <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
          </div>
        
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
  export default {
    name: 'StepperLinear',
    components:{
        Form,
    },
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      user_type: "Interimaire",
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
