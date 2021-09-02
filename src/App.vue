<template>
  <div id="app">
    <NavBar />
    <Home />
    <!-- <About />
    <Services />
    <Hire />
    <Portofolio />
    <ContactMe /> -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/v2/Navbar.vue";
import Home from "./components/v2/pages/Home.vue";
// import About from "./components/v1/pages/About";
// import Services from "./components/v1/pages/Services";
// import Hire from "./components/v1/pages/HireMe";
// import Portofolio from "./components/v1/pages/Portofolio";
// import ContactMe from "./components/v1/pages/ContactMe";
import Footer from "./components/v1/Footer";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
export default {
  name: "App",
  components: {
    NavBar,
    Home,
    // About,
    // Services,
    // Hire,
    // Portofolio,
    // ContactMe,
    Footer,
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
@import "./less/site.less";

html {
  scroll-behavior: smooth;
}

.section-title {
  margin: 5vh 0;
  font-size: 36pt;
  text-align: center;
}
</style>