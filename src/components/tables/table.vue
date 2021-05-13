<template>
  <div>
    <md-table v-model="searched" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">A déclarer</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state
        md-label="Aucune personne trouvé"
        :md-description="`Aucune personne avec ${search} comme nom n'a été trouver.Essayer autre chose.`">
      </md-table-empty-state>


      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

/**
 * 
 * Pour utiliser ce composant insérer en props le tableau de data
 * Mettre la props dans le v-model de md-table
 * l'attribut md-sort sur md-table définit le sort par défault
 * 
 */
export default {
  name: 'TableSearch',
  props:{
      items:{
        type:Array,
      },
  },
  data(){
    return{
      search:"",
      searched:[]
    }
  },
  methods: {
    searchOnTable(){
      if(this.search){
        this.searched = this.items.filter( item => item.name.toLowerCase().includes(this.search.toLowerCase()))
        return this.searched
      }
      return this.searched = this.items
    },
    getClass: ({ gender }) => ({
        'md-primary': gender === "Male",
        'md-accent': gender === "Female"
      }),
  },
  created () {
    this.searched = this.items
  }
  
}
</script>

<style scoped>
.md-field{
  max-width: 300px;
}
</style>

