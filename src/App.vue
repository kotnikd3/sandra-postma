<template>
    <div>
		<!-- Tabs: navbar -->
		<div class="tabs is-right is-fixed-top" id="home">
			<ul>
				<li class="is-active" @click="scrollTo('home')"><a v-html="home[language]"></a></li>
				<li @click="scrollTo('about')"><a v-html="about[language]"></a></li>
				<li @click="scrollTo('sessions')"><a v-html="sessions[language]"></a></li>
				<li @click="scrollTo('contact')"><a v-html="contact[language]"></a></li>
			</ul>
		</div>
		<!-- Tabs: language buttons -->
		<div class="tabs is-right is-toggle">
			<ul>
				<li @click="toggleClass('nl')" :class="[{ 'is-active' : language == 'nl' }]"><a>NL</a></li>
				<li @click="toggleClass('en')" :class="[{ 'is-active' : language == 'en' }]"><a>EN</a></li>
			</ul>
		</div>
		<!-- Home -->
		<section class="section">
			<div class="container">
				<div class="columns is-vcentered">
					<!-- Column -->
					<div class="column">
						<h1 class="title" v-html="homeTitle[language]"></h1>
						<h2 class="subtitle has-text-weight-bold" v-html="homeSubtitle[language]"></h2>
						<div class="content" v-html="homeContent[language]"></div>
						<h2 class="subtitle has-text-weight-bold" v-html="methodOneSubtitle[language]"></h2>
						<div class="content" v-html="methodOneContent[language]"></div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/river.jpg" alt="Sandra Postma">
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
						<img class="img-main" src="./assets/mist.jpg" alt="Sandra Postma">
					</div>
					<!-- Column -->
					<div class="column">
						<h2 class="subtitle has-text-weight-bold" v-html="methodTwoSubtitle[language]"></h2>
						<div class="content" v-html="methodTwoContent[language]"></div>
						<h2 class="subtitle has-text-weight-bold" v-html="methodThreeSubtitle[language]"></h2>
						<div class="content" v-html="methodThreeContent[language]"></div>
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
						<h4 class="title is-4" v-html="about[language]"></h4>
						<div class="content" v-html="aboutContent[language]"></div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/sandra.jpg" alt="Sandra Postma">
					</div>
				</div>
			</div>
		</section>
		<!-- Quote -->
		<section class="section">
			<div class="container is-size-3 has-text-centered">
				<div class="content has-text-green is-size-4 is-italic" v-html="quoteSmall[language]"></div>
			</div>
		</section>
		<!-- Sessions -->
		<section class="section" id="sessions">
			<div class="container">
				<h4 class="title is-4" v-html="sessions[language]"></h4>
				<div class="content" v-html="sessionsContent[language]"></div>
				<h2 class="subtitle has-text-weight-bold" v-html="costs[language]"></h2>
				<div class="content" v-html="costsContent[language]"></div>
			</div>
		</section>
		<!-- Contact -->
		<section class="section" id="contact">
			<div class="container">
                <h4 class="title is-4" v-html="contact[language]"></h4>
				<section class="section">
					<nav class="columns">
						<div class="column has-text-centered">
							<div>
								<span class="icon my-5">
									<font-awesome-icon :icon="['far', 'envelope']" size="2x"/>
								</span>
								<p class="subtitle">praktijk@sandra-postma.nl</p>
							</div>
						</div>
						<div class="column has-text-centered">
							<div>
								<span class="icon my-5">
									<font-awesome-icon :icon="['fas', 'map-marker-alt']" size="2x"/>
								</span>
								<p class="subtitle">Leeuwarden</p>
							</div>
						</div>
                        <div class="column has-text-centered">
                            <a href="./static/document_sblp.pdf" target="_blank">
                                <div>
                                    <span class="icon my-5">
                                        <font-awesome-icon :icon="['fas', 'file']" size="2x"/>
                                    </span>
                                    <p class="subtitle">Vergoedingen<br>Zorgverzekeraars<br>2024</p>
                                </div>
                            </a>
                        </div>
                        <div class="column has-text-centered">
                            <a href="./static/complaints_nl.pdf" target="_blank">
                                <div>
                                    <span class="icon my-5">
                                        <font-awesome-icon :icon="['fas', 'file']" size="2x"/>
                                    </span>
                                    <p class="subtitle">Klachtenregeling</p>
                                </div>
                            </a>
                        </div>
                        <div class="column has-text-centered">
                            <a href="./static/complaints_en.pdf" target="_blank">
                                <div>
                                    <span class="icon my-5">
                                        <font-awesome-icon :icon="['fas', 'file']" size="2x"/>
                                    </span>
                                    <p class="subtitle">Complaints<br>procedure</p>
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
							<a href="https://sblp.nl/" target="_blank">
								<img id="img_sblp" src="./assets/logo_sblp.png">
							</a>
						</figure>
					</div>
                    <!-- Column -->
					<div class="column has-text-centered">
                        <ul>
                            <li>KvK-nummer: 71289232</li>
                            <li>SBLP: 06119121</li>
                            <li>AGB-code praktijk 90093781</li>
                            <li>AGB zorgverlener 90117815</li>
                        </ul>
					</div>
					<!-- Column -->
					<div class="column has-text-centered">
						<figure>
							<a href="https://rbcz.nu/" target="_blank">
								<img id="img_rbcz" src="./assets/logo_rbcz.png">
							</a>
						</figure>
					</div>
				</div>
			</div>
			<div class="container has-text-centered pt-6">
				<p class="has-text-grey">Sandra Postma <font-awesome-icon :icon="['far', 'copyright']"/> 2025</p>
				<p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank"><span v-html="madeBy[language]"></span> kotnik.si</a></i></p>
			</div>
		</footer>
	</div>
</template>

<script>
import { translations } from './Translations.js';

export default {
  	name: 'App',
	data() {
		// Merge two dictionaries: Object.assign({}, a, b);
		return Object.assign({}, translations, {
			language: 'nl'
		});
	},
	methods: {
		toggleClass(_language) {
			this.language = _language;
		},
		scrollTo(id) {
			document.getElementById(id).scrollIntoView({
				behavior: "smooth"
			});
		}
	}
}
</script>