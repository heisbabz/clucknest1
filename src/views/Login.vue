<template>
  <div>
    <Navbar />
    <div class="login container shadow mt-5 p-4">
      <form class="mt-2" @submit.prevent="loginSubmit">
        <h3 class="text-center">LOGIN</h3>
        <div class="form-group pt-3">
          <label for="loginEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="users.email"
          />
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="users.password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="loginCheck" />
          <label class="form-check-label" for="loginCheck"
            >Keep me signed in</label
          >
        </div>
        <vue-toastr ref="toastr"></vue-toastr>
        <button type="submit" class="btn btn-primary mt-4 lb shadow">
          Submit
        </button>
        <div class="mt-5 nt-reg">
          <span
            >Not yet registered?
            <router-link to="/register">Register</router-link> now</span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import VueToastr from "vue-toastr";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  components: {
    Navbar,
    VueToastr,
  },
  data() {
    return {
      users: {
        email: null,
        password: null,
      },
      feedback: null,
    };
  },
  methods: {
    async loginSubmit() {
      if (this.users.email && this.users.password) {
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.users.email, this.users.password)
            .then(() => {
              this.$toastr.s("Login successful!");
              this.$router
                .push({
                  name: "Main",
                  params: {
                    name: this.name,
                  },
                })
                .catch(() => {});
            })
            .catch((err) => {
              this.$toastr.e(err.message);
            });
          this.feedback = null;
        } catch (err) {
          this.$toastr.e(err.message);
        }
      } else {
        this.$toastr.e("Please fill in the empty field(s)");
      }
    },
  },
};
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.login {
  max-width: 500px;
  border-radius: 10px;
  color: #cd853f;
}

.lb {
  background-color: #cd853f;
  border: #cd853f;
  color: #fff;
}

.lb:hover {
  background-color: #fff;
  color: #cd853f;
  border: 1px solid #cd853f;
}

input:focus {
  -webkit-tap-highlight-color: #cd853f;
}

.nt-reg {
  font-size: small;
}
</style>
