import * as firebase from "firebase/app";
import "firebase/auth";

const state = { user: {}, error: {} };
const getters = { getUser: () => state.user, getError: () => state.error };
const actions = {
    async login({ commit }, data) {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            commit('setUser', { id: response.user.uid, email: response.user.email });
            localStorage.token = response.user.refreshToken;

        } catch (error) {
            console.log(error);
            commit('setError', error);
            throw Error()
        }
    },
    async register({ commit }, data) {

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            console.log(response);
            commit('setUser', { id: response.user.uid, email: response.user.email });
            localStorage.token = response.user.refreshToken;
        } catch (error) {
            console.log(error);

            commit('setError', error);
            throw Error()

        }
    },
    async logout({ commit }) {
        try {
            await firebase.auth().signOut();
            commit('setUser', null);
            localStorage.token = '';
        } catch (error) {
            commit('setError', error);
            throw Error()

        }
    },

};
const mutations = {
    setUser: (state, user) => (state.user = user),
    setError: (state, error) => (state.error = error)
};

export default {
    state,
    getters,
    actions,
    mutations
};


