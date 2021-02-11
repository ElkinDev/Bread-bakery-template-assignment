import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart,faPlus,faHeart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
var VueScrollTo = require('vue-scrollto');
import VueSweetalert2 from 'vue-sweetalert2';

library.add(faShoppingCart,faPlus,faHeart,faTrashAlt)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(VueScrollTo)
.use(VueSweetalert2)
.use(router)
.mount('#app')
