<template>
  <div>
    <Header />
    <DetailledTvShow />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../../components/Header";
import DetailledTvShow from "../../components/DetailledTvShow";

export default {
  components: {
    Header,
    DetailledTvShow
  },
  mounted() {
    this.getShow(this.$route.params.id);
  },
  methods: mapActions(["getShow"])
};
</script>

<style></style>
