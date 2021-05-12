<template>
  <div>
       <md-field>
            <label :for="name"> {{ label }} </label>
            <md-input type='text' :name="name" :id="name" :autocomplete="name" v-model="value" @change="sendValue"/>
            <!--<span class="md-error" v-if="!$v.form.attrField.required">Ce champ est obligatoire</span>
            <span class="md-error" v-else-if="!$v.form.attrField.minLength">Champ invalide !</span>-->
        </md-field>
  </div>
</template>

<script>

export default {
  name:'FieldFormExtend',
  props:{
      name:{
        type:String,
        required:true,
      },
      label:{
        type:String,
        required:false,
          
      }

  },
  data(){
      return{
        value:"",
      }
  },
   methods:{
        sendValue() {
            this.$emit("valueChange", {value: this.value, name: this.name})
        }
    }
}
</script>

<style>

</style>