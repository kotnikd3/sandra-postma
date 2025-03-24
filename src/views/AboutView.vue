<template>
    <div class="section">
        <div class="container">
            About View
        </div>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n';
    
    export default {
        name: "AboutView",
        setup() {
            const { t } = useI18n()
            return { t }
        },
    }
</script>
