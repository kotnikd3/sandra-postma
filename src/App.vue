<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ml-6">
            <RouterLink class="navbar-item" to="/">
                <img src="@/assets/images/logo.webp" alt="Sandra_Postma_logo">
            </RouterLink>
            <p class="navbar-item is-size-4" v-text="t('homeTitle')"></p>
            <a 
                role="button" 
                :class="['navbar-burger', { 'is-active' : isMenuActive }]" 
                aria-label="menu" 
                aria-expanded="false" 
                data-target="navMenu"
                @click="toggleMenu"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
            <div class="navbar-end mr-6">
                <RouterLink class="navbar-item" to="/">Home</RouterLink>
                <RouterLink class="navbar-item" to="/therapy">Body-oriented therapy</RouterLink>
                <RouterLink class="navbar-item" to="/sessions" v-text="t('sessions')"></RouterLink>
                <RouterLink class="navbar-item" to="/about" v-text="t('about')"></RouterLink>
                <div class="navbar-item">
                    <div class="buttons has-addons">
                        <button @click="selectedLang = 'nl'" :class="['button is-small', { 'is-ghost': selectedLang === 'nl' }]">NL</button>
                        <button @click="selectedLang = 'en'" :class="['button is-small', { 'is-ghost': selectedLang === 'en' }]">EN</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <RouterView />
    </div>
    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile is-multiline">
                <div class="column is-half-mobile is-offset-2-desktop is-3-desktop">
                    <h2><strong>Contact</strong></h2>
                    <ul>
                        <li>
                            <span class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                </span>
                                <span>+31 6 11 80 33 43</span>
                            </span>
                        </li>
                        <li>
                            <span class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-regular fa-envelope" />
                                </span>
                                <span>praktijk@sandra-postma.nl</span>
                            </span>
                        </li>
                        <li><br></li>
                        <li>
                            <span class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>Sandra Postma<br>Aggemastate 224<br>Leeuwarden</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="column is-half-mobile is-3-desktop">
                    <h2><strong v-text="t('linkAndLegal')"></strong></h2>
                    <ul>
                        <li><a href="./static/privacy_beleid.pdf" target="_blank" rel="noopener noreferrer">Privacy Beleid</a></li>
                        <li><a href="./static/voorwaarden.pdf" target="_blank" rel="noopener noreferrer">Algemene Voorwaarden</a></li>
                        <li><a href="./static/document_vergoedingen_2025.pdf" target="_blank" rel="noopener noreferrer">Vergoedingen Zorgverzekeraars 2025</a></li>
                        <li><br></li>
                        <li>KvK-nummer: 71289232</li>
                        <li>AGB-code praktijk: 90093781</li>
                        <li>AGB zorgverlener: 90117815</li>
                    </ul>
                </div>
                <div class="column is-full-mobile is-2-desktop">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-half-mobile is-full-tablet">
                            <figure>
                                <a href="https://www.vit-therapeuten.nl/" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/logo_vit.webp" alt="Sandra_Postma_vit">
                                </a>
                            </figure>
                        </div>
                        <div class="column is-half-mobile is-full-tablet">
                            <figure>
                                <a href="https://rbcz.nu/" target="_blank" rel="noopener noreferrer">
                                    <img src="@/assets/images/logo_rbcz.webp" alt="Sandra_Postma_rbcz">
                                </a>
                            </figure>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="has-text-centered pt-6">
				<p class="has-text-grey">Sandra Postma <font-awesome-icon icon="fa-regular fa-copyright" /> 2025</p>
				<p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank"><span v-text="t('madeBy')"></span> kotnik.si</a></i></p>
			</div>
        </div>
    </footer>
</template>

<script>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';

export default {
  	name: 'App',
    setup() {
        const { t, locale } = useI18n()
        const route = useRoute();

        return { t, locale, route }
    },
    data() {
            return {
                isMenuActive: false,
            }
        },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        }
    },
    // Test
    computed: {
        selectedLang: {
            get() {
                return this.locale;
            },
            set(lang) {
                this.locale = lang;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-end .navbar-item.router-link-exact-active {
        /* color: red; */
        background-color: $color-orange-2;
    }

    footer img {
        width: 90%;
    }
</style>
