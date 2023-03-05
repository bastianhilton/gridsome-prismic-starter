// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/web/assets/mobirise-icons2/mobirise2.css'
import '~/assets/bootstrap/css/bootstrap.min.css'
import '~/assets/bootstrap/css/bootstrap-grid.min.css'
import '~/assets/bootstrap/css/bootstrap-reboot.min.css'
import '~/assets/dropdown/css/style.css'
import '~/assets/socicon/css/styles.css'
import '~/assets/theme/css/style.css'
import '~/assets/mobirise/css/mbr-additional.css'
import '~/assets/styles.css'

//import '~/assets/bootstrap/js/bootstrap.bundle.min.js'
//import '~/assets/smoothscroll/smooth-scroll.js'
//import '~/assets/ytplayer/index.js'
//import '~/assets/dropdown/js/navbar-dropdown.js'
//import '~/assets/theme/js/script.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
