import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';  // Make sure to point to the correct router file

const app = createApp(App);

// Add the router to the app
app.use(router);

// Mount the app to the DOM element with id="app"
app.mount('#app');