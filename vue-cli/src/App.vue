<template>
  <div>
     <app-header 
        v-bind:propsdata="str"
        v-on:renew="renewStr"
        v-on:back="rollbackStr">
     </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function() {
    return {
      str: 'Header',
      outVar : 'hi'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = this.outVar;
    },
    rollbackStr: function() {
      this.str = 'Header'
    }
  }
}
</script>

<style>

</style>