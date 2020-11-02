import axios from "axios";

export const state = () => ({
  shows: []
});

export const mutations = {
  setShows(state, data) {
    state.shows = data;
  }
};

export const actions = {
  async getShows(context) {
    const { data } = await axios.get("http://localhost:4000/rest/shows");
    context.commit("setShows", data);
    return data;
  }

  //favori
  //add
  //update
  //delete
};

/*export const getters = {
  shows(state) {
    return state.shows;
  }
};*/
