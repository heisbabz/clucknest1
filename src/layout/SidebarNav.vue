<template>
    <v-list dense>
        <v-list-main>
            <div class="pa-5 side-logo">
                <p style="font-weight:700;">Clucknest</p>
                <v-list-item-subtitle>Talawan Farms</v-list-item-subtitle>  
                <hr>      
            </div>
        </v-list-main>
        
        <v-spacer></v-spacer>
    <v-list-item link v-for="(item, index) in items" :key="index" @click="btn">
        <v-list-item-action>
        <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
        <v-list-item-title :to="item.link">{{ item.title }}</v-list-item-title>
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
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard'},
        { title: 'Flock', icon:'mdi-duck', link:'/main/flock'},
        { title: 'Medication', icon:'mdi-pill'},
        { title: 'Vaccination', icon:'mdi-needle'},
        { title: 'Expenses', icon:'mdi-credit-card'},
        { title: 'Income', icon:'mdi-cash-multiple'},
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
</style>