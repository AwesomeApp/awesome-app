import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import List from '../components/List'
import ListItem from '../components/ListItem'
import Tags from '../components/Tags'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Hello
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/list/:name',
    name: 'ListItem',
    component: ListItem
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  }
]

const router = new Router({
  routes
})

export default router
