<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" @click="hide"></button>
      </header>
      <section class="modal-card-body">
        <form class="form">
          <label class="label">名称</label>
          <p class="control">
            <input ref="nameInput" class="input" type="text" placeholder="请输入链接名称" autofocus tabindex="2" v-model="newItem.title">
          </p>
          <label class="label">链接</label>
          <p class="control">
            <input class="input" type="text" placeholder="请输入链接地址" tabindex="3" v-model="newItem.url">
          </p>
          <label class="label">简介</label>
          <p class="control">
            <textarea class="textarea" placeholder="请输入简介" tabindex="4" v-model="newItem.description"></textarea>
          </p>
        <form>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary" tabindex="5" @click="save">保存</a>
        <a class="button" tabindex="6" @click="cancle">取消</a>
      </footer>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {

  props: {
    title: String
  },

  data () {
    return {
      show: false,
      newItem: {
        title: '',
        description: '',
        url: ''
      }
    }
  },

  mounted () {
    this.show = true
    this.$refs.nameInput.focus()
  },

  beforeDestroy () {
    this.$el.remove()
  },

  methods: {

    save (e) {
      // this.$store?
      store.commit('ADD_ITEM', { item: Object.assign({}, this.newItem) })
      this.newItem.title = this.newItem.url = this.newItem.description = ''
      this.hide()
    },

    cancle (e) {
      this.hide()
    },

    hide () {
      this.show = false
      this.$destroy()
    }

  },

  watch: {
    show (val) {
      this.$el.classList.toggle('is-active', val)
    }
  }

}
</script>

<style lang="scss">
.form {
  text-align: left;
}
</style>
