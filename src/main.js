import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import jssha from '../node_modules/jssha';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
// app.use(jssha);
app.use(router);
app.mount('#app');
