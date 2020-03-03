<template>
<div id='hire' class="uk-container uk-container-xlarge uk-section-default">
    <div class="section-title"><strong>Have a Project in Mind?</strong></div>
    <div class="uk-grid-match uk-grid-match-child-expand@s uk-flex-center@m" uk-grid>
        <div class="uk-width-1-5@m"><a class="uk-button-large uk-button-primary download" href="../../assets/docs/Nkaka Manzi Fabrice - Resume.pdf" target="_blank" download>DOWNLOAD CV</a></div>
        <div class="uk-width-1-5@m"><button class="uk-button-large uk-button-default" @click="goTo">HIRE ME</button></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HireMe',
    methods: {
        goTo: function () {
            const inTouch = document.getElementById('contact');
            return inTouch.scrollIntoView();
        }
    }
}
</script>

<style scoped>
#hire {
    padding-bottom: 10vh;
    background: linear-gradient(rgba(27, 27, 27, 0.30), rgba(27, 27, 27, 1)), url('https://source.unsplash.com/1600x900/?coding');
    background-size: cover;
}

.download {
    text-align: center;
}

.download:hover {
    text-decoration: none;
}
</style>
