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
            <input class="input" type="text" placeholder="请输入链接名称">
          </p>
          <label class="label">链接</label>
          <p class="control">
            <input class="input" type="text" placeholder="请输入链接地址">
          </p>
        <form>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary" @click="save">保存</a>
        <a class="button" @click="cancle">取消</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: String
  },

  data () {
    return {
      show: false
    }
  },

  mounted () {
    this.show = true
  },

  beforeDestroy () {
    this.$el.remove()
  },

  methods: {

    save (e) {

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
