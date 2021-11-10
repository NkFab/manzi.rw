<template>
  <div id="services">
    <div id="stacks" class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div class="uk-card uk-card-body">
          <img :src="design" />
          <h3 class="uk-card-title">Design</h3>
          <strong>What I design for.</strong>
          <p class="uk-margin-top">UI, Web, Mobile</p>
          <strong>Tools I've used.</strong>
          <p>Figma, inVision</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-body">
          <img :src="fe" />
          <h3 class="uk-card-title">Front-End Development</h3>
          <strong class="heavy">Languages I speak.</strong>
          <p class="uk-margin-top">HTML, CSS, Js ,Sass, Less</p>
          <strong>Libriaries/Frameworks I have used.</strong>
          <p>
            ReactJs, Redux, React Query, NextJs, VueJs, VueX Bootstrap, Ant
            design, Material UI, TailwindCSS, UIKit, axios
          </p>
          <strong>Tools I’ve used.</strong>
          <p>VSCode, Terminal, GitHub, GitLab, BitBucket, CodePen</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-body">
          <img :src="be" />
          <h3 class="uk-card-title">Back-End Development</h3>
          <strong class="heavy">Languages I speak.</strong>
          <p class="uk-margin-top">Js, SQL, Non-SQL</p>
          <strong>Libriaries & DB I have used.</strong>
          <p>NodeJs, PostgreSQL, MongoDB, ExpressJs, Sequilize, Mongoose</p>
        </div>
        <strong>Tools I’ve used.</strong>
        <p>
          VsCode Terminal,, GitHub, GitLab, BitBUcket, Postman, MongoDB Compass,
          Mongo Shell, pgcli, pdadmin
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import design from "../../../assets/images/design.svg";
import fe from "../../../assets/images/fe.svg";
import be from "../../../assets/images/be.svg";
export default {
  name: "Service",
  data() {
    return {
      design,
      fe,
      be,
    };
  },
};
</script>
<style lang="less" scoped>
#services {
  height: 100%;
  width: 100%;
//   position: absolute;
  background: linear-gradient(180deg, #1b1b1b 35%, #fafafa 0);
  // padding: 0 10px;
  display: flex;
  justify-content: center;
}

#stacks {
  width: 80%;
  height: 60%;
//   position: relative;
  background: #fafafa;
  color: #1b1b1b;
  box-shadow: 0px -20px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 5px 5px;
  padding: 4% 5% 3% 0;
}

.heavy {
  font-weight: 800;
}
</style>