<template>
  <v-list dense>
    <v-list>
      <div class="pa-5 side-logo">
        <p style="font-weight:700;">Clucknest</p>
        <v-list-item-subtitle>{{email}}</v-list-item-subtitle> 
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
import firebase from 'firebase'

export default {
    name: "Sidebar",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      users: [],
      email: null,
      sidebarItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link:'/main/dashboard'},
        { title: 'Daily Record', icon:'mdi-text-box-check-outline', link:'/main/daily-record'},
        { title: 'Batch', icon:'mdi-duck', link:'/main/flock'},
        { title: 'Vaccination', icon:'mdi-needle', link:'/main/vaccination'},
        { title: 'Expenses', icon:'mdi-credit-card', link:'/main/expenses'},
        { title: 'Income', icon:'mdi-cash-multiple', link:'/main/income'},
      ],
    }),
    created(){
      //fetch data from firestore
      var user = firebase.auth().currentUser;
      if (user) {
        // User is signed in.
        this.email = user.email;
      } else {
        // No user is signed in.
      }
    }
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