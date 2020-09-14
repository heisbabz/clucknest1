<template>
    <!-- <v-footer color="#2a1b3d" app >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <v-footer class="mt-4"
    dark
    padless
    >
      <v-card
        class="flex"
        flat
        tile
      > 
        <v-card-text class="py-2 white--text text-center">
          <h3>Subscribe To Our Newsletter</h3>
        </v-card-text>

        <v-text-field
            class="pa-10"
            label="Newsletter"
            single-line
          ></v-text-field>
        <v-divider></v-divider>

        <v-card-text class="py-2 white--text text-center">
          <p> &#169; {{ new Date().getFullYear() }} <strong> Clucknest</strong>. All rights reserved</p>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
      return{
        links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      }
    }
}
</script>
