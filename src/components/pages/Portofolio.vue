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
import dairynomics from '../../assets/images/dairynomics.png'
import pharmaloc from '../../assets/images/pharmaloc.png'
import parkapp from '../../assets/images/parkapp.png'
import manzi from '../../assets/images/manzi.png'
import Showcase from '../Showcase'
export default {
    name: 'Portofolio',
    data () {
        return {
            showcase_content: [
                {image: dairynomics, text: 'Web Design', link: 'https://www.figma.com/file/QFw94qdk7V8F5yLZEdLz9r/DN-ECOMMERCE'},
                {image: pharmaloc, text: 'Web Design', link: 'https://www.figma.com/file/E78nZ3Sej7Pv1QhKrcrkqK/PharmLoc'},
                {image: devskon, text: 'Web Design', link: 'https://www.figma.com/file/M57I0uNX4u0XNGbxhQlSvv/devskon'},
                {image: epd, text: 'Web Design', link: 'https://www.figma.com/file/amkD3sWmInxVHFoN2HH8Xn/EPD'},
                {image: tora, text: 'Web Design', link: 'https://www.figma.com/file/5lM5H87beQe1KZyIBhkUei/Feb-Rice'},
                {image: manzi, text: 'Web Design', link: 'https://www.figma.com/file/hlFHvXMaDXyjNnPtWFE3PR/Manzi.rw'},
                {image: parkapp, text: 'Mobile Design', link: 'https://www.figma.com/file/RsVzrNzMYmZpYdElSJgabR/Parking-app'}
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