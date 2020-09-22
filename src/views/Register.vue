<template>
    <div>
        <Navbar />
        <div class="register container shadow mt-5 mb-5 p-4">
            <form class="mt-2 " @submit.prevent="regSubmit">
                <h3 class="a">REGISTER</h3>
                <div class="form-row">
                    <div class="col">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" name="firstname" placeholder="First name" v-model="users.firstname">
                    </div>
                    <div class="col">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" name="lastname" placeholder="Last name" v-model="users.lastname">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-8">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" name="email" placeholder="Email" v-model="users.email">
                    </div>
                    <div class="col-md-4">
                    <label for="gender">Gender</label>
                    <select class="custom-select mr-sm-2" name="gender" v-model="users.gender" placeholder="Email">
                        <option selected>Choose...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    </div>
                </div>
                <hr class="mt-3">
                <div class="form-row">
                    <div class="col-md-8">
                        <label for="farmName">Farm Name</label>
                        <input type="text" class="form-control" name="farmname" placeholder="Farm name" v-model="users.farmname">
                    </div>
                    <div class="col-md-4">
                    <label for="dateOfEstablishment">Date of Establishment</label>
                    <datepicker input-class="form-control" name="doe" v-model="users.doe" :disabledDates="disabledDates" format="dd-MM-yyyy"></datepicker>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-8">
                        <label for="farmAddress">Farm Address</label>
                        <input type="text" class="form-control" name="farmaddress" placeholder="Enter your farm address" v-model="users.farmaddress">
                    </div>
                    <div class="col-md-4">
                            <label for="farmName">Phone Number</label>
                            <input type="tel" class="form-control" name="phone" v-model="users.phone">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="country">Country</label>
                        <country-select type="text" class="form-control" v-model="country" :country="country" topCountry="NG" countryName />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="state">State</label>
                        <region-select type="text" class="form-control" v-model="region" :country="country" :region="region" countryName regionName />
                    </div>  
                </div>
                <hr class="mt-3">
                <div class="form-row">
                    <div class="col-sm-7">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Enter your preferred password" v-model="users.password">
                        <password-meter :password="users.password" />
                    </div>
                </div>
                  <vue-toastr ref="toastr"></vue-toastr>          
                <button type="submit" class="btn btn-primary mt-2 rb shadow">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Datepicker from 'vuejs-datepicker'
import passwordMeter from "vue-simple-password-meter"
import slugify from 'slugify'
import db from '@/firebase/init'
import VueToastr from "vue-toastr"
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

export default {
    name: 'Register',
    components: {
        Navbar,
        Datepicker,
        passwordMeter,
        VueToastr
    },
    data(){
        return{
            users: {
                firstname: null,
                lastname: null,
                email: null,
                gender: null,
                farmname: null,
                phone: null,
                doe: null,
                farmaddress: null,
                city: null,
                state: null,
                password: null,
            },
            country: null,
            region: null,
            disabledDates: {
                from: new Date(Date.now())
            },
            feedback: null
        }
    },
    methods: {
        async regSubmit() {
            if(this.users.farmname && this.users.farmaddress){
              this.slug = slugify(this.users.farmname || this.users.farmaddress, {
                  replacement: '-',
                  remove: /[$*_+~.()'"!\-:@]/g,
                  lower: true
              })
              let ref = db.collection('users').doc(this.slug)
              ref.get().then(doc => {
                  if(doc.exists){
                        firebase.auth().createUserWithEmailAndPassword(this.users.email, this.users.password).catch(err => {
                        this.$toastr.e(err.message);
                        })
                  }else {
                      firebase.auth().createUserWithEmailAndPassword(this.users.email, this.users.password)
                      .then(() => {
                          ref.set({
                                firstname: this.users.firstname,
                                lastname: this.users.lastname,
                                email: this.users.email,
                                gender: this.users.gender,
                                farmname: this.users.farmname,
                                phone: this.users.phone,
                                doe: this.users.doe,
                                farmaddress: this.users.farmaddress,
                                country: this.country,
                                state: this.region,
                                password: this.users.password
                          })
                      }).then(() => {
                          this.$toastr.s("Registration Successful!")
                          this.$router.push({name: 'RegistrationSuccess', params: {name: this.name}})
                      })
                      }
              }) 
            }else{
                this.$toastr.e("Please fill in the empty fields");
            }
        },

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
.feedback {
    color: red;
}
</style>