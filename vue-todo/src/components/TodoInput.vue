<template>
  <div class="inputBox shadow">
    <input type="text" v-model="inputData" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-circle-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data: function() {
    return {
      inputData: ""
    }
  },
  methods: {
    addTodo: function() {
      var num = 0;
      for(var data in localStorage) {
        if(Number(data)) {
          num = Math.max(num, data);
        }
      }
      if(this.inputData !== '') {
        var obj = { key: num, value: this.inputData, completed: false };

        localStorage.setItem(++num, JSON.stringify(obj));
        eventBus.$emit('transferItem', obj);
      }

      this.clearInput();
    },
    clearInput: function() {
      this.inputData = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: auto;
}
.inputBox input { 
  border-style: none;
  font-size: 1.1rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>