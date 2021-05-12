<template>
    <div>
        <md-datepicker v-model="value" @change="sendValue">
            <label> {{ label }} </label>
            <!--<span class="md-error" v-if="!$v.form.date.required">Ce champ est obligatoire</span>-->
        </md-datepicker>
        <p> {{ this.valueFormat }} </p>
    </div>
</template>

<script>
import format from 'date-fns/format'
export default {
    name:'FieldFormDate',
    props:{
        label:{
            type:String,
        },
    },
    data(){
        
        return{
            value:null,
            valueFormat:'',
        }
    },
    methods:{
        sendValue() {
            let dateFormat = this.$material.locale.dateFormat || 'yyyy-MM-dd';
            this.valueFormat = format(this.value,dateFormat)
            this.$emit("valueChange", {value: this.valueFormat, name: this.name})
        }
    }
}
</script>

<style>

</style>