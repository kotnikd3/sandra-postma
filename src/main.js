import '@/style.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright, faEnvelope, faLocationDot, faFile)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

