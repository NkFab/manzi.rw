<template>
    <div id="about" class="uk-container uk-container-large">
        <div class="section-title"><strong>About Me</strong></div>
        <div class="uk-grid-match uk-grid uk-child-width-expand@s" uk-grid>
            <div>
                <div class="hello-again">Hello again! I’m Manzi</div>
                <div class="hello-text">Hello! I am a full-stack associate software engineer passionate 
                    about building beautiful and interactive interfaces. My favourite thing
                    about software engineering has to be the feeling you get from being able
                    to create or to be part of a team that can create something that 
                    can change, transform, and improve the lives of many people for the better. I
                    hold a Bachelor's degree in Information technology from the Adventist University of Central Africa.
                    With 2 years of experience in software development.
                </div>
            </div>
            <div>
                <div class="hello-again">Skills and Level of proficience</div>
                <div v-for='{skill, level} in skills' :key='skill'>
                    <ProgressBar :skill='skill' :level='level'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from '../Progress'
export default {
    name: 'AboutPage',
    data () {
        return {
            skills: [
                {skill: 'HTML', level: '90'},
                {skill: 'CSS', level: '70'},
                {skill: 'Js', level: '80' },
                {skill: 'React Js', level: '70'},
                {skill: 'Vue Js', level: '80'},
                {skill: 'Node Js', level: '70' },
                {skill: 'SQL databases', level: '80' },
                {skill: 'Software Testing', level: '60' },
                {skill: 'Mockup Design', level: '95' }
            ]
        }
    },
    components: {
        ProgressBar
    }
}
</script>

<style scoped>
#about {
    margin: 2vh 0;
    padding: 0 10vw;
}
.hello-again {
    font-size: 25pt;
    margin: 1vh 0;
}
.hello-text {
    font-size: 14pt;
}
</style>