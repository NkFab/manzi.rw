<template>
    <div id="services" class="uk-container uk-container-xlarge uk-section-default">
        <div class="section-title"><strong style="color: #1b1b1b">Services</strong></div>
        <div class="uk-grid-match uk-child-width-expand@s" uk-grid>
            <div class="uk-width-1-3@l" v-for="{icon, title, description} in services" :key="title">
                <Card :icon="icon" :title="title" :description="description" />
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../Card'
import computer from '../../assets/images/computer.svg'
import mobile from '../../assets/images/mobile.svg'
import code from '../../assets/images/code_computer.svg'
export default {
    name: 'Services',
    data () {
        return {
            services: [
                {
                    icon: computer, 
                    title: 'Web Design', 
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    icon: mobile, 
                    title: 'Mobile App Design', 
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                },
                {
                    icon: code, 
                    title: 'Web Development', 
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
            ]
        }
    },
    components: {
        Card
    }
}
</script>
<style scoped>
#services {
    background: #fafafa;
    padding: 3vh 10vw;
}
</style>