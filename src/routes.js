import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Services from "./components/pages/Services.vue";
import Portofolio from "./components/pages/Portofolio.vue";
import Contact from "./components/pages/ContactMe.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/my-work", component: Portofolio },
  { path: "/contact-me", component: Contact }
];

export default routes;
