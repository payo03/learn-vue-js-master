<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.key" class="shadow" v-on:click="completeTodo(todoItem, index)">
        <!-- <i class="fa-solid fa-circle"></i> -->
        <i :class="todoItem.completed? 'checkBtn fa-solid fa-circle-check' : 'checkBtn fa-solid fa-circle'"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.value }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: [
    'propsdata'
  ],
  methods: {
    removeTodo(todoItem, index) {
      
      this.$emit('removeTodo', todoItem, index);
    },
    completeTodo(todoItem, index) {

      this.$emit('completeTodo', todoItem, index);
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
  cursor: pointer;
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
  cursor: pointer;
}

/* 리스트 아이템 Transition 효과 */
.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>