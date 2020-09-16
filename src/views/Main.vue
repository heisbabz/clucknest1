<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="shadow">
        <SidebarNav />
    </v-navigation-drawer>
      <!-- #ffa700, #6c4b18, #f7ecdb, #e6c592, #52a790 -->
    <v-app-bar app color="#2a1b3d" dark>
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
      <div class="dashboard">
        <div class="dash-overview">
          <div class="row">
            <v-card class="mx-auto mt-5" width="300" >
              <v-card-text>
                <div>TOTAL BIRDS</div>
                <p class="display-1 text--primary">2,680</p>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto mt-5" width="300" >
              <v-card-text>
                <div>EGG SALES</div>
                <p class="display-1 text--primary">320</p>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto mt-5" width="300" >
              <v-card-text>
                <div>INCOME</div>
                <p class="display-1 text--primary">32,000</p>
              </v-card-text>
            </v-card>
          </div>
        </div>
        <v-divider></v-divider>
        
      </div>
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
import SidebarNav from '@/layout/SidebarNav'
import Footer from '@/layout/Footer'
import AppBar from '@/layout/AppBar'

export default {
    name: 'Main',
    components: {
        SidebarNav,
        AppBar,
        Footer,
    },
    data: () => ({
      drawer: null,
    })
}
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}
.main {
  width: 100vh;
  height: 100vw;
}
.dashboard {
  height: 100vh;
}
.dash-overview {
  height: 400px;
  background-color: #44318d;
}
.dash-overview {
  height: 400px;
}
</style>>