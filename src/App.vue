<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
@import './scss/site.less';
</style>