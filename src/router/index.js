import Vue from 'vue'
import Router from 'vue-router'
import search from '../components/Search.vue'
import Movie from '../components/Movie.vue'
Vue.use(Router)

export default new Router({
  
     routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },

    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    }


  ],
  mode: 'history'

})