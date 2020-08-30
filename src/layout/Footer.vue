<template>
    <v-footer color="#2a1b3d" app >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
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
