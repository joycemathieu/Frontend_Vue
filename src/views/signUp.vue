<template>
  <div class="Signup">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <charfield label="Nom" name="nom" v-on:value_change="updateValue"/>
        <charfield label="Nom de jeune-fille" name="nom_jf" v-on:value_change="updateValue"/>
        <charfield label="Prenom" name="prenom" v-on:value_change="updateValue"/>
        <charfield label="Autre Prenoms" name="prenom_autre" v-on:value_change="updateValue"/>
        <charfield label="Lieu de Naissance" name="lieu_naissance" v-on:value_change="updateValue"/>

        <selectfield label="Sex" name="sex"  :options="sex_options" :choices="sex_choices" v-on:value_change="updateValue"/>
        <selectfield label="Nationalité" name="nationalite" :options="pays_options" :choices="pays.data" v-on:value_change="updateValue"/>


      </div>

      <!-- test -->
      <div class="column is-3">
        <p>{{pays.schema.fields}}</p>
        <!-- <p>{{communes.schema.fields}}</p> -->
      </div>
    </div>
    <SignUpUser/>
  </div>


</template>

<script>
//import axios from 'axios'
import PAYS from "@/assets/pays.json"
//import COMMUNES from "@/assets/communes.json"
import SignUpUser from "@/components/SignUpUser.vue"
import charfield from "@/components/form/charfield.vue"
import selectfield from "@/components/form/selectfield.vue"

export default {
  name: 'Signup',
  components: {
    charfield, selectfield, SignUpUser
  },
  data: () => {
    return {
      nom: "",
      nom_jf: "",
      prenom: "",
      prenom_autre: "",
      sex: "", // select
      date_naissance: "", // date
      lieu_naissance: "", // select
      nationalite: "", // select
      arriver_nc: "", // date
      cafat: "", // int
      allocation_familliale: "", // bool
      tels: [],


      // TEST
      pays: {},
      pays_options: {label: "value", value: "code"},
      sex_choices: [{label: "Homme", value: 1}, {label: "Femme", value: 2}, {label: "Autre", value: 3}],
      sex_options: {label: "label", value:"value"}
      // communes: {},
      // communes_options: {label: "commune", value: "index"}
    }
  },
  mounted: function () {
    this.populate_data()
  },
  methods: {
    updateValue: function(data) {

      this[data.name] = data.value

    },
    populate_data: function() {
      this.pays = JSON.parse(JSON.stringify(PAYS))
      // this.communes = JSON.parse(JSON.stringify(COMMUNES))
    }
  }
}
</script>
