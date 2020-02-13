<template>
  <div id="app">
    <NavBar/>
    <Home />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/Home'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
@import './scss/site.less';
#app {
  margin: 0 5%;
}
</style>