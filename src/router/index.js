import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pictures from '../views/Pictures.vue'
import Costs from '../views/Costs.vue'
import Contact from '../views/Contact.vue'
import PicturesDetails from '../views/PicturesDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/pictures', name: 'Pictures', component: Pictures },
  { path: '/pictures/:slug', name: 'PicturesDetails', component: PicturesDetails, props: true },
  { path: '/costs', name: 'Costs', component: Costs },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // si navigation avec "back" ou "forward"
    if (savedPosition) {
      return savedPosition
    } else {
      // sinon toujours en haut de la page
      return { top: 0 }
    }
  }
})

export default router
