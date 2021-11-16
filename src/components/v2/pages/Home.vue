<template>
  <div id="home" class="uk-container uk-container-large">
    <div class="uk-flex uk-flex-between" uk-parallax="target: #home; blur: 0,15;">
      <div class="uk-width-4-6@m">
        <h1 id="hello">HELLO, I’M <br />NKAKA.MANZI.<br /> FABRICE</h1>
        <p>A full stack software developer and UI designer.</p>
      </div>
      <div class="uk-width-2-6@m">
        <img class="limiter" :src="profile" width="433" height="577" />
      </div>
    </div>
  </div>
</template>

<script>
import profile from '../../../assets/images/new_profile_pic.png'
export default {
  name: "Home",
  data() {
    return {
      profile
    }
  }
};
</script>

<style scoped>
.limiter {
border-left: 3px solid #979797;
line-height: 150px;
}

p {
  font-size: 2.25em;
}
#home {
  /* margin-top: 11vh; */
  padding: 11vh 10vw;
}

#hello {
  color: #fafafa;
}
</style>
