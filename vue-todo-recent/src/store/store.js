import Vuex from 'vuex';

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
        return arr;
    }
}

export const store = new Vuex.Store({

    strict: false,
    modules: {

    },
    // root state
    state() {
        return {
            todoItemList: storage.fetch()
        }
    }
});