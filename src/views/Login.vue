<template>
  <div>
    <Navbar />
    <div class="login container shadow mt-5 p-4">
    <form class="mt-2" @submit.prevent="loginSubmit">
      <h3 class="a">LOGIN</h3>
      <div class="form-group pt-3">
        <label for="loginEmail">Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="loginPassword">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="loginCheck">
        <label class="form-check-label" for="loginCheck">Keep me signed in</label>
      </div>
      <button type="submit" class="btn btn-primary mt-4 lb shadow">Submit</button>
    </form>
  </div>
  </div>
</template>

<script scoped>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Login',
  components: {
    Navbar
  },
  data(){
    return{

    }
  }
}
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  max-width: 500px;
  border-radius: 10px;
  color: #CD853F;
}
a {
  justify-content: center;
}
.lb {
  background-color: #CD853F;
  border: #CD853F;
}
.lb:hover {
  background-color: #fff;
  color: #CD853F;
  border: 1px solid #CD853F;
}
input:focus {
  -webkit-tap-highlight-color: #CD853F;
}
</style>