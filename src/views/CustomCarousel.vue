<template>
    <div class="carousel-wrapper">
        <carousel :items-to-show="1" :autoplay="3000" wrap-around>
            <slide v-for="(text, index) in slides" :key="index">
                <h5 class="subtitle is-5 has-text-orange is-italic" v-html="text"></h5>
            </slide>
            
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>
  
<script setup>
    import { useI18n } from 'vue-i18n';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    const { t } = useI18n();
    
    const slides = [
        t('aboutExperienceQuoteOne'), 
        t('aboutExperienceQuoteTwo'),
    ]
</script>
