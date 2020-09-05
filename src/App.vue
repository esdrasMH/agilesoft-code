<template>
  <v-app>
    <v-main>
      <Superheros :data="superheros"/>
      <Notification/>
    </v-main>
  </v-app>
</template>

<script>
  import Superheros from './components/Superheros';
  import Notification from './components/Notification';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',

    components: {
      Superheros,
      Notification
    },

    created() {
      this.getSuperHeros()
    },

    computed: {
      ...mapState([
        "superheros"
      ])
    },

    methods: {
      ...mapActions([
        "getSuperHeros"
      ])
    }
  };
</script>
