<template>
  <div id="app">
    <NavBar/>
    <Home />
    <About />
    <Services />
    <Hire />
    <Portofolio />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Hire from './components/pages/HireMe'
import Portofolio from './components/pages/Portofolio'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    About,
    Services,
    Hire,
    Portofolio
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
@import './scss/site.less';

.section-title {
    margin: 5vh 0;
    font-size: 36pt;
    text-align: center;
}
</style>