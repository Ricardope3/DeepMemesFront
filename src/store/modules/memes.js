import axios from 'axios';
import user from './auth'
const state = { memes: [], tags: localStorage.tags ? JSON.parse(localStorage.tags) : [] };
const getters = {
    allMemes: () => state.memes,
    getUserTags: () => state.tags
};
const actions = {
    async fetchMemes({ commit }) {
        let tagsCSV = ""
        if (state.tags.length === 0) {
            console.log("RANDOM")
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/getRandom`, {
                useCredentails: true,
                headers: {
                    'Access-Control-Allow-Origin': 'http://ec2-54-147-77-7.compute-1.amazonaws.com',
                    'Access-Control-Allow-Methods': '*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials':true
                }
            });
            commit('setMemes', response.data);
        } else {
            for (let index in state.tags) {
                tagsCSV += `${state.tags[index]},`
            }
            console.log("TAGS")
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/getRelatedTo?tags=${tagsCSV}`, {
                useCredentails: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
                }
            });
            commit('setMemes', response.data);
        }
    },
    async fetchRandomMemes({ commit }) {
        const response = await axios.get(`http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/getRandom`, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        });
        commit('setMemes', response.data);
    },
    async postMeme({ commit }) {
        const response = await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/submission`, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        });
        commit('setMemes', response.data);
    },
    // { commit },
    async createUserMongo({ commit }, body) {

        await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/createUser`, body, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        });
        user.state.user.link = body.profilePictureLink
        commit.lmaoIgnoraEsto
    },
    async createMeme({ commit }, body) {
        await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/createMeme`, body, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        });
        commit.lmaoIgnoraEsto
    },
    async getProfilePicture({ commit }, email) {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/getUser?email=${email}`, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        })
        commit.lmaoIgnoraEsto
        return response.data.profilePictureLink
    },
    async reaction({ commit }, body) {
        await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/reaction`, body, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        })
        if (body.type === 0 && body.tags) {

            localStorage.tags = localStorage.tags ? JSON.stringify([...JSON.parse(localStorage.tags), ...body.tags]) : JSON.stringify(body.tags)
            commit("setTags", body.tags)
        }
    },
    async uploadComment({ commit }, body) {
        await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-54-147-77-7.compute-1.amazonaws.com:8080/createComment`, body, {
            useCredentails: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*', 'Content-Type': 'application/json'
            }
        })
        commit.lmaoIgnoraEsto
    },
};
const mutations = {
    setMemes: (state, memes) => (state.memes = memes),
    setTags: (state, tags) => (state.tags = [...state.tags, ...tags])
};

export default {
    state,
    getters,
    actions,
    mutations
};


