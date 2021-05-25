<template>
    <div :data-type="context.type">
        <div class="field has-addons">
            <div class="control">
                <a class="button is-static">
                +687
                </a>
            </div>
            <div class="control">
                <input class="input" :type="context.type" v-model="context.model" @blur="context.blurHandler" :placeholder="context.placeholder">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'tel',
    props: {
        context: {
        type: Object,
        required: true,
        },
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>