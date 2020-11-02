<template>
  <div>
    <SimpleTvShow v-for="show in shows" :key="show.id" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SimpleTvShow from "./SimpleTvShow";

export default {
  components: {
    SimpleTvShow
  },
  computed: mapState(["shows"]),
  mounted() {
    console.log("BEFORE MONTED");
    this.getShows();
  },
  methods: mapActions(["getShows"])
};
</script>

<style></style>
