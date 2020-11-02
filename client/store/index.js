import axios from "axios";
import Vue from "vue";

export const state = () => ({
  shows: []
});

export const mutations = {
  setShows(state, data) {
    state.shows = data;
  },
  setShow(state, { index, newShow }) {
    Vue.set(state.shows, index, newShow);
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

  //favori
  //add
  //update
  //delete
};
/*
export const getters = {
  shows(state) {
    return state.shows;
  }
};
*/
