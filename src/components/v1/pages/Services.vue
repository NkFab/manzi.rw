<template>
  <div
    id="services"
    class="uk-container uk-container-xlarge uk-section-default"
  >
    <div class="section-title">
      <strong style="color: #1b1b1b">Services</strong>
    </div>
    <div
      class="uk-grid-match uk-child-width-expand@s"
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
      uk-grid
    >
      <div
        class="uk-width-1-3@l"
        v-for="{ icon, title, description } in services"
        :key="title"
      >
        <Card :icon="icon" :title="title" :description="description" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import computer from "../../../assets/images/computer.svg";
import mobile from "../../../assets/images/mobile.svg";
import code from "../../../assets/images/code_computer.svg";
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          icon: computer,
          title: "Web Design",
          description:
            "I design beautiful website mock-ups from wireframes, from an existing website that needs improvement or from a workflow supplied by a client. I convert the mock-ups to HTML and CSS to a pixel perfect detail. I use tools such as Figma, Invision and Photoshop.",
        },
        {
          icon: mobile,
          title: "Mobile App Design",
          description:
            "I design beatiful mobile mock-ups from wireframes, from an exisiting mobile app that needs improvment or from a workflow supplied by a client. I use tools such as Figma, Invision and Photoshop.",
        },
        {
          icon: code,
          title: "Web Development",
          description:
            "I build a modern responsive web application in the JavaScript stack PREN (PostgreSQL, React, Express, Node)/PENV (PostgreSQL, Express, Node, Vue), the app have to be tested using tools like Jest and Mocha &Chai. I also implement CI/CD to ensure quality of the app using tools such as Travis, Code Climate and Snyk.",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
#services {
  background: #fafafa;
  padding: 3vh 10vw;
}
</style>
