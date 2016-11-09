import Vue from 'vue'
import Vuex from 'vuex'
import lowdb from 'lowdb/lib/index.browser'

const list = [
  {
    title: 'awesome',
    description: 'Curated list of awesome lists https://awesome.re',
    url: 'https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md'
  },
  {
    title: 'awesome-react-native',
    description: 'A curated list of awesome articles, tutorials and resources dealing with React Native.',
    url: 'https://raw.githubusercontent.com/jondot/awesome-react-native/master/README.md'
  }
]

const db = lowdb('db')

db.defaults({ list }).value()

Vue.use(Vuex)

const state = {
  list: []
}

const actions = {
  FETCH_LIST_DATA ({ commit }) {
    const list = db.get('list').value()
    commit('SET_LIST', { list: [...list] })
    return Promise.resolve()
  }
}

const mutations = {

  SET_LIST (state, { list }) {
    state.list = list
  },

  ADD_ITEM (state, { item }) {
    state.list.push(item)
    db.get('list').push(item).value()
  }

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
