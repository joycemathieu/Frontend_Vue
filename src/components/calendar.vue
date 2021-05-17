<template>
  <div>
      <md-input> Nom de mission</md-input>
      <md-datepicker v-model="selectedDate">
      <label>Select date</label>
    </md-datepicker>

  </div>
</template>

<script>
export default {
    name:"calendar",
    data(){
        return{
            Mission:{
                name:"",
                periode:{
                    du:"",
                    au:""
                },
                horraire:{
                    matin:{
                        debut:"",
                        fin:"",
                    },
                    aprem:{
                        debut:"",
                        fin:""
                    }
                }
            }
        }
    },

}


</script>

<style>

</style>