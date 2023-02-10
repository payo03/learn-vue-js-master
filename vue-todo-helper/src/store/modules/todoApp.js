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

const state = {
    todoItemList: storage.fetch()
}

const getters = {
    storedTodoItemList(state) {
        return state.todoItemList;
    }

}

const mutations = {
    addItem(state, inputData) {
        let num = 0;
        for (var data in localStorage) {
            if (Number(data)) {
                num = Math.max(num, data);
            }
        }
    
        const obj = { key: num, value: inputData, completed: false };
        if (inputData !== '') {
    
            localStorage.setItem(++num, JSON.stringify(obj));
            state.todoItemList.push(obj);
        }
    },    
    toggleItem(state, item) {
    
        state.todoItemList[item.index].completed = !state.todoItemList[item.index].completed;
        localStorage.removeItem(item.todoItem.key + 1);
        localStorage.setItem(item.todoItem.key + 1, JSON.stringify(item.todoItem));
    },    
    removeItem(state, item) {
    
        localStorage.removeItem(item.todoItem.key + 1);
        state.todoItemList.splice(item.index, 1);
    },    
    removeItemList(state) {
    
        state.todoItemList = [];
        localStorage.clear();
    }
}

export default { 
    state, 
    getters, 
    mutations 
}