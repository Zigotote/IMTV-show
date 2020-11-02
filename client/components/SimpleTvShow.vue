<template>
  <BCard
    :title="title"
    :img-src="img"
    img-top
    tag="article"
    :sub-title="nbSeasons + ' saison(s)'"
  >
    <BCardText>{{ description }}</BCardText>
  </BCard>
</template>

<script>
export default {
  props: {
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
    }
  }
};
</script>

<style scoped>
article {
  max-width: 20rem;
  max-height: 40rem;
}
</style>
