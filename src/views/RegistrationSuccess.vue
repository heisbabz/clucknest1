<template>
    <div>
        <Navbar />
        <div class="container mt-5 registration-success">
        <div class="container p4 reg-page">
            <h2>Registration Completed!</h2>
            <img src="@/assets/confirm.svg" alt="" class="img-fluid" style="height:300px">
            <p class="mt-2">Please proceed to the <router-link to="/login">login</router-link> page to continue</p>
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

<style scoped>
.registration-success{
    justify-content: center;
    text-align: center;
}
.reg-page{
    height: 10%;
}
</style>