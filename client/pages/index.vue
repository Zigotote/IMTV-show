<template>
  <div>
    <Header />
    <TVShowsList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../components/Header";
import TVShowsList from "../components/TVShowsList";

export default {
  components: {
    Header,
    TVShowsList
  },
  mounted() {
    this.getShows();
  },
  methods: mapActions(["getShows"])
};
</script>

<style></style>
