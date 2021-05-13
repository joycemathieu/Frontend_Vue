<template>
    <div>
        <md-field>
            <label :for="name">Genre</label>
            <md-select :name="name" :id="name" v-model="value" md-dense @change="sendValue">
            <md-option :key="index" v-for="(option,index) in options" :value="option"  > {{ option }} </md-option>
            </md-select>
            <span class="md-error" v-if="ifError(name)">Le champ  {{ label }} est requis !</span>
        </md-field>

    </div>
</template>

<script>

/**
 * Pour utiliser ce composant il faut passer les options en props
 *
 *
 */
export default {
    name:'FieldFormSelect',
    props:{
        name:{
            type:String,
        },
        label:{
            type:String,
        },
        validationField:{  //Ceci est l'objet $v (vuelidate)
            type:Object,
        },
        options:{
            type:Array
        }
    },
    data: () => {
        return{
            value: '',
        }
    },
    methods:{
        sendValue() {
          console.log("SENDING SELECT VALUE TO DADDY")
            this.$emit("valueChange", {value: this.value, name: this.name})
        },
        getValidationClass (fieldName) {
            const field = this.validationField[fieldName];

          return {'md-invalid': field.$invalid && field.$dirty}
        },
        ifError(fieldName){
            const field = this.validationField[fieldName];
            if(typeof field != "undefined"){
                const error = this.validationField[fieldName].required;
                if(!error){
                    return true;
                }
            }
        }
    }
}
</script>

<style>

</style>
