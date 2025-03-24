<template>
    <!-- Blank section, so that 'nth-child' CSS rule can be used -->
    <section class="section" style="display: none;"></section>
    <!-- About Sandra -->
    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <!-- Column -->
             	<div class="column has-text-centered">
                    <img class="img-main" src="@/assets/images/sandra_photo.webp" alt="Sandra_Postma">
                </div>
                <!-- Column -->
                <div class="column">
                    <h4 class="title is-4" v-text="t('about')"></h4>
                    <div class="content" v-text="t('aboutTextOne')"></div>
                    <div class="content" v-text="t('aboutTextTwo')"></div>
                    <div class="content" v-html="t('aboutTextThree')"></div>
                    <div class="content" v-text="t('aboutTextFour')"></div>
                    <div class="content" v-text="t('aboutTextFive')"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- Experience -->
     <section class="section">
        <CustomCarousel></CustomCarousel>
    </section>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    import CustomCarousel from '@/views/CustomCarousel.vue';
    
    export default {
        name: "AboutView",
        components: {
            CustomCarousel,
        },
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>

<style scoped>
    .img-main {
        width: 80%;
        border-radius: 2%;
    }
</style>