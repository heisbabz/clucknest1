<template>
<div class="main-navbar">
    <v-app-bar color="dark-gray accent-4" dense dark class="d-flex" outlined tile>

        <v-toolbar-title>CLUCKNEST</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</div>
</template>

<script>
export default {
    name: 'MainNavbar'
}
</script>

<style>
* {
    font-family: 'Montserrat', sans-serif;
}

.main-navbar {
    width: 85vw;
}
</style>
