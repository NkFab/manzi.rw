<template>
    <div id="contact" class="uk-container uk-container-xlarge uk-section-default">
        <div class="section-title"><strong>Get In Touch</strong></div>
        <div class="uk-grid-match uk-grid uk-child-width-expand@s" uk-grid>
            <div class="uk-width-1-2@l">
                <input class="uk-input in" type="text" placeholder="Name">
                <input class="uk-input in" type="text" placeholder="E-mail">
                <textarea class="uk-textarea in" rows="5" placeholder="Message"></textarea>
                <div><button class="uk-button uk-button-secondary">SEND MESSAGE</button></div>
            </div>
            <div>
                <div class="uk-flex" uk-grid>
                    <div><img :src="pin" width="30" height="30"></div>
                    <div>Kigali, Rwanda</div>
                </div>
            </div>
            <br>
            <div>
                <div class="uk-flex" uk-grid>
                    <div><img :src="pin" width="30" height="30"></div>
                    <div>Kigali, Rwanda</div>
                </div>
            </div>
            <br>
            <div>
                <div class="uk-flex" uk-grid>
                    <div><img :src="pin" width="30" height="30"></div>
                    <div>Kigali, Rwanda</div>
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
    padding: 3vh 10vw;
    color: #1b1b1b;
}
.in {
    background: white;
    margin: 1vh 0;
}
</style>