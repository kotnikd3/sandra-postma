<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body">
            <h4 class="subtitle is-4 has-text-light" v-html="t('therapyTitle')"></h4>
        </div>
    </section>
    <!-- Therapy -->
    <section class="section">
        <div class="container has-bg-img-right">
            <h4 class="title is-4" v-text="t('therapyTitleOne')"></h4>
            <div class="block" v-text="t('therapyTextOne')"></div>
            <div class="block has-text-centered">
                <a class="button is-warning is-outlined" v-text="t('informationLinkText')" href="#whySection"></a>
            </div>
            <div class="block" v-text="t('therapyTextTwo')"></div>
            <div class="block" v-text="t('therapyTextThree')"></div>
            <div class="block has-text-centered">
                <RouterLink class="button is-warning is-outlined" v-text="t('contactPageButtonText')" to="/about"></RouterLink>
            </div>
        </div>
    </section>
    <section class="section" id="whySection">
        <div class="container">
            <h4 class="title is-4" v-text="t('therapyTitleTwo')"></h4>
            <div class="block" v-text="t('therapyTextFour')"></div>
            <div class="block has-text-centered">
                <a class="button is-warning is-outlined" v-text="t('informationLinkText')" href="#howSection"></a>
            </div>
            <div class="block" v-text="t('therapyTextFive')"></div>
            <div class="block" v-text="t('therapyTextSix')"></div>
            <div class="block" v-text="t('therapyTextSeven')"></div>
        </div>
    </section>
    <section class="section" id="howSection">
        <div class="container has-bg-img-left">
            <h4 class="title is-4" v-text="t('therapyTitleThree')"></h4>
            <div class="block" v-text="t('therapyTextEight')"></div>
        </div>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "TherapyView",
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .has-bg-img { 
        background: url('@/assets/images/iris_photo_2.webp') center center; 
        background-size:cover; 
    }
</style>
