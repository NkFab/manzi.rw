<template>
<div class="uk-offcanvas-content">
  <nav id="navbar" class="uk-navbar-container" uk-navbar="mode: click" uk-sticky="animation: uk-animation-slide-top; show-on-up: true">
    <div class="uk-navbar-left nav-overlay"><router-link to="/" class="uk-navbar-item uk-logo"><img :src="logo"></router-link></div>
    <div class="uk-navbar-right nav-overlay">
      <div class="uk-navbar-flip">
        <ul class="uk-navbar-nav uk-visible@s">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/services">SERVICES</router-link></li>
          <li><router-link to="/my-work">PORTOFOLIO</router-link></li>
          <li><router-link to="/contact-me">CONTACT</router-link></li>
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
        <li><router-link to="/"><img :src="logo"></router-link></li>
        <li><hr class="uk-divider-small"></li>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/services">SERVICES</router-link></li>
        <li><router-link to="/my-work">PORTOFOLIO</router-link></li>
        <li><rouer-link to="/contact-me">CONTACT</rouer-link></li>
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
