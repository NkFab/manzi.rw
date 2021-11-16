<template>
  <div id="home" class="uk-container uk-container-large">
    <div class="uk-grid-match uk-child-width-expand@s" uk-grid>
      <div class="uk-width-1-4@m">
        <div id="hello">
          HELLO THERE, I'M<br />
          <strong>NKAKA MANZI FABRICE</strong>
        </div>
        <p>A UI designer & full stack software developer</p>
        <div style="margin-bottom: 10px;">
          <button class="uk-button-large uk-button-primary" @click="goTo">
            VIEW MY WORK
          </button>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nkaka-manzi-fabrice-4ab567121/"
            target="_blank"
            class="uk-icon-button"
            uk-icon="linkedin"
          ></a>
        </div>
      </div>
      <div class="uk-width-3-4@m">
        <img :src="profile" width="978" height="734" />
      </div>
    </div>
  </div>
</template>

<script>
import profile from "../../../assets/images/profile.png";
export default {
  name: "HomePage",
  data() {
    return {
      profile
    };
  },
  methods: {
    goTo: function() {
      const porto = document.getElementById("portofolio");
      return porto.scrollIntoView();
    }
  }
};
</script>
<style scoped>
#home {
  /* margin-top: 11vh; */
  padding: 11vh 10vw;
}
</style>
