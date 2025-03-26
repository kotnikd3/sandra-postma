<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body container">
            <h2 class="subtitle is-4 has-text-light" v-text="t('sessionsTitle')"></h2>
        </div>
    </section>
    <div class="section has-text-centered">
        <div class="container is-max-desktop">
            <div class="block has-bg-img-right">
                <h2 class="title is-4" v-text="t('sessionsTitleOne')"></h2>
                <p v-html="t('sessionsTextOne')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleTwo')"></h2>
                <p v-text="t('sessionsTextTwo')"></p>
            </div>
            <div class="block has-bg-img-left">
                <h2 class="title is-4" v-text="t('sessionsTitleThree')"></h2>
                <p v-text="t('sessionsTextThree')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleFour')"></h2>
                <p v-text="t('sessionsTextFour')"></p>
            </div>
            <div class="block has-bg-img-right">
                <h2 class="title is-4" v-text="t('sessionsTitleFive')"></h2>
                <p v-text="t('sessionsTextFive')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleSix')"></h2>
                <p v-html="t('sessionsTextSix')"></p>
            </div>
            <div class="block has-bg-img-left">
                <h2 class="title is-4" v-text="t('sessionsTitleSeven')"></h2>
                <p v-html="t('sessionsTextSeven')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleEight')"></h2>
                <p v-text="t('sessionsTextEight')"></p>
            </div>
            <div class="block has-bg-img-right">
                <h2 class="title is-4" v-text="t('sessionsTitleNine')"></h2>
                <p v-html="t('sessionsTextNine')"></p>
            </div>
            <div class="block">
                <h2 class="title is-4" v-text="t('sessionsTitleTen')"></h2>
                <p v-html="t('sessionsTextTen')"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "SessionsView",
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .has-bg-img { 
        background: url('@/assets/images/iris_photo_4.webp') center center; 
        background-size: cover;
    }
    .session-box {
        padding-top: 3rem;  /* Adds spacing between each title-content block */
        border-top: 1px solid #ddd; /* Optional: Adds a separator */
    }
</style>
