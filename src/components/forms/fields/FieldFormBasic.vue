<template>
    <div>
        <md-field>
            <label :for="name"> {{ label }} </label>
            <md-input :type="type" :id="name" :name="name" v-model="value" :autocomplete="name" @change="sendValue" />
            <!--<span class="md-error" v-if="!validation.fieldValue.required">Ce champ est obligatoire</span>-->
        </md-field>
    </div>
</template>
<script>
export default {
    name:'FieldForm',
    props:{
        name:{
            type:String,
        },
        label:{
            type:String,
            required:false,
        },
        type:{
            type:String,
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