<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body"></div>
    </section>
    <section class="section">
        <div class="container is-max-desktop has-bg-img-right">
            <div class="block">
                Text TODO<br>
                Text TODO<br>
            </div>
            <div class="columns is-centered has-text-centered">
                <div class="column is-half">
                    <h4 class="subtitle is-4">
                        <span class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </span>
                            <span>+31 6 11 80 33 43</span>
                        </span>
                    </h4>
                </div>
                <div class="column is-half">
                    <h4 class="subtitle is-4">
                        <span class="icon-text">
                            <span class="icon">
                                <font-awesome-icon icon="fa-regular fa-envelope" />
                            </span>
                            <span>praktijk@sandra-postma.nl</span>
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact -->
    <section class="section">
        <div class="container is-max-tablet">
            <ContactForm></ContactForm>
        </div>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    import ContactForm from '@/views/ContactForm.vue';
    
    export default {
        name: "ContactView",
        components: {
            ContactForm,
        },
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .has-bg-img { 
        background: url('@/assets/images/iris_photo_7.webp') center center; 
        background-size: cover;
    }
</style>
