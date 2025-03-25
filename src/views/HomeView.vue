<template>
    <!-- Hero -->
    <section class="hero is-medium has-bg-img">
        <div class="hero-body">
            <h2 class="title is-2 has-text-light" v-text="t('homeTitle')"></h2>
            <h4 class="subtitle is-4 has-text-light" v-text="t('homeSubtitle')"></h4>
        </div>
    </section>
    <!-- Quotes -->
    <section class="section">
        <div class="container is-max-tablet has-text-left has-bg-img-right">
            <p class="has-text-orange is-italic is-size-4" v-html="t('quoteOne')"></p>
        </div>
        <div class="container is-max-tablet has-text-right mt-5 has-bg-img-left">
            <p class="has-text-orange is-italic is-size-5" v-html="t('quoteTwo')"></p>
        </div>
    </section>
    <!-- Welcome -->
    <section class="section">
        <div class="container">
            <h4 class="title is-4" v-text="t('welcomeTitle')"></h4>
            <div class="block" v-text="t('welcomeTextOne')"></div>
            <div class="block has-text-weight-bold has-text-centered" v-text="t('welcomeTextTwo')"></div>
            <div class="block" v-text="t('welcomeTextThree')"></div>
            <div class="has-text-centered">
                <RouterLink class="button is-warning is-outlined" v-text="t('welcomeButtonText')" to="/therapy"></RouterLink>
            </div>
        </div>
    </section>
    <!-- When can it help -->
    <section class="section">
        <div class="container">
            <h4 class="title is-4" v-text="t('whenCanItHelpTitle')"></h4>
            <p v-text="t('whenCanItHelpText')"></p>
            <div class="content">
                <ul>
                    <li v-text="t('whenCanItHelpBulletOne')"></li>
                    <li v-text="t('whenCanItHelpBulletTwo')"></li>
                    <li v-text="t('whenCanItHelpBulletThree')"></li>
                    <li v-text="t('whenCanItHelpBulletFour')"></li>
                    <li v-text="t('whenCanItHelpBulletFive')"></li>
                    <li v-text="t('whenCanItHelpBulletSix')"></li>
                    <li v-text="t('whenCanItHelpBulletSeven')"></li>
                    <li v-text="t('whenCanItHelpBulletEight')"></li>
                    <li v-text="t('whenCanItHelpBulletNine')"></li>
                </ul>
            </div>
            <p v-text="t('whatCanItBringText')"></p>
            <div class="content has-bg-img-right">
                <ul>
                    <li v-text="t('whatCanItBringBulletOne')"></li>
                    <li v-text="t('whatCanItBringBulletTwo')"></li>
                    <li v-text="t('whatCanItBringBulletThree')"></li>
                    <li v-text="t('whatCanItBringBulletFour')"></li>
                    <li v-text="t('whatCanItBringBulletFive')"></li>
                    <li v-text="t('whatCanItBringBulletSix')"></li>
                    <li v-text="t('whatCanItBringBulletSeven')"></li>
                    <li v-text="t('whatCanItBringBulletEight')"></li>
                </ul>
            </div>
            <div class="has-text-centered">
                <RouterLink class="button is-warning is-outlined" v-text="t('contactButtonText')" to="/sessions"></RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "HomeView",
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .has-bg-img { 
        background: url('@/assets/images/iris_photo_1.webp') center center; 
        background-size:cover; 
    }
</style>
