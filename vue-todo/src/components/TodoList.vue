<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItemList" v-bind:key="todoItem.key" class="shadow" v-on:click="toggleComplete(todoItem, index)">
        <!-- <i class="fa-solid fa-circle"></i> -->
        <i :class="todoItem.completed? 'checkBtn fa-solid fa-circle-check' : 'checkBtn fa-solid fa-circle'"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.value }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data: function() {
    return {
      todoItemList: []
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(var i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== '') {
          
          this.todoItemList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  mounted: function() {

    eventBus.$on('transferItem', obj => {
      this.todoItemList.push(obj);
    })

    eventBus.$on('clearItem', () => {
      this.todoItemList = [];
    })
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem.key + 1);
      this.todoItemList.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.key + 1);
      localStorage.setItem(todoItem.key + 1, JSON.stringify(todoItem));
    }
  }

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 50px;
  color: #62acde;
  margin-right: 10px;
}

.checkBtnComplete {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

</style>