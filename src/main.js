import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart,faPlus,faHeart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart,faPlus,faHeart,faTrashAlt)

import Vuelidate from 'vuelidate'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(Vuelidate)
.use(router)
.mount('#app')
