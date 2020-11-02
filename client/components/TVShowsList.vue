<template>
  <BCardGroup columns>
    <SimpleTvShow
      v-for="(show, index) in filteredShows"
      :key="show.id"
      :index="index"
      :idDb="show.id"
      :title="show.title"
      :img="show.images.box"
      :description="show.description"
      :nbSeasons="show.seasons"
      :favorited="show.user.favorited"
      class="text-truncate"
    />
  </BCardGroup>
</template>

<script>
import { mapGetters } from "vuex";
import SimpleTvShow from "./SimpleTvShow";

export default {
  components: {
    SimpleTvShow
  },
  computed: mapGetters(["filteredShows"])
};
</script>

<style></style>
