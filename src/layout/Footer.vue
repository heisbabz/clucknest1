<template>
    <v-footer color="#CD853F" app >
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
