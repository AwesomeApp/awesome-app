<template>
  <div class="columns is-multiline awesome-list">
    <div class="column is-one-third-tablet is-one-third-desktop" v-for="item in list">
      <div class="card is-fullwidth">
        <header class="card-header">
          <p class="card-header-title">
            {{ item.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{ item.description }}
          </div>
        </div>
        <footer class="card-footer">
          <router-link class="card-footer-item" :to="{ name: 'ListItem', params: { name: item.title } }">More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list () {
      return this.$store.state.list
    }
  }
}
</script>

<style lang="scss">
.awesome-list {
  .card {
    .card-content {
      height: 80px;
      overflow-y: auto;
    }
  }
}
</style>
