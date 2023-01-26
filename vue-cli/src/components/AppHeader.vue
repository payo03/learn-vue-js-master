<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
    <button v-on:click="rollback">back</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew')
        },
        rollback: function() {
            this.$emit('back')
        }
    }
}
</script>

<style>

</style>