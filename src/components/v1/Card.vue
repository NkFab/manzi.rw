<template>
    <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-margin-bottom" uk-parallax="stroke: 100%; viewport: 0.7">
        <img :src='icon' height="50" width="50" uk-svg>
        <h3 class="uk-card-title">{{title}}</h3>
        <p>{{description}}</p>
        </div>
</template>
<script>
export default {
    name: 'card',
    props: ['icon', 'title', 'description']
}
</script>
<style scoped>
</style>