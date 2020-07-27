<template>
    <div>
        <Navbar />
        <div class="container mt-5 registration-success">
        <div class="col-sm p4">
            <h2>Registration Completed!</h2>
            <img src="@/assets/confirm.svg" alt="" class="img-fluid">
            <p>Proceed to the <router-link to="/login">login</router-link> page to continue</p>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'RegistrationSuccess',
    components: {
        Navbar
    }
}
</script>

<style>
.registration-success{
    justify-content: center;
    text-align: center;
}
</style>