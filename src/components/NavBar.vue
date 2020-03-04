<template>
<div class="uk-offcanvas-content">
  <nav id="navbar" class="uk-navbar-container" uk-navbar="mode: click" uk-sticky="animation: uk-animation-slide-top; show-on-up: true">
    <div class="uk-navbar-left nav-overlay"><a href="#" class="uk-navbar-item uk-logo"><img :src="logo"></a></div>
    <div class="uk-navbar-right nav-overlay">
      <div class="uk-navbar-flip">
        <ul class="uk-navbar-nav uk-visible@s">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#portofolio">PORTOFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#" class="uk-navbar-toggle"></a></li>
        </ul>
        <ul class="uk-navbar-nav uk-hidden@s">
          <li><a href="#" class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #mobile-navbar"></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="mobile-navbar" uk-offcanvas="mode: slide; flip:false">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
        <li><a href="#"><img :src="logo"></a></li>
        <li><hr class="uk-divider-small"></li>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portofolio">PORTOFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import logo from '../assets/images/logo.svg'

export default {
  name: 'NavBar',
  data () {
    return {
      logo
    }
  },
  methods: {
    goTo: function(section) {
      const element = this.$refs[section];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  padding: 0 8vw;
  overflow: hidden;
}
</style>
