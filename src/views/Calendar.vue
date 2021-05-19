<template>
    <div>
        <FormulateForm v-model="values">
            <FormulateInput 
                type="group"
                name="tester"
                :repeatable=true
                add-label = "add new day"
                #default="{ index }"
            >
                <p> Look my IndexGroup {{ index }} </p>
                <FormulateInput 
                    type="date"
                    label="Periode du"
                    name="debut"
                    :value="index"
                />
                <FormulateInput 
                    type="date"
                    label="Au"
                    name="fin"
                />
                <FormulateInput 
                    type="group"
                    name="horraire"
                    label="Horraire"
                    v-for="(day,index) in days"
                    :key="index"
                    
                >
                    <FormulateInput 
                        type="time"
                        label="de"
                        name="de"
                    />
                    <FormulateInput 
                        type="time"
                        label="a"
                        name="a"
                    />
                </FormulateInput>
            </FormulateInput>
        </FormulateForm>

        <md-content >
            <md-tab>
                <h3>Previsualisation des valeurs aux submits</h3>
                <pre v-text="values" > </pre>
            </md-tab>
        </md-content>
    </div>
</template>

<script>
export default {
    name:"showCalendar",
    data(){
        return{
            values:{},
            test:"",
            debut:null,
            fin:null
        }
    },
    methods:{
        tester(){
            console.log("je suis dans le group !")
        }
    },
    computed: {
        days () {
            console.log("tester",this.values.tester)
            //Probleme de ouff !!! OoO !!! 
            for(let i =0; this.values.tester ;i++){
                console.log("item",i);
           
                let startFormat = new Date(this.values.tester[i].debut).getTime() / 86400000;
                let endFormat = new Date(this.values.tester[i].fin).getTime() / 86400000;
                if (this.debut !=0 && this.fin != 0) {
                    var output = []
                    const n_days = Math.floor((endFormat - startFormat)) + 1;
                    for (let i = 0; i < n_days; i++){
                        output.push(this.debut + i * 86400000);
                    
                    }
                    return output
                }
                else {
                    return this.debut ? this.debut : Date()
                }
             }
             return 1
        }
    }
}
</script>

<style>

</style>