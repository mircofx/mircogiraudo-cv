import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //Import all the defined routes

// Other necessary imports like Bootstrap, etc.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/tailwind.css'
import './assets/main.css'

const app = createApp(App);

app.use(router); //Use vue router

app.mount('#app');
