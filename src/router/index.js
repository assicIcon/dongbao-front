import Vue from 'vue'
import Route from 'vue-router'
import routes from './routes'

Vue.use(Route);


export default router = new Route({
  routes,
  mode: "history"
})