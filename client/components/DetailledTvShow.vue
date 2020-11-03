<template>
  <!--TODO Passer en asyncData pour éviter le chargement de la page si l'id n'est pas retrouvé ?-->
  <BCard
    v-if="showDetails.id"
    :title="showDetails.title"
    :img-src="showDetails.images.banner"
    img-top
    tag="article"
    :sub-title="showDetails.seasons + ' season(s)'"
  >
    <BButton variant="outline" @click="toggleFavorited">
      <div v-if="showDetails.user.favorited">
        <BIconHeartFill />
      </div>
      <div v-else><BIconHeart /></div>
    </BButton>
    <BCardText>{{ showDetails.description }}</BCardText>
  </BCard>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["showDetails"]),
  methods: {
    ...mapActions(["setFavorited"]),
    toggleFavorited() {
      this.setFavorited({
        id: this.showDetails.id,
        favorited: !this.showDetails.user.favorited
      });
    }
  }
};
</script>

<style></style>
