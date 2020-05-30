import axios from 'axios';
import user from './auth'
const state = { memes: [], tags: [] };
const getters = { allMemes: () => state.memes, };
const actions = {
    async fetchMemes({ commit }) {
        let tagsCSV = ""
        if(state.tags.length ===0){
            const response = await axios.get(`http://localhost:8080/getRandom`);
            commit('setMemes', response.data);
        }else{
            for (let index in state.tags) {
                tagsCSV += `${state.tags[index]},`
            }
            const response = await axios.get(`http://localhost:8080/getRelatedTo?tags=${tagsCSV}`);
            commit('setMemes', response.data);
        }
    },
    async fetchRandomMemes({ commit }) {
        const response = await axios.get("http://localhost:8080/submission/random");
        commit('setMemes', response.data);
    },
    async postMeme({ commit }) {
        const response = await axios.post("http://localhost:8080/submission");
        commit('setMemes', response.data);
    },
    // { commit },
    async createUserMongo({ commit }, body) {

        await axios.post(`http://localhost:8080/createUser`, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        });
        user.state.user.link = body.profilePictureLink
        commit.lmaoIgnoraEsto
    },
    async createMeme({commit}, body){
        await axios.post(`http://localhost:8080/createMeme`, body);
        commit.lmaoIgnoraEsto
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


