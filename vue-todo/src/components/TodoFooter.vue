<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  methods: {
    clearTodo: function() {
      eventBus.$emit('clearItem');
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  cursor: pointer;
}

</style>