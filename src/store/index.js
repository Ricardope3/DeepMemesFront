import Vuex from 'vuex';
import Vue from 'vue';
import memes from './modules/memes';
import auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);
// Export store
export default new Vuex.Store({
    modules : {
        memes,
        auth
    }
});

