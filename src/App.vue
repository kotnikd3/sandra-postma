<template>
    <div>
		<!-- Tabs: navbar -->
		<div class="tabs is-right is-fixed-top" id="home">
			<ul>
				<li class="is-active"><a v-html="t('home')" href="#home"></a></li>
				<li><a v-text="t('about')" href="#about"></a></li>
				<li><a v-text="t('sessions')" href="#sessions"></a></li>
				<li><a v-text="t('contact')" href="#contact"></a></li>
			</ul>
		</div>
		<!-- Tabs: language buttons -->
		<div class="buttons has-addons is-right">
            <button @click="selectedLang = 'nl'" :class="['button', { 'is-ghost': selectedLang === 'nl' }]">NL</button>
            <button @click="selectedLang = 'en'" :class="['button', { 'is-ghost': selectedLang === 'en' }]">EN</button>
        </div>
		<!-- Home -->
		<section class="section">
			<div class="container">
				<div class="columns is-vcentered">
					<!-- Column -->
					<div class="column">
						<h1 class="title" v-text="t('homeTitle')"></h1>
						<h2 class="subtitle has-text-weight-bold" v-text="t('homeSubtitle')"></h2>
						<div class="content" v-html="t('homeContent')"></div>
						<h2 class="subtitle has-text-weight-bold" v-html="t('methodOneSubtitle')"></h2>
						<div class="content" v-html="t('methodOneContent')"></div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/river.webp" alt="Sandra_Postma_river">
					</div>
				</div>
			</div>
		</section>
		<!-- Home -->
		<section class="section">
			<div class="container">
				<div class="columns is-vcentered reverse-columns">
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/mist.webp" alt="Sandra_Postma_must">
					</div>
					<!-- Column -->
					<div class="column">
						<h2 class="subtitle has-text-weight-bold" v-html="t('methodTwoSubtitle')"></h2>
						<div class="content" v-html="t('methodTwoContent')"></div>
						<h2 class="subtitle has-text-weight-bold" v-html="t('methodThreeSubtitle')"></h2>
						<div class="content" v-html="t('methodThreeContent')"></div>
				 	</div>
				</div>
			</div>
		</section>
		<!-- About Sandra -->
		<section class="section" id="about">
			<div class="container">
				<div class="columns is-vcentered">
					<!-- Column -->
					<div class="column">
						<h4 class="title is-4" v-html="t('about')"></h4>
						<div class="content" v-html="t('aboutContent')"></div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/sandra.webp" alt="Sandra_Postma">
					</div>
				</div>
			</div>
		</section>
		<!-- Quote -->
		<section class="section">
			<div class="container is-size-3 has-text-centered">
				<div class="content has-text-green is-size-4 is-italic" v-html="t('quoteSmall')"></div>
			</div>
		</section>
		<!-- Sessions -->
		<section class="section" id="sessions">
			<div class="container">
				<h4 class="title is-4" v-html="t('sessions')"></h4>
				<div class="content" v-html="t('sessionsContent', {email: 'praktijk@sandra-postma.nl'})"></div>
				<h2 class="subtitle has-text-weight-bold" v-html="t('costs')"></h2>
				<div class="content" v-html="t('costsContent')"></div>
                <h2 class="subtitle has-text-weight-bold" v-html="t('complaints')"></h2>
				<div class="content" v-html="t('complaintsContent', {url_1: 'https://www.vit-therapeuten.nl/cli%C3%ABnten/niet-tevreden', url_2: 'https://www.scag.nl/'})"></div>
			</div>
		</section>
		<!-- Contact -->
		<section class="section" id="contact">
			<div class="container">
                <h4 class="title is-4" v-html="t('contact')"></h4>
				<section class="section">
					<nav class="columns">
						<div class="column has-text-centered">
							<div>
								<span class="icon my-5">
                                    <font-awesome-icon icon="fa-regular fa-envelope" size="2x"/>
								</span>
								<p class="subtitle">praktijk@sandra-postma.nl</p>
							</div>
						</div>
						<div class="column has-text-centered">
							<div>
								<span class="icon my-5">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" size="2x"/>
								</span>
								<p class="subtitle">Aggemastate 224<br>8926 PH Leeuwarden</p>
							</div>
						</div>
                        <div class="column has-text-centered">
                            <a href="./static/document_vergoedingen_2025.pdf" target="_blank">
                                <div>
                                    <span class="icon my-5">
                                        <font-awesome-icon icon="fa-regular fa-file" size="2x"/>
                                    </span>
                                    <p class="subtitle">Vergoedingen<br>Zorgverzekeraars<br>2025</p>
                                </div>
                            </a>
                        </div>
					</nav>
				</section>
                <hr class="line">
			</div>
		</section>
		<!-- Footer -->
		<footer class="footer">
			<div class="container pb-6">
				<div class="columns">
					<!-- Column -->
					<div class="column has-text-centered">
						<figure>
							<a href="https://www.vit-therapeuten.nl/" target="_blank">
								<img id="logo_vit" src="./assets/logo_vit.webp" alt="Sandra_Postma_vit">
							</a>
						</figure>
					</div>
                    <!-- Column -->
					<div class="column has-text-centered">
                        <ul>
                            <li>KvK-nummer: 71289232</li>
                            <li>AGB-code praktijk 90093781</li>
                            <li>AGB zorgverlener 90117815</li>
                        </ul>
					</div>
					<!-- Column -->
					<div class="column has-text-centered">
						<figure>
							<a href="https://rbcz.nu/" target="_blank">
								<img id="img_rbcz" src="./assets/logo_rbcz.webp" alt="Sandra_Postma_rbcz">
							</a>
						</figure>
					</div>
				</div>
			</div>
			<div class="container has-text-centered pt-6">
				<p class="has-text-grey">Sandra Postma <font-awesome-icon icon="fa-regular fa-copyright" /> 2025</p>
				<p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank"><span v-html="t('madeBy')"></span> kotnik.si</a></i></p>
			</div>
		</footer>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  	name: 'App',
    setup() {
        const { t, locale } = useI18n()
        return { t, locale }
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
