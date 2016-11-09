<template>
  <div class="awesome-repo">
    <div class="repo" v-if="item">
      <!-- 1.0 {{{ item.content }}} -->
      <div class="wysiwyg" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export default {

  data () {
    return {
      item: null
    }
  },

  beforeMount () {
    this.fetchData(this.name)
  },

  computed: {
    list () {
      return this.$store.state.list
    },

    name () {
      return this.$route.params.name
    }
  },

  methods: {
    fetchData (name) {
      const item = this.list.filter(e => e.title === name)[0] || null
      if (item) {
        return axios.get(item.url)
          .then(res => {
            item.raw = res.data
            item.content = md.render(item.raw)
            this.item = item
          })
      }
    }
  },

  watch: {
    $route () {
      this.fetchData(this.name)
    }
  }

}
</script>

<style lang="scss">
@import "~wysiwyg.css/wysiwyg.sass";

.awesome-repo {
  background-color: #fff;
}

.wysiwyg {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  margin: 0 auto;
  padding: 1rem;
  position: relative;
}
</style>
