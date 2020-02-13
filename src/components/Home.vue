<template>
<div id="home" class="uk-container uk-container-large">

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
            <div>
            <div id='hello'>
                HELLO THERE, I'M<br/>
            <strong>NKAKA MANZI FABRICE</strong>
            </div>
            <p>A UI designer & full stack software developer</p>
            <button class="uk-button-primary uk-button-large">VIEW MY WORK</button>
            <a href="" class="uk-icon-button" uk-icon="linkedin"></a>
            </div>
            <div>
               <img :src='profile' width="978" height="734"/>
            </div>
        </div>

    </div>
</template>

<script>
import profile from '../assets/images/profile.png'
export default {
    name: 'HomePage',
    data() {
        return {
            profile
        }
    }
}
</script>
<style lang='css' scoped>
#home {
    margin-top: 14vh;
}
#hello {
    font-size: 25px;
}
</style>