<template>
    <div>
        <Navbar />
        <div class="register container shadow mt-5 p-4">
            <form class="mt-2 " @submit.prevent="regSubmit">
                <h3 class="a">REGISTER</h3>
                <div class="form-row pt-3">
                    <div class="col">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" v-model="firstname">
                    </div>
                    <div class="col">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" v-model="lastname">
                    </div>
                </div>
                <div class="form-row pt-3">
                    <div class="col-md-8">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                    </div>
                    <div class="col-md-4">
                    <label for="gender">Gender</label>
                    <select class="custom-select mr-sm-2" v-model="gender" placeholder="Email">
                        <option selected>Choose...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    </div>
                </div>
                <hr class="my-3">
                <div class="form-row">
                    <div class="col-md-8">
                        <label for="farmName">Farm Name</label>
                        <input type="text" class="form-control" placeholder="Farm name" v-model="farmname">
                    </div>
                    <div class="col-md-4">
                    <label for="dateOfEstablishment">Date of Establishment</label>
                    <datepicker input-class="form-control" v-model="doe" :disabledDates="disabledDates" format="dd-MM-yyyy"></datepicker>
                    </div>
                </div>
                <div class="form-group pt-3">
                    <label for="farmAddress">Farm Address</label>
                    <input type="text" class="form-control" placeholder="Enter your farm address" v-model="farmaddress">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input type="text" class="form-control" v-model="city">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="state">State</label>
                        <select class="form-control" v-model="state">
                            <option selected>Choose...</option>
                            <option>Ekiti</option>
                            <option>Kwara</option>
                            <option>Lagos</option>
                            <option>Ogun</option>
                            <option>Ondo</option>
                            <option>Osun</option>
                            <option>Oyo</option>
                        </select>
                    </div>
                </div>                
                <button type="submit" class="btn btn-primary mt-4 rb shadow">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Datepicker from 'vuejs-datepicker'

export default {
    name: 'Register',
    components: {
        Navbar,
        Datepicker
    },
    data(){
        return{
            firstname: null,
            lastname: null,
            email: null,
            gender: null,
            farmname: null,
            doe: null,
            farmaddress: null,
            city: null,
            state: null,
            disabledDates: {
                from: new Date(Date.now())
            }
        }
    },
    methods: {
        regSubmit() {
            if(this.firstname, this.lastname, this.email, this.gender, this.farmname, this.doe, this.farmaddress, this.city, this. state){
                console.log(this.firstname, this.lastname, this.email, this.gender, this.farmname, this.doe, this.farmaddress, this.city, this. state)
            }
        }
    }
}
</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
    color: #CD853F;
    max-width: 700px;
    background-color: #FFF;
    border-radius: 10px;
}
.rb {
    background-color: #FFF;
    border: 1px solid #CD853F;
    color: #CD853F;
}
.rb:hover {
    background-color: #CD853F;
    color: #FFF;
}
</style>