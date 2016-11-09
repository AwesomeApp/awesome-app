<template>
  <aside class="menu app-sidebar animated">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link :to="{ name: 'List' }">list</router-link>
        <ul>
          <li v-for="item in list">
            <router-link :to="{ name: 'ListItem', params: { name: item.title } }">{{ item.title }}</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{ name: 'Tags' }">tags</router-link>
      </li>
    </ul>

    <button class="button" @click="openModal">添加</button>
  </aside>
</template>

<script>
import Vue from 'vue'
import Modal from './Modal'

const FormModal = Vue.extend(Modal)

const openFormModal = (propsData = {}) => {
  const form = new FormModal({
    el: document.createElement('div'),
    propsData
  }).$mount()
  // form.$el.classList.add('is-active')
  document.getElementById('app').appendChild(form.$el)
}

export default {

  mounted () {
    // console.log(this.list)
  },

  computed: {
    list () {
      return this.$store.state.list
    }
  },

  methods: {
    openModal (e) {
      openFormModal({
        title: '添加链接'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  }

  .icon {
    vertical-align: baseline;
    &.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease;
    }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
    li a {
      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }

    li a + ul {
      margin: 0 10px 0 15px;
    }
  }

}
</style>
