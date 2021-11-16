<template>
    <div id="progress-bar">
        <div class="uk-flex uk-flex-between" uk-grid>
            <div>{{skill}}</div>
            <div>{{level}}%</div>
        </div>
        <progress class="uk-progress" :value="level" max="100"></progress>
    </div>
</template>
<script>
export default {
    name: 'progress-bar',
    props: ['skill', 'level']
}
</script>
<style scoped>

</style>