<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body">
            <p class="title has-text-warning" v-text="t('therapyTitle')"></p>
        </div>
    </section>
    <!-- Therapy -->
    <section class="section">
        <div class="container">
            <h4 class="title is-4" v-text="t('therapyTitleOne')"></h4>
            <div class="content" v-text="t('therapyTextOne')"></div>
            <div class="content has-text-centered">
                <a class="button is-warning" v-text="t('informationLinkText')" to="#more"></a>
            </div>
            <div class="content" v-text="t('therapyTextTwo')"></div>
            <div class="content" v-text="t('therapyTextThree')"></div>
            <div class="content has-text-centered">
                <RouterLink class="button is-warning" v-text="t('contactPageButtonText')" to="/about"></RouterLink>
            </div>
            <h4 class="title is-4" v-text="t('therapyTitleTwo')"></h4>
            <div class="content" v-text="t('therapyTextFour')"></div>
            <div class="content has-text-centered">
                <a class="button is-warning" v-text="t('informationLinkText')" to="#more"></a>
            </div>
            <div class="content" v-text="t('therapyTextFive')"></div>
            <div class="content" v-text="t('therapyTextSix')"></div>
            <div class="content" v-text="t('therapyTextSeven')"></div>
            <h4 class="title is-4" v-text="t('therapyTitleThree')"></h4>
            <div class="content" v-text="t('therapyTextEight')"></div>
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
        background: url('@/assets/mist.webp') center center; 
        background-size:cover; 
    }
</style>
