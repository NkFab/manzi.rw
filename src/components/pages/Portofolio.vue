<template>
    <div id='portofolio' class="uk-container uk-container-large">
        <div class="section-title"><strong>Some of My Work</strong></div>
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid="parallax: 150">
        <div v-for='{image, text, link} in showcase_content' :key='image'>
            <Showcase :image="image" :text="text" :link="link" />
        </div>
    </div>
    </div>
</template>
<script>
import devskon from '../../assets/images/devskon.png'
import epd from '../../assets/images/epd.png'
import tora from '../../assets/images/tora.png'
import Showcase from '../Showcase'
export default {
    name: 'Portofolio',
    data () {
        return {
            showcase_content: [
                {image: devskon, text: 'Web Design', link: '#'},
                {image: epd, text: 'Web Design', link: '#'},
                {image: tora, text: 'Web Design', link: '#'}
            ]
        }
    },
    components: {
        Showcase
    }
}
</script>
<style scoped> 
#portofolio {
     padding: 3vh 10vw;
}
</style>