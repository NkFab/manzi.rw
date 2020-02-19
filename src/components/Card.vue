<template>
    <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-margin-bottom">
        <img :src='icon' height="50" width="50" />
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