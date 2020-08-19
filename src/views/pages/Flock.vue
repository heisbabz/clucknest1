<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="shadow">
        <SidebarNav />
    </v-navigation-drawer>
      
    <v-app-bar app color="#CD853F" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CLUCKNEST</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" abel="Search" class="hidden-sm-and-down" ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <AppBar />
    </v-app-bar>
    
    <v-main>
      <div class="row ma-4 mb-10">
        <div class="ma-2"><h3>Flock</h3></div>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-2" color="success" v-bind="attrs" v-on="on">
              <v-icon left>mdi-plus</v-icon> Add New
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">Add New Flock</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition"
                      offset-y  min-width="290px" >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Date Acquired" prepend-icon="event" readonly v-bind="attrs" v-on="on" 
                        :disabledDates="disabledDates"></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Flock Name" hint="example of helper text only on focus"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="select" :items="breeds" :error-messages="selectErrors" label="Breed Type" required
                      @change="$v.select.$touch()" @blur="$v.select.$touch()">
                    </v-select>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field label="Source/Supplier" hint="example of persistent helper text" persistent-hint required ></v-text-field>
                  </v-col>

                  <v-col cols="3">
                    <v-text-field label="Number of Birds" required single-line hide-details type="number" ></v-text-field>
                  </v-col>

                  <v-col cols="3">
                    <v-text-field label="Cost per bird" required type="number" ></v-text-field>
                  </v-col>

                  <v-col cols="9">
                    <v-text-field label="Decription" hint="example of persistent helper text" persistent-hint required ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- </div> -->

      <div class="container">
        <v-card>
          <v-card-title>
            Flock Data
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="birds" :search="search" ></v-data-table>
        </v-card>
      </div>
      
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
import SidebarNav from '@/layout/SidebarNav'
import Footer from '@/layout/Footer'
import AppBar from '@/layout/AppBar'


export default {
    name: 'Flock',
    components: {
        SidebarNav,
        AppBar,
        Footer,
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Account Profile', icon: 'mdi-account', link: '/register'},
        { title: 'Log Out', icon:'mdi-logout', link: '/login' },
      ],
      search: '',
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Flock Name', value: 'flockname' },
        { text: 'Breed Type', value: 'breedtype' },
        { text: 'Age (Weeks)', value: 'age' },
        { text: 'Total Number', value: 'totalnumber' },
      ],
      birds: [
        // {
        //   id: '1',
        //   flockname: "Leghorn",
        //   age: 4,
        //   totalnumber: 120,
        // },
        // {
        //   id: '2',
        //   flockname: "Rhode Island Red",
        //   age: 8,
        //   totalnumber: 380,
        // },
      ],
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      breeds: [
        'Layers',
        'Broilers',
      ],
      disabledDates: {
        from: new Date(Date.now())
      },
    }),
}
</script>

<style>

</style>