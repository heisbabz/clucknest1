<template>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on"> <v-icon>mdi-account-circle</v-icon> </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
              <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title><router-link :to="item.link">{{ item.title }}</router-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {
    name: 'AppBar',
    data: () => ({
      items: [
        { title: 'Account Profile', icon: 'mdi-account', link: '/register'},
        { title: 'Log Out', icon:'mdi-logout', link: '/login' },
      ],
    }),
}
</script>