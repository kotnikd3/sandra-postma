<template>
    <div class="section">
        <div class="container">
            Sessions View
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
