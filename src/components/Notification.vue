<template>
  <v-snackbar v-model="getNotification">
    {{message}}

    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="setNotification">
          Cerrar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Notification",

  computed: {
    ...mapState([
        "notification",
        "message"
    ]),
    getNotification: {
      get() {
        return this.notification;
      },
      set() {
        this.setNotification();
      },
    },
  },

  methods: {
    ...mapMutations(["setNotification"]),
  },
};
</script>