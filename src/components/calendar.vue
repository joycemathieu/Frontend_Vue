<template>
    <div>
        <FormulateForm v-model="values">
            <FormulateInput 
                type="date"
                label="Periode du"
                name="debut"
            />
            <FormulateInput 
                type="date"
                label="Au"
                name="fin"
            />
           
            <FormulateInput
                type="group"
                name="horraires"
                :repeatable=true
                add-label="Ajouter une horraire"
                @repeatableAdded="test"
            >
                <h4> {{ setLabel }} </h4>

                <FormulateInput 
                    type="time"
                    label="de"
                    name="de"
                />
                <FormulateInput 
                    type="time"
                    name="a"
                    label="a"
                />

            </FormulateInput>

            <FormulateInput 
                type="submit"
                name="save"
            />

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
    name:"calendar",
    data(){
        return{
            values:{},
            userSaved:false,
            days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            months: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
        }
    },
    methods:{
        test(){
            console.log("yolo je me répéte !")
            
        }
    },
    computed: {
        setLabel () {
            let nbJour = new Date(this.values.debut).getDate();
            let jour = new Date(this.values.debut).getDay();
            let mois = new Date(this.values.debut).getMonth();

            if(isNaN(nbJour) == false && isNaN(jour) == false && isNaN(mois) == false){
                return "horraire pour le " + this.days[jour] + " " + nbJour + " " + this.months[mois] 
            }
            return ''
        }
    }

}


</script>

<style>

</style>