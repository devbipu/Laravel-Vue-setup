import {createApp} from "vue";
import MainView from './mainfrontapp.vue';

//Viue Ui Plus
import ViewUIPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import locale from 'view-ui-plus/dist/locale/en-US';

// Mixins
import frontMixins from './global.js'

// axios
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// Router
import router from './router.js';

//Vuex store
import store from './frontstore.js'



const frontApp = createApp({});

frontApp.component('mainfrontview', MainView);
frontApp.mixin(frontMixins);

frontApp.use(ViewUIPlus, {
	locale
});

router.beforeEach((to, from, next) => {
    ViewUIPlus.LoadingBar.start();
    next();
});

router.afterEach(route => {
    ViewUIPlus.LoadingBar.finish();
});

frontApp.use(store);
frontApp.use(router);
frontApp.mount('#FrontApp');