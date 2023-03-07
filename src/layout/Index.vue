<template>
  <div class="layout" >
    <Menu></Menu>
    <div>
      <Header></Header>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './header/Index.vue'
import Menu from './menu/Index.vue'
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>