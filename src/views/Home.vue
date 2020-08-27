<template>
  <div>
    <Navbar />
    <div class="home container">
    <div class="jumbotron welcome">
      <h1 class="display-6 pb-5">WELCOME TO CLUCKNEST</h1>
      <p class="lead pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque earum at, consequatur saepe 
      possimus eum quas ad quis corporis.</p>
      <p class="lead">
        <router-link to="/register" class="btn btn-success btn-lg wb shadow" href="#" role="button">Register</router-link>
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm one">
          <img src="@/assets/spreadsheet.svg" alt="spreadsheet image" class="img-fluid">
        </div>
        <div class="col-sm one one-text">
          <p>Keep record of your farm's daily and occasional activities</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm one one-text">
          <p>View progress report of your farm business</p>
        </div>
        <div class="col-sm one">
          <img src="@/assets/progress_data.svg" alt="image representing data progress" class="img-fluid">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm one">
          <img src="@/assets/server_cluster.svg" alt="image of a server cluster" class="img-fluid">
        </div>
        <div class="col-sm one one-text">
          <p>Get access to your data anytime anyday with our cloud storage</p>
        </div>
      </div>
      </div>
      
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  text-align: center;
}
.wb {
  background-color: #CD853F;
  color: #fff;
  border: #CD853F;
}
.wb:hover {
  background-color: #fff;
  color: #CD853F;
}
.home {
  margin-top: 30px;
}
.home .row {
  height: 400px;
}
.home .one {
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
}
.home .one-text {
  text-align: center;
  font-size: 1.2em;
}
</style>>
