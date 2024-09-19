// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './plugins'; // Register all plugins

const app = createApp(App);

registerPlugins(app); // Apply plugins to the Vue app

app.mount('#app'); // Mount the app to the DOM
