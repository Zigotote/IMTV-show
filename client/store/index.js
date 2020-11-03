import axios from "axios";
import Vue from "vue";

export const state = () => ({
  shows: [],
  searchText: "",
  showDetails: {}
});

export const mutations = {
  setShows(state, data) {
    state.shows = data;
  },
  setShow(state, { index, newShow }) {
    Vue.set(state.shows, index, newShow);
  },
  setSearchText(state, searchText) {
    state.searchText = searchText;
  },
  setShowDetails(state, show) {
    state.showDetails = show;
  }
};

export const actions = {
  async getShows(context) {
    const { data } = await axios.get("http://localhost:4000/rest/shows");
    context.commit("setShows", data);
  },
  async getShow(context, id) {
    const { data } = await axios.get(`http://localhost:4000/rest/shows/${id}`);
    context.commit("setShowDetails", data);
  },
  async setFavorited(context, { index, id, favorited }) {
    const { data } = await axios.post(
      `http://localhost:4000/rest/shows/${id}/favorites`,
      {
        isFavorite: favorited
      }
    );
    if (index >= 0) {
      context.commit("setShow", { index: index, newShow: data });
    } else {
      context.commit("setShowDetails", data);
    }
  }
};

export const getters = {
  filteredShows(state) {
    return state.shows.filter(
      show =>
        show.title.toUpperCase().indexOf(state.searchText.toUpperCase()) != -1
    );
  }
};
