<template>
  <div class="component route">
    <v-card v-if="crud===undefined">
      <v-card-row>
        <v-card-title>
          <v-chip @click.native.stop="edit()" class="primary white--text pull-right" v-if="user && person.owner === user.id">
            <v-icon>account_circle</v-icon> <span>{{user.username}}</span>
          </v-chip>
          <div name="name">{{person.person_firstname}} {{person.person_lastname}}</div>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card-row>
      <v-card-row :img="getRandomPersonImage()" height="300px"></v-card-row>
      <v-card-row>
        <v-card-text>
          <div name="dob">dob {{person.person_dob}}</div>
          <div name="zip">zip {{person.person_zip}}</div>
        </v-card-text>
      </v-card-row>
    </v-card>
    <v-card v-if="crud==='edit'">
        <v-card-text>
          <div name="firstname"><input type="text" v-model="person.person_firstname" placeholder="firstName" /></div>
          <div name="lastname"><input type="text" v-model="person.person_lastname"  placeholder="lastName" /></div>
          <div name="dob"><datepicker v-model="person.person_dob" /></div>
          <div name="zip"><input type="text" v-model="person.person_zip" placeholder="zip" /></div>
        </v-card-text>
        <v-btn @click.native.stop="updatePerson($store, person);$router.push({name: 'People'})">Save</v-btn>
    </v-card>
        <v-card v-if="crud==='add'">
        <v-card-text>
          <div name="firstname"><input type="text" v-model="person.person_firstname" placeholder="firstName" /></div>
          <div name="lastname"><input type="text" v-model="person.person_lastname"  placeholder="lastName" /></div>
          <div name="dob"><datepicker v-model="person.person_dob" /></div>
          <div name="zip"><input type="text" v-model="person.person_zip" placeholder="zip" /></div>
        </v-card-text>
        <v-btn @click.native.stop="addPerson($store, person);$router.push({name: 'People'})">Save</v-btn>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
/* sadly, struggled with this for a while and can't get it to work 
import Datepicker from 'vue-material-datepicker'
*/
import Datepicker from 'vue-date'
import {methods} from '../../store/Person'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  props: ['crud', 'id'],
  components: { datepicker: Datepicker },
  data () {
    return {
      person: {}
    }
  },
  computed: mapState({ 
    people: state => state.person.people,
    user: state => state.auth.user
  }),
  methods: {
    updatePerson: methods.updatePerson,
    addPerson: methods.addPerson,
    getRandomPersonImage () {
      return '/public/people/0' + getRandomInt(1,9) + '.jpg'
    },
    edit () {
      this.$router.push({
        name: 'Person', 
        params: {
          crud: 'edit',
          id: this.id
        }
      })
    }
  },
  mounted () {
    this.person = Object.assign({        person_zip: '1',
        person_dob: '2017-03-12'}, this.people.find(p => p.id === this.id))
  }
}
</script>

<style scoped>
  .icon {
    padding: 0;
    margin: 0;
    margin-right: 1.5rem;
  }
  .chip {
    padding: 0;
    min-height: initial;
    cursor: pointer;
    user-select: none;
  }
  .chip span {
    margin-right: 0.3rem;
  }
</style>
