<template>
  <div class="inputBox shadow">
    <input type="text" v-model="inputData" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-circle-plus addBtn"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">

      <h3 slot="header">
        경고!
        <i class="closeModalBtn fa-solid fa-square-xmark" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        아무것도 입력하지 않으셨습니다.
      </div>
    </modal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data() {
    return {
      inputData: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {

      if(this.inputData !== '') {
        
        this.$emit('addTodo', this.inputData);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.inputData = '';
    }
  },
  components: { 
    modal: AlertModal
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
.closeModalBtn{
  color: #42b983;
  cursor: pointer;
}

</style>