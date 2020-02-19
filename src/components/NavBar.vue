<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav id="navbar" class="uk-navbar-container uk-padding-small" uk-navbar>
    <div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#"><img :src="logo"/></a></div>   
    <div class="uk-navbar-right">
         <ul class="uk-navbar-nav">
            <li class="uk-text-small"><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PORTOFOLIO</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
    </div>
    </nav>
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
}
</style>
