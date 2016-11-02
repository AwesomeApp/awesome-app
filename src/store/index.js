import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    {
      title: 'awesome',
      url: 'https://raw.githubusercontent.com/Awesome-Windows/Awesome/master/README.md'
    },
    {
      title: 'awesome-react-native',
      url: 'https://github.com/jondot/awesome-react-native/blob/master/README.md'
    }
  ]
}

const store = new Vuex.Store({
  state// ,
  // mutations,
  // actions
})

export default store
