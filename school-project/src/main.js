import { createApp } from 'vue'; // Import the createApp function from Vue 3
import App from './App.vue';
import router from './router'; // Import the router instance

const app = createApp(App); // Create the Vue app instance
app.use(router); // Install the router into the Vue app
app.mount('#app'); // Mount the app to the DOM


