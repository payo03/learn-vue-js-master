const addItem = (state, inputData) => {
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
}

const toggleItem = (state, item) => {

    state.todoItemList[item.index].completed = !state.todoItemList[item.index].completed;
    localStorage.removeItem(item.todoItem.key + 1);
    localStorage.setItem(item.todoItem.key + 1, JSON.stringify(item.todoItem));
}

const removeItem = (state, item) => {

    localStorage.removeItem(item.todoItem.key + 1);
    state.todoItemList.splice(item.index, 1);
}

const removeItemList = (state) => {

    state.todoItemList = [];
    localStorage.clear();
}

export { addItem, toggleItem, removeItem, removeItemList }