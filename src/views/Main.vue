<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="shadow">
        <SidebarNav />
    </v-navigation-drawer>
      
       <v-app-bar app color="#CD853F" dark class="ma-2">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>CLUCKNEST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" abel="Search" class="hidden-sm-and-down" ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    <AppBar />

    </v-app-bar>
    
    <v-main>
      <Dashboard />
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
import SidebarNav from '@/layout/SidebarNav'
import Footer from '@/layout/Footer'
import Dashboard from '@/layout/Dashboard'
import AppBar from '@/layout/AppBar'

export default {
    name: 'Main',
    components: {
        SidebarNav,
        Dashboard,
        AppBar,
        Footer,
    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Account Profile', icon: 'mdi-account', link: '/register'},
        { title: 'Log Out', icon:'mdi-logout', link: '/login' },
      ],
    }),
}
</script>

<style>
.main {
    width: 100vh;
    height: 100vw;
}
</style>>