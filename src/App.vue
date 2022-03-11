<template>
    <div>
		<!-- Tabs: navbar -->
		<div class="tabs is-right is-fixed-top" id="home">
			<ul>
				<li class="is-active" @click="scrollTo('home')"><a v-html="home[language]"></a></li>
				<li @click="scrollTo('about')"><a v-html="about[language]"></a></li>
				<li @click="scrollTo('method')"><a v-html="method[language]"></a></li>
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
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/bridge.jpg" alt="Sandra Postma">
					</div>
				</div>
			</div>
		</section>
		<!-- About Sandra -->
		<section class="section" id="about">
			<div class="container">
				<div class="columns is-vcentered reverse-columns">
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img class="img-main" src="./assets/sandra.jpg" alt="Sandra Postma">
					</div>
					<!-- Column -->
					<div class="column">
						<h4 class="title is-4" v-html="about[language]"></h4>
						<div class="content" v-html="aboutContent[language]"></div>
						<h2 class="subtitle has-text-weight-bold" v-html="visionTitle[language]"></h2>
						<div class="content" v-html="visionContent[language]"></div>
				 	</div>
				</div>
			</div>
		</section>
		<!-- Method -->
		<section class="section" id="method">
			<div class="container">
				<h4 class="title is-4" v-html="method[language]"></h4>
				<h2 class="subtitle has-text-weight-bold" v-html="methodOneSubtitle[language]"></h2>
				<div class="content" v-html="methodOneContent[language]"></div>
				<h2 class="subtitle has-text-weight-bold" v-html="methodTwoSubtitle[language]"></h2>
				<div class="content" v-html="methodTwoContent[language]"></div>
				<h2 class="subtitle has-text-weight-bold" v-html="methodThreeSubtitle[language]"></h2>
				<div class="content" v-html="methodThreeContent[language]"></div>
			</div>
		</section>
		<!-- Quote -->
		<section class="section">
			<div class="container is-size-3 has-text-centered">
				<div class="content has-text-green" v-html="quoteBig[language]"></div>
				<div class="content is-size-4 is-italic" v-html="quoteSmall[language]"></div>
			</div>
		</section>
		<!-- Photos -->
		<section class="section">
			<div class="container">
				<div class="columns is-multiline is-mobile has-text-centered">
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_1.jpg" alt="Sandra Postma">
						</figure>
					</div>
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_2.jpg" alt="Sandra Postma">
						</figure>
					</div>
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_3.jpg" alt="Sandra Postma">
						</figure>
					</div>
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_4.jpg" alt="Sandra Postma">
						</figure>
					</div>
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_5.jpg" alt="Sandra Postma">
						</figure>
					</div>
					<div class="column is-one-third-mobile">
						<figure class="image is-128x128 is-inline-block">
							<img src="./assets/sandra_feel_6.jpg" alt="Sandra Postma">
						</figure>
					</div>
				</div>
			</div>
		</section>
		<!-- Sessions -->
		<section class="section" id="sessions">
			<div class="container">
				<h4 class="title is-4" v-html="sessions[language]"></h4>
				<div class="content" v-html="sessionsContent[language]"></div>
			</div>
		</section>
		<!-- Contact -->
		<section class="section" id="contact">
			<div class="container">
				<section class="section">
					<nav class="level">
						<div class="level-item has-text-centered">
							<div>
								<span class="icon my-5">
									<font-awesome-icon :icon="['fas', 'mobile-alt']" size="2x"/>
								</span>
								<p class="subtitle">+31 6 1180 3343</p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<span class="icon my-5">
									<font-awesome-icon :icon="['fas', 'map-marker-alt']" size="2x"/>
								</span>
								<p class="subtitle">Utrecht (Zuilen)</p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<span class="icon my-5">
									<font-awesome-icon :icon="['far', 'envelope']" size="2x"/>
								</span>
								<p class="subtitle">sandra@buitengewoon-mens.nl</p>
							</div>
						</div>
					</nav>
				</section>
			</div>
		</section>
		<!-- Footer -->
		<footer class="footer">
			<div class="container has-text-centered">
				<p class="has-text-grey">Sandra Postma <font-awesome-icon :icon="['far', 'copyright']" flip="horizontal"/> 2022</p>
				<p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank"><span v-html="madeBy[language]"></span> Denis Kotnik</a></i></p>
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