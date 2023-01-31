<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItemList" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-on:click="toggleComplete(todoItem, index)" v-bind:class="{textCompleted: todoItem.completed}"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
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

    eventBus.$on('transferItem', item => {
      this.todoItemList.push(item);
    })

    eventBus.$on('clearItem', () => {
      this.todoItemList = [];
    })
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItemList.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
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