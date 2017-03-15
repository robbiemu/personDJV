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
    },
    update () {
      this.$store.dispatch('UPDATE PERSON', this.person)
    }
  },
  mounted () {
    this.person = Object.assign({}, this.people.find(p => p.id === this.id))
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

  $primary-color: #3F51B5;
  $secondary-color: #FFFFFF;

  .datepicker-header {
      background-color: $primary-color !important;
  }

  .datepicker-day-effect {
      background-color: lighten($primary-color, 5%) !important;
  }

  .datepicker-day {
      &:hover {
          color: $secondary-color !important;
      }

      &.selected {
          color: $secondary-color !important;
      }
  }

  .datepicker-date, .datepicker-year  {
      color: $secondary-color !important;
  }

  .datepicker-actions {
      button {
          color: lighten($primary-color, 10%) !important;
          &:hover {
              background-color: darken($secondary-color, 5%) !important;
          }
      }
  }

  .datepicker-years {
      .datepicker-years-content {
          .datepicker-year {
              &.selected, &:hover {
                  color: $primary-color !important;
              }
          }
      }
  }
</style>
