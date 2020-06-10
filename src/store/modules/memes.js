import axios from 'axios';
import user from './auth'
import url from './url.js'
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
            const response = await axios.get(`http://ec2-54-147-77-7.compute-1.amazonaws.com/getRandom`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                }
            });
            commit('setMemes', response.data);
        } else {
            for (let index in state.tags) {
                tagsCSV += `${state.tags[index]},`
            }
            console.log("TAGS")
            const response = await axios.get(`http://ec2-54-147-77-7.compute-1.amazonaws.com/getRelatedTo?tags=${tagsCSV}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                }
            });
            commit('setMemes', response.data);
        }
    },
    async fetchRandomMemes({ commit }) {
        const response = await axios.get(`http://ec2-54-147-77-7.compute-1.amazonaws.com/getRandom`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        });
        commit('setMemes', response.data);
    },
    async postMeme({ commit }) {
        const response = await axios.post(`http://ec2-54-147-77-7.compute-1.amazonaws.com/submission`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        });
        commit('setMemes', response.data);
    },
    // { commit },
    async createUserMongo({ commit }, body) {

        await axios.post(`http://ec2-54-147-77-7.compute-1.amazonaws.com/createUser`, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        });
        user.state.user.link = body.profilePictureLink
        commit.lmaoIgnoraEsto
    },
    async createMeme({ commit }, body) {
        await axios.post(`http://ec2-54-147-77-7.compute-1.amazonaws.com/createMeme`, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        });
        commit.lmaoIgnoraEsto
    },
    async getProfilePicture({ commit }, email) {
        const response = await axios.get(`http://ec2-54-147-77-7.compute-1.amazonaws.com/getUser?email=${email}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        })
        commit.lmaoIgnoraEsto
        return response.data.profilePictureLink
    },
    async reaction({ commit }, body) {
        await axios.post(`http://ec2-54-147-77-7.compute-1.amazonaws.com/reaction`, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        })
        if (body.type === 0 && body.tags) {

            localStorage.tags = localStorage.tags ? JSON.stringify([...JSON.parse(localStorage.tags), ...body.tags]) : JSON.stringify(body.tags)
            commit("setTags", body.tags)
        }
    },
    async uploadComment({ commit }, body) {
        await axios.post(`http://ec2-54-147-77-7.compute-1.amazonaws.com/createComment`, body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
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


