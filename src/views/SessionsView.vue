<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body">
            <h4 class="subtitle is-4 has-text-light" v-text="t('sessionsTitle')"></h4>
        </div>
    </section>
    <div class="section has-text-centered">
        <div class="container">
            <h4 class="title is-4" v-text="t('sessionsTitleOne')"></h4>
            <div class="content" v-text="t('sessionsTextOne')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleTwo')"></h4>
            <div class="content" v-text="t('sessionsTextTwo')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleThree')"></h4>
            <div class="content" v-text="t('sessionsTextThree')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleFour')"></h4>
            <div class="content" v-text="t('sessionsTextFour')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleFive')"></h4>
            <div class="content" v-text="t('sessionsTextFive')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleSix')"></h4>
            <div class="content" v-text="t('sessionsTextSix')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleSeven')"></h4>
            <div class="content" v-html="t('sessionsTextSeven')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleEight')"></h4>
            <div class="content" v-text="t('sessionsTextEight')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleNine')"></h4>
            <div class="content" v-html="t('sessionsTextNine')"></div>
            <h4 class="title is-4" v-text="t('sessionsTitleTen')"></h4>
            <div class="content" v-html="t('sessionsTextTen')"></div>
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
        background-size:cover; 
    }
</style>
