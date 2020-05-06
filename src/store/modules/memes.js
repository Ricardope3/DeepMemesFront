import axios from 'axios';

const state = { memes: [] };
const getters = { allMemes: () => state.memes, };
const actions = {
    async fetchMemes({ commit }) {
        const response = await axios.get("http://localhost:8080/submission/relatedto?tags=boomer");
        commit('setMemes', response.data);
    },
    async fetchRandomMemes({ commit }) {
        const response = await axios.get("http://localhost:8080/submission/random");
        commit('setMemes', response.data);
    },
    async postMeme({ commit }) {
        const response = await axios.post("http://localhost:8080/submission");
        commit('setMemes', response.data);
    }
};
const mutations = {
    setMemes: (state, memes) => (state.memes = memes)
};

export default {
    state,
    getters,
    actions,
    mutations
};


