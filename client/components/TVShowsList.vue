<template>
  <BCardGroup columns>
    <SimpleTvShow
      v-for="(show, index) in shows"
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
import { mapActions, mapState } from "vuex";
import SimpleTvShow from "./SimpleTvShow";

export default {
  components: {
    SimpleTvShow
  },
  computed: mapState(["shows"])
};
</script>

<style></style>
