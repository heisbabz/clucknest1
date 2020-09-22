<template>
    <div>
        <Navbar />
        <div class="register container shadow mt-5 mb-5 p-4">
            <h3 class="a">NEW FARM</h3>

    <form class="mt-2 " @submit.prevent="regSubmit">
        <div class="form-row">
            <div class="col-md-8">
                <label for="farmName">Farm Name</label>
                <input type="text" class="form-control" placeholder="Farm name" v-model="users.farmname">
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
        <vue-toastr ref="toastr"></vue-toastr> 
        <button type="submit" class="btn btn-primary mt-2 rb shadow">Submit</button>
    </form>

  </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Datepicker from 'vuejs-datepicker'
import slugify from 'slugify'
import db from '@/firebase/init'
import VueToastr from "vue-toastr"
import 'firebase/auth'
import 'firebase/database'

export default {
    name: 'NewFarm',
    components: {
        Navbar,
        Datepicker,
        VueToastr
    },
    data(){
        return{
            users: {
                farmname: null,
                phone: null,
                doe: null,
                farmaddress: null,
                city: null,
                state: null,
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
              ref.get().then(() => {
                ref.set({
                    farmname: this.users.farmname,
                    phone: this.users.phone,
                    doe: this.users.doe,
                    farmaddress: this.users.farmaddress,
                    country: this.country,
                    state: this.region
                })
                }).then(() => {
                    this.$toastr.s("Data Saved!")
                    this.$router.push({name: 'RegistrationSuccess', params: {name: this.name}})
                }) 
            }else{
                this.$toastr.e("Please fill in the empty fields");
            }
        },
    }
}
</script>

<style scoped>

</style>