<template>
  <v-list dense>
    <v-list>
      <div class="pa-5 side-logo">
        <p style="font-weight:700;">Clucknest</p>
        <v-list-item-subtitle>Obasanjo Farms</v-list-item-subtitle>  
        <hr>      
      </div>
    </v-list>
    
    <v-spacer></v-spacer>
    <v-list-item link v-for="(sidebarItem, index) in sidebarItems" :key="index" router :to="sidebarItem.link" class="sidebar-item">
      <v-list-item-action>
        <v-icon>{{sidebarItem.icon}}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ sidebarItem.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      sidebarItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link:'/main/dashboard'},
        { title: 'Flock', icon:'mdi-duck', link:'/main/flock'},
        { title: 'Medication', icon:'mdi-pill', link:'/main/medication'},
        { title: 'Vaccination', icon:'mdi-needle', link:'/main/vaccination'},
        { title: 'Expenses', icon:'mdi-credit-card', link:'/main/expenses'},
        { title: 'Income', icon:'mdi-cash-multiple', link:'/main/income'},
      ],
    }),
}
</script>

<style scoped>
.sidebar{
    /* width: 15%; */
    height: 90vh;
    font-size: 2em;
}
.side-logo {
    font-size: 30px;
    font-weight: 300;
}
.sidebar-item {
    text-decoration: none;
}
</style>