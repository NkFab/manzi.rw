<template>
    <div id="contact" ref="contact" class="uk-container uk-container-xlarge uk-section-default">
        <div class="section-title"><strong>Get In Touch</strong></div>
        <div class="uk-grid-match uk-grid uk-child-width-expand@s" uk-grid>
            <div class="uk-width-1-2@l" uk-scrollspy="cls: uk-animation-slide-left; delay: 400; repeat: true">
                <input class="uk-input in" type="text" placeholder="Name">
                <input class="uk-input in" type="text" placeholder="E-mail">
                <textarea class="uk-textarea in" rows="5" placeholder="Message"></textarea>
                <div><button class="uk-button uk-button-secondary">SEND MESSAGE</button></div>
            </div>
            <div class="uk-height-1-1" uk-scrollspy="cls: uk-animation-slide-right; delay: 400; repeat: true">
                <div class="uk-flex" uk-grid>
                    <div><img :src="pin" width="25" height="25"></div>
                    <div><h5>Kigali, Rwanda</h5></div>
                </div>
                <div class="uk-flex" uk-grid>
                    <div><img :src="email" width="25" height="25"></div>
                    <div><h5>nkakamanzi.fabrice@gmail.com</h5></div>
                </div>
                <div class="uk-flex" uk-grid>
                    <div><img :src="phone" width="25" height="25"></div>
                    <div><h5>+250 786 155 871</h5> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pin from '../../assets/images/pin.svg'
import email from '../../assets/images/email.svg'
import phone from '../../assets/images/phone.svg'
export default {
    name: 'ContactMe',
    data () {
        return {
            pin,
            email,
            phone
        }
    }
}
</script>
<style scoped>
#contact {
    background: #fafafa;
    padding: 5vh 10vw;
    color: #1b1b1b;
}
.in {
    background: white;
    margin: 1vh 0;
}
button {
    margin: 1vh 0;
}
</style>