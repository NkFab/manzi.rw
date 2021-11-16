<template>
        <div id="showcase" class="container">
            <img :src="image" class="image"/>
            <div class="overlay">
                <div class="text">{{text}}</div>
                <div class="icon"><a :href="link" target="_blank" class="uk-icon-button" uk-icon="link"></a></div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'Showcase',
    props: ['image', 'text', 'link']
}
</script>
<style scoped>
#showcase {
    box-shadow: 1px 1px 30px #000000;
}
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: #000;
}

.container:hover .overlay {
  opacity: .9;
}

.text {
  color: #fafafa;
  font-size: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.icon {
  color: #fafafa;
  font-size: 20px;
  position: absolute;
  top: 60%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>