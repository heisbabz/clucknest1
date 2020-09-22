<template>
    <div>
        <Navbar />
        <!-- <h1>Registration Survey Page</h1> -->
        <v-list-item three-line>
      <v-list-item-content>
        <div class="headline ma-1">We will like to know more about your farm before we proceed to the dashboard.</div>
        <!-- <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
        <v-card
    class="mx-auto survey-card shadow"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">We will like to know more about your farm before we proceed to the dashboard page.</div> -->
        <v-list-item-title class="headline mb-1">Organization</v-list-item-title>
        <v-list-item-subtitle>Are you just setting up a new farm or you already have one?</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions >          
        <router-link class="router" v-for="(option, index) in options" :key="index" :to="option.link"><v-btn class="ma-2" outlined color="#CD853F">{{ option.title }}</v-btn></router-link>
    </v-card-actions>

  </v-card>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'RegistrationSurvey',
    components: {
        Navbar
    },
    data: () => ({
      options: [
        { title: 'New farm', link: '/register-survey/new-farm'},
        { title: 'Existing farm', link: '/register-survey/existing-farm'},
      ],
    }),
}
</script>

<style scoped>
.survey-card{
    margin-top: 3%;
}
.router {
  text-decoration: none;
}
</style>