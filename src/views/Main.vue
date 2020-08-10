<template>
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="shadow">
        <SidebarNav />
    </v-navigation-drawer>

    <v-app-bar app color="#CD853F" dark class="ma-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CLUCKNEST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on"> <v-icon>mdi-account-circle</v-icon> </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="btn">
              <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title><router-link :to="item.link">{{ item.title }}</router-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center" >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on" >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
                <!-- <Flock v-on="on"/> -->
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="#CD853F" app >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>>

<script>
import SidebarNav from '@/layout/SidebarNav'
// import Flock from '@/views/main/Flock'
// import MainNavbar from '@/layout/MainNavbar'
// import Footer from '@/components/Footer'

export default {
    name: 'Main',
    components: {
        SidebarNav,
        // Flock
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Account Profile', icon: 'mdi-account', link: '/register'},
        { title: 'Log Out', icon:'mdi-logout', link: '/login' },
      ],
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
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