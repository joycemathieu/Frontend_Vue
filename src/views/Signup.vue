<template>
  <div class="Signup">
    <div class="columns">

    </div>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <SignUpUser/>
      </div>
    </div>
  </div>


</template>

<script>
// import axios from 'axios'
// import PAYS from "@/assets/pays.json"
// import COMMUNES from "@/assets/communes.json"
import SignUpUser from "@/components/SignUpUser.vue"

export default {
  name: 'Signup',
  components: {
    SignUpUser
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
      // this.pays = JSON.parse(JSON.stringify(PAYS))
      // this.communes = JSON.parse(JSON.stringify(COMMUNES))
    }
  }
}
</script>
