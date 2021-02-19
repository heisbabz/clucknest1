<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="shadow">
        <SidebarNav />
    </v-navigation-drawer>
    <!-- #ffa700, #6c4b18, #f7ecdb, #e6c592, #52a790 -->
    <v-app-bar app color="#CD853F" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>CLUCKNEST</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" abel="Search" class="hidden-sm-and-down"></v-text-field>
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
                <div class="row mt-5">
                    <v-card class="mx-auto mt-5" width="300">
                        <v-card-text class="text-center shadow">
                            <div>TOTAL BIRDS</div>
                            <p class="display-1 text--primary">0</p>
                        </v-card-text>
                    </v-card>
                    <v-card class="mx-auto mt-5" width="300">
                        <v-card-text class="text-center shadow">
                            <div>EGG SALES</div>
                            <p class="display-1 text--primary">0</p>
                        </v-card-text>
                    </v-card>
                    <v-card class="mx-auto mt-5" width="300">
                        <v-card-text class="text-center shadow">
                            <div>INCOME</div>
                            <p class="display-1 text--primary">0</p>
                        </v-card-text>
                    </v-card>
                    
                </div>
            </div>

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
    }),
    // created() {
    //   let ref = db.collection('users');
    //   //get current user
    //   ref.where('user_id', '==', firebase.auth().currentUser.uid.get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       this.user = doc.data()
    //     })
    //   })
    // )}
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
    /* background-color: #44318d; */
}

.dash-overview {
    height: 400px;
}
</style>>
