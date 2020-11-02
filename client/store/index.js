import axios from "axios";
import Vue from "vue";

export const state = () => ({
  shows: [],
  searchText: ""
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
  }
};

export const actions = {
  async getShows(context) {
    const { data } = await axios.get("http://localhost:4000/rest/shows");
    context.commit("setShows", data);
  },
  async setFavorited(context, { index, id, favorited }) {
    const { data } = await axios.post(
      `http://localhost:4000/rest/shows/${id}/favorites`,
      {
        isFavorite: favorited
      }
    );
    context.commit("setShow", { index: index, newShow: data });
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
