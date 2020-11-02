<template>
  <BCardGroup columns>
    <SimpleTvShow
      v-for="show in shows"
      :key="show.id"
      :title="show.title"
      :img="show.images.box"
      :description="show.description"
      :nbSeasons="show.seasons"
      class="text-truncate"
    />
  </BCardGroup>
</template>

<script>
import { mapState } from "vuex";
import SimpleTvShow from "./SimpleTvShow";

export default {
  components: {
    SimpleTvShow
  },
  computed: mapState(["shows"])
};
</script>

<style></style>
