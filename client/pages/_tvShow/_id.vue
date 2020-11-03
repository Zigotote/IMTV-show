<template>
  <div>
    <DetailledTvShow />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DetailledTvShow from "../../components/DetailledTvShow";

export default {
  components: {
    DetailledTvShow
  },
  mounted() {
    this.getShow(this.$route.params.id);
  },
  methods: mapActions(["getShow"])
};
</script>

<style></style>
