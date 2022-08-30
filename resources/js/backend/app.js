import '../bootstrap';
import { createApp } from 'vue';

// view ui plus 
import ViewUIPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import locale from 'view-ui-plus/dist/locale/en-US';



// Axios 
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// Router 
import router from './router.js';


//Vuex store
import store from './backendstore.js'


// Editor js
// import Editor from 'vue-editor-js';
// import Editor from 'vue-editor-js/src/index'


//App build start
const app = createApp({});

import BackendMainCompo from './index.vue';
app.component('backcompo', BackendMainCompo);

app.use(ViewUIPlus, {
	locale
});


router.beforeEach((to, from, next) => {
    ViewUIPlus.LoadingBar.start();
    next();
});

router.afterEach(route => {
    ViewUIPlus.LoadingBar.finish();
});
// app.use(Editor);
app.use(store);
app.use(router);
app.mount('#BackApp');
