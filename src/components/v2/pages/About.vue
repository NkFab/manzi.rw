<template>
  <div id="about" class="uk-container uk-container-large">
    <div class="uk-height-1-1 uk-text-large">
      <h3 class="hello-again">HELLO AGAIN, <br />NICE TO MEET YOU!</h3>
      <div class="hello-text">
        <p>
          I am a full-stack software engineer passionate about building
          beautiful and interactive interfaces. My favourite thing about
          software engineering has to be the feeling you get from being able to
          create or to be part of a team that can create something that can
          change, transform, and improve the lives of many people for the
          better. I hold a Bachelor's degree in Information technology from the
          Adventist University of Central Africa.
        </p>
        <p>
          Since starting my development journey back in 2018 I have worked with
          startups, with remote companies and I have done consultancy, I value
          each experience I garnered on my journey and I looking for new
          challenges to grow as a person and as a proffessional.
        </p>
        <p>
          When I’m not coding I like to play PS games, watch tv series, watch
          docuseries, hiking, jogging or just out with friends.
        </p>
      </div>
    </div>
    <div class="uk-width-1-1 uk-flex uk-flex-center uk-margin-top" >
      <a :href="`${publicPath}Nkaka Manzi Fabrice - Resume.pdf`" download="Nkaka Manzi Fabrice_Resume" class="uk-button">Download Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
      return {
        publicPath: process.env.BASE_URL
      }
  }
};
</script>

<style lang="less" scoped>
#about {
  padding: 3vh 10vw;
}
.hello-again {
  text-align: center;
  color: #fafafa;
}
.hello-text {
  font-size: 1.15em;
  text-align: center;
}

a {
  background: #1b1b1b;
  box-shadow: 0.625em 0.625em 0.625em 0.3125em #000000;
  border-radius: 0.3125em;
  color: #fafafa;
  padding: 0.525em 2.5em;
  font-size: 1.125em;
  &:hover {
    box-shadow: 0.3125em 0.3125em 0.3125em 0.15em #000000;
    color: #fafafa;
  }
}
</style>