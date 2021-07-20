<template>
  <div id="app">
    <nav-menu />
    <h1>Hello</h1>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './components/content/navmenu/NavMenu.vue'
export default {
  components: { NavMenu },
  name: 'App'
}
</script>

<style>

</style>
