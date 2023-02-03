<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItemList" 
      v-on:removeTodo="removeItem" 
      v-on:completeTodo="toggleItem">
    </TodoList>
    <TodoFooter v-on:removeAll="removeItemList"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  data() {
    return {
      todoItemList: []
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(var i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== '') {
          
          this.todoItemList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    addItem(inputData) {
      let num = 0;
      for(var data in localStorage) {
        if(Number(data)) {
          num = Math.max(num, data);
        }
      }

      const obj = { key: num, value: inputData, completed: false };
      if(this.inputData !== '') {

        localStorage.setItem(++num, JSON.stringify(obj));
        this.todoItemList.push(obj);
      }
    },
    toggleItem(item, index) {

      this.todoItemList[index].completed = !this.todoItemList[index].completed;
      localStorage.removeItem(item.key + 1);
      localStorage.setItem(item.key + 1, JSON.stringify(item));
    },
    removeItem(item, index) {
      console.log(item, index);

      localStorage.removeItem(item.key + 1);  // 동작안함
      this.todoItemList.splice(index, 1);
    },
    removeItemList() {
      
      this.todoItemList = [];
      localStorage.clear();
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
