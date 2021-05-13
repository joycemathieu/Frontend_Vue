<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="Première étape" md-description="Information de compte" :md-done.sync="first">
        <FormAccount @changePage="setDone('first','second')"/><!-- changePage Ne marche pas -->
        <md-button class="md-raised md-primary" @click="setDone('first','second')">next</md-button>
      </md-step>

      <md-step id="second" md-label="Deuxième étape" md-description="Information général" :md-done.sync="second">

        <FormGeneral @changePage="setDone('second', 'third')"/><!-- changePage Ne marche pas -->
        <md-button class="md-raised md-primary" @click="setDone('second','third')">next</md-button>
      </md-step>

      <md-step id="third" md-label="Troisième étape" md-description="Information professionnelle" :md-done.sync="third">

        <FormPro />
        <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import FormGeneral from './forms/formPersonelle'
import FormAccount from './forms/FormAccount'
import FormPro from './forms/formProfessionnelle'
  export default {
    name: 'StepperLinear',
    components:{
      FormGeneral,
      FormAccount,
      FormPro
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
