<template>
    <div :data-type="context.type">
        <input class="input" type="text" v-model="input_value" @keyup.enter="addTag" @blur="context.blurHandler">
        <span class="tag is-medium" :key="index" v-for="(comp,index) in value">
            {{ comp }}
            <button class="delete" @keyup.delete="removeTag(index)"></button>
        </span>

    </div>
</template>

<script>
export default {
    name:"tag",
    props: {
        context: {
        type: Object,
        required: true,
        },
    },
    data(){
        return{
            value:[],
            input_value:""
        }
    },
    methods:{
        addTag(){
            let val = this.input_value.trim();
            console.log(this.context)
            if (val != "" ) {
                this.value.push(val);
                this.input_value = "";
                this.context.model = this.value;
            }
        },
        removeTag(index){
            this.value.splice(index,1);
        }

    }
}
</script>

<style>

</style>