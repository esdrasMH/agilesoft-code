<template>
  <v-card max-width="450" class="mx-auto my-10">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Superhéroes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        :disabled="loading"
      ></v-text-field>
    </v-toolbar>

    <Loader v-if="loading"/>

    <v-list three-line v-if="!loading">
      <div v-for="(item, index) in items" :key="index">
        <v-divider v-if="index > 0"></v-divider>

        <v-list-item>
          <v-list-item-avatar size="100">
            <v-img :src="item.avatarURL"></v-img>
          </v-list-item-avatar>

          <div>
            <h3>{{item.nombre}}</h3>
            <span>{{item.nombreReal}}</span>
          </div>
        </v-list-item>
      </div>
    </v-list>

    <div class="text-center my-5" v-if="searchStatus">
      <h3>No se encontró la búsqueda</h3>
    </div>

  </v-card>
</template>

<script>
  import { mapState } from 'vuex';
  import Loader from './Loader';

  export default {
    name: "Superheros",

    components: {
      Loader
    },

    computed: {
      ...mapState([
        "loading"
      ]),
      itemsAux() {
        return JSON.parse(JSON.stringify(this.data));
      },
      searchStatus() {
        return this.search != null && !this.items.length
      }
    },

    watch: {
      itemsAux() {
        this.items = this.itemsAux;
      },
      search(val) {
        if (val == '') {
          this.items = this.itemsAux
        }
        val && this.querySelections(val)
      }
    },

    props: ["data"],

    data: () => ({
      search: null,
      items: [],
    }),

    methods: {
      querySelections(value) {
        this.items = this.itemsAux.filter((item) => {
          return (item.nombre || '').toLowerCase().indexOf((value || '').toLowerCase()) > -1
        });
      },
    }
  };
</script>