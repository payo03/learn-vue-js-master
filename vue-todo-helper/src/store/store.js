import Vuex from 'vuex';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== '') {

                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }

        arr.sort(function (a, b) {
            return a.key - b.key;
        })

        return arr;
    }
}

export const store = new Vuex.Store({
    // root state
    state() {
        return {
            todoItemList: storage.fetch()
        }
    },
    getters,
    mutations
});