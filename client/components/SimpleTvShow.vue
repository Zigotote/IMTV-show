<template>
  <BCard
    :title="title"
    :img-src="img"
    img-top
    tag="article"
    :sub-title="nbSeasons + ' season(s)'"
  >
    <BButton variant="outline" @click="toggleFavorited">
      <div v-if="favorited">
        <BIconHeartFill />
      </div>
      <div v-else><BIconHeart /></div>
    </BButton>
    <BCardText>{{ description }}</BCardText>

    <NuxtLink :to="route">
      <BButton>Details</BButton>
    </NuxtLink>
  </BCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    idDb: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    nbSeasons: {
      type: String,
      required: true
    },
    favorited: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    route() {
      return "tv-show/" + this.idDb;
    }
  },
  methods: {
    ...mapActions(["setFavorited"]),
    toggleFavorited() {
      this.setFavorited({
        index: this.index,
        id: this.idDb,
        favorited: !this.favorited
      });
    }
  }
};
</script>

<style scoped>
article {
  max-width: 20rem;
}
</style>
