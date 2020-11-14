<template>
<v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </template>
    <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>
                <router-link :to="item.link">{{ item.title }}</router-link>
            </v-list-item-title>
        </v-list-item>
        <hr>
        <v-list-item>
            <v-btn icon>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <v-list-item-title @click="logOut">
                <router-link to="/login">Log Out</router-link>
            </v-list-item-title>
        </v-list-item>
    </v-list>
</v-menu>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name: 'AppBar',
    data: () => ({
        items: [{
            title: 'Account Profile',
            icon: 'mdi-account',
            link: '/register'
        }, ],
    }),
    methods: {
        async logOut() {
            try {
                await firebase.auth().signOut();
                this.$router.push({
                    name: 'Login',
                    params: {
                        name: this.name
                    }
                })
            } catch (err) {
                this.$toastr.e(err.message);
            }
        }
    }
}
</script>
