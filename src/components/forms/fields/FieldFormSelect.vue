<template>
    <div>
        <md-field>
            <label for="Genre">Genre</label>
            <md-select name="Genre" id="Genre" v-model="value" md-dense @change="sendValue">
            <md-option></md-option>
            <md-option value="Homme">Homme</md-option>
            <md-option value="Femme">Femme</md-option>
            <md-option value="Autre">Autres</md-option>
            </md-select>
        </md-field>

    </div>
</template>

<script>
export default {
    name:'FieldFormSelect',
    props:{
        name:{
            type:String,
        },
    },
    data(){
        return{
            value:'',
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