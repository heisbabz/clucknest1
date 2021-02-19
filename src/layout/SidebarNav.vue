<template>
  <v-list dense>
    <v-list>
      <div class="pa-5 side-logo">
        <p style="font-weight: 700">Clucknest</p>
        <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
        <hr />
      </div>
    </v-list>

    <v-spacer></v-spacer>

    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.items"
        :key="child.title"
        :to="child.link"
        class="sidebar-item"
      >
        <v-list-item-action>
          <v-icon>{{ child.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Sidebar",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    users: [],
    email: null,
    items: [
      {
        items: [
          {
            title: "Dashboard",
            icon: "mdi-view-dashboard",
            link: "/main/dashboard",
          },
        ],
        title: "Dashboard",
      },
      {
        items: [
          { title: "Batch", icon: "mdi-duck", link: "/main/flock" },
          { title: "Health", icon: "mdi-needle", link: "/main/vaccination" },
          {
            title: "Expenses",
            icon: "mdi-credit-card",
            link: "/main/expenses",
          },
          { title: "Income", icon: "mdi-cash-multiple", link: "/main/income" },
          {
            title: "Daily Record",
            icon: "mdi-text-box-check-outline",
            link: "/main/daily-record",
          },
        ],
        title: "Records",
      },
      {
        icon: "mdi-view-dashboard",
        title: "Services",
      },
    ],
  }),
  created() {
    //fetch data from firestore
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.email = user.email;
    } else {
      // No user is signed in.
    }
  },
};
</script>

<style scoped>
.sidebar {
  /* width: 15%; */
  height: 90vh;
  font-size: 2em;
}

.side-logo {
  font-size: 30px;
  font-weight: 300;
}

.sidebar-item {
  text-decoration: none;
}
</style>
