import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //Import all the defined routes

// Other necessary imports like Bootstrap, etc.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router); //Use vue router

app.mount('#app');
