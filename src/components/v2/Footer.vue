<template>
  <div id="footer" class="uk-flex uk-flex-center uk-text-center uk-flex-column">
    <a href="#" class="uk-navbar-item uk-logo"><img :src="logo"/></a>
    <p>Humor . Openness . Resilience . Discretion . Learning . Living</p>
    <div>
      <a
        href="https://www.linkedin.com/in/nkaka-manzi-fabrice-4ab567121/"
        target="_blank"
        ><img :src="ldin" alt=""
      /></a>
      <a href="mailto: nkakamanzi.fabrice@gmail.com"
        ><img :src="gmail" alt="" class="uk-margin-left uk-margin-right"
      /></a>
      <a href="https://github.com/nkfab" target="_blank"
        ><img :src="git" alt=""
      /></a>
    </div>
    <p>
      Crafted by me © Nkaka Manzi Fabrice 2021. <br />
      Using
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
        ><img :src="vuee" alt="" height="21" width="21"
      /></a>
    </p>
    <p>
      made with
      <a href="https://getuikit.com/" target="_blank"
        ><img :src="uk" alt=""
      /></a>
    </p>
  </div>
</template>
<script>
import logo from "../../assets/images/logo.svg";
import git from "../../assets/images/github.svg";
import gmail from "../../assets/images/gmail.svg";
import ldin from "../../assets/images/linkedin.svg";
import vuee from "../../assets/images/vuee.svg";
import uk from "../../assets/images/uk.svg";

export default {
  name: "Experience",
  data() {
    return {
      logo,
      git,
      gmail,
      ldin,
      vuee,
      uk,
    };
  },
};
</script>
<style lang="less" scoped>
#footer {
  width: 100%;
  background: #1b1b1b;
  padding: 5% 0;
  // text-align: center;
}

img {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  cursor: pointer;
}

img:hover {
  filter: none;
  -webkit-filter: grayscale(0);
}
</style>
