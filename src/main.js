import { createApp } from 'vue'
import App from './App.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faGoodreads } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faGoodreads, faCopyright, faMobileAlt, faMapMarkerAlt, faEnvelope)

// Custom CSS
require('./mystyles.scss');

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#body-vue')
