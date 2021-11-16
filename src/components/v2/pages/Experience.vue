<template>
  <div id="experiences" uk-parallax="bgx: -50">
    <p>Some of the amazing companies I have worked/working with and for.</p>
    <div
      class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center uk-flex-middle companies"
      uk-parallax="x: -100, 100"
      uk-grid
    >
      <a href="http://limitless.rw/" target="_blank">
        <img :src="limitless" height="80.05" width="117" />
      </a>
      <a href="https://andela.com/" target="_blank">
        <img :src="andela" alt="" height="40" width="117" />
      </a>
      <a href="https://epdrwanda.com/" target="_blank">
        <img :src="epd" alt="" height="37.8" width="117" />
      </a>
      <a href="https://octan.group/" target="_blank">
        <img :src="octan" alt="" height="37.97" width="117" />
      </a>
      <a href="https://consumatech.com/" target="_blank">
        <img :src="consuma" alt="" height="52.73" width="117" />
      </a>
      <a href="https://www.accuknox.com/" target="_blank">
        <img :src="accuknox" alt="" height="61.81" width="117" />
      </a>
      <a href="https://bktechouse.rw/" target="_blank">
        <img :src="bktech" alt="" height="56.59" width="117" />
      </a>
    </div>
  </div>
</template>
<script>
import limitless from "../../../assets/images/limitless.png";
import andela from "../../../assets/images/download.png";
import epd from "../../../assets/images/download.jpeg";
import octan from "../../../assets/images/octan.png";
import consuma from "../../../assets/images/Consumatech_Logo_Top_NoTagline-300x137.png";
import accuknox from "../../../assets/images/accuknox.png";
import bktech from "../../../assets/images/bkth.jpeg";

export default {
  name: "Experience",
  data() {
    return {
      limitless,
      andela,
      epd,
      octan,
      consuma,
      accuknox,
      bktech,
    };
  },
};
</script>
<style lang="less" scoped>
#experiences {
  height: 40%;
  width: 100%;
  background: #fafafa;
  padding: 10px;
  text-align: center;
}

p {
  color: #1b1b1b;
  font-size: 1.3em;
}

.companies {
    margin: 5% 0;
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