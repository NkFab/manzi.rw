<template>
  <div id="app">
    <NavBar/>
    <Home />
    <About />
    <Services />
    <Hire />
    <Portofolio />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Hire from './components/pages/HireMe'
import Portofolio from './components/pages/Portofolio'
import ContactMe from './components/pages/ContactMe'
import Footer from './components/Footer'
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
    Portofolio,
    ContactMe,
    Footer
  }
}
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
@import './less/site.less';

html {
  scroll-behavior: smooth;
}

.section-title {
    margin: 5vh 0;
    font-size: 36pt;
    text-align: center;
}

</style>