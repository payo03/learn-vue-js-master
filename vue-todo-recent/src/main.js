import { createApp } from 'vue'
import App from './App.vue'

// vuex
import { store } from './store/store.js';

createApp(App).use(store).mount('#app');
