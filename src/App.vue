<template>
    <div>
		<!-- Navbar -->
		<div class="tabs is-right is-fixed-top" id="home">
			<ul>
				<li :class="{'is-active' : navbarItem == 'home'}" @click="scrollTo('home')"><a>Home</a></li>
				<li :class="{'is-active' : navbarItem == 'over-mij'}" @click="scrollTo('over-mij')"><a>Over Mij</a></li>
				<li :class="{'is-active' : navbarItem == 'werkwijze'}" @click="scrollTo('werkwijze')"><a>Werkwijze</a></li>
				<li :class="{'is-active' : navbarItem == 'sessies'}" @click="scrollTo('sessies')"><a>Sessies</a></li>
				<li :class="{'is-active' : navbarItem == 'contact'}" @click="scrollTo('contact')"><a>Contact</a></li>
			</ul>
		</div>
		<!-- Home -->
		<section class="section">
			<div class="container">
				<div class="columns is-vcentered">
					<!-- Column -->
					<div class="column">
						<h1 class="title">Buitengewoon-Mens</h1>
						<h2 class="subtitle">Lichaamsgerichte psychotherapie</h2>
						<div class="content">
							<p>Ha! Mijn naam is Sandra en ik ben derdejaarsstudenteIntegrated Psychotherapy bij Bodymind Opleidingen. Ik geef onder supervisie van het opleidingsinstituut oefensessies lichaamsgerichte psychotherapie.</p>
							<p>Wil jij in beweging komen en ben je bereid tot zelfonderzoek?Wil je ontdekken wat jouw lichaam en je emoties je vertellen? Lichaamsgerichte psychotherapie biedt jou hiertoe een ingang en je bentwelkom bij buitengewoon-mens. De potentiële winst:</p>
							<ul>
								<li>je voelt je blijer met jezelf</li>
								<li>je ervaart het leven voller</li>
								<li>je bent meer ontspannen</li>
								<li>je voelt je creatiever, speelser en hebt meer plezier</li>
								<li>je krijgt meer zicht en doel op wie jij bent en wat jij belangrijk vindt in het leven</li>
								<li>je relaties verbeteren en verdiepen.</li>
							</ul>
						</div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img src="./assets/bridge.jpg" alt="Sandra Postma">
					</div>
				</div>
			</div>
		</section>
		<!-- Over mij -->
		<section class="section" id="over-mij">
			<div class="container">
				<div class="columns is-vcentered reverse-columns">
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img src="./assets/sandra.jpg" alt="Sandra Postma">
					</div>
					<!-- Column -->
					<div class="column">
						<h4 class="title is-4">Over Mij</h4>
						<div class="content">
							<p>Ik ben in 2015 afgestudeerd als antropoloog en de mens in hoe hij of zij denkt, voelt en doet als individu of groep heeft mij altijd gefascineerd. Ik geloof dat ieder mens bijzonder en uniek is en dat we daarnaast allemaal dealen met varianten van dezelfde issues. Mens zijn gaat er voor mij over dat alles er mag zijn: van verdriet, boosheid, angst tot speelsheid, blijdschap en vreugde én om daarbij de pijn en het ongemak te ontvangen over dat het leven niet altijd is en gaat zo als we willen. De uitdaging is om alle delen van onszelf een plek te geven en om ze samen te laten werken voor een leven dat ons vervult.</p>
							<p>Mijn leven kenmerkt zich door zoeken. Inmiddels weet ik heel wat over mijzelf, weet ik sommige dingen een beetje en zijn andere zaken nog onbekend. Dit ‘nietweten’ is een spannend gebied en vraagt om controle los te laten en vertrouwen te hebben. Ik navigeer nu met focus en met ruimte voor verandering en verassingen. Om volop in het leven aanwezig te kunnen zijn heb ik ontdekt dat het belangrijkste voor mij is om thuis te zijn bij mezelf, verbonden te zijn met mijn lichaam, mijn emoties te omarmen en een zinvol leven te leiden. Dit geeft mij de basis om de ander te ontmoeten en in de wereld te zijn.</p>
						</div>
				 	</div>
				</div>
			</div>
		</section>
		<!-- Werkwijze -->
		<section class="section" id="werkwijze">
			<div class="container">
				<h4 class="title is-4">Werkwijze</h4>
				<h2 class="subtitle">Over lichaamsgerichte psychotherapie</h2>
				<div class="content">
					<p>Praten is een belangrijke manier om woorden te geven aan gedachten of gevoelens en begrip te krijgen. Praten kan ook een manier zijn van het hoofd om niet te hoeven voelen wat er eigenlijk speelt. Veel mensen vinden emoties zoals verdriet, angst of boosheid zijn lastiger om te ervaren en anderzijds kan het zo zijn dat iemand zijn blijdschap juist inhoudt en niet in contact kan brengen. Het is belangrijk om expressie te geven aan wat er jou als mens leeft, want anders stagneert je energie, word je ongelukkig en ontwikkel je allerlei (lichamelijke) klachten.</p>
					<p>Het lichaam biedt een ingang naar jouw binnenwereld. Lichaamssignalen zoals de ademhaling, de hartslag of fysieke sensaties geven informatie over hoe het met je is. Door je bewust te worden van deze signalen kan je jezelf leren kennen in wat niet fijn is en waar je juist wel blij van wordt. Je leert hier uitdrukking aan te geven en brengt dit in contact. Zo kan je beter voor jezelf zorgen, worden je relaties waardevoller en je leven prettiger.</p>
					<p>Integrated psychotherapie is de overkoepelende naam van de opleiding die ik volg. Het is een holistische vorm van werken waarin zowel het lichaam als de geest een rol spelen. Ik maak gebruik van verschillende lichaamsgerichte methodes, zoals bio-energetica, karakteranalyse, bodydrama en ademwerk. In een sessie staat de lichamelijke ervaring centraal en wordt er gesproken om begrip en duiding te geven aan de ervaring.</p>
				</div>
			</div>
		</section>
		<!-- Photos -->
		<section class="section">
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
		</section>
		<!-- Sessies -->
		<section class="section" id="sessies">
			<div class="container">
				<h4 class="title is-4">Sessies</h4>
				<div class="content">
					<p>Ik geef onder supervisie van BodyMind sessies in lichaamsgerichte psychotherapie. Een sessie duurt 60 tot 75 minuten en bied ik aan tegen gereduceerd tarief omdat ik in opleiding ben. Een sessie kost €25. De sessies vinden plaats in Utrecht (Zuilen).</p>
					<p>Je bent welkom voor een vrijblijvend intakegesprek om te kijken wat sessies voor jou kunnen betekenen of wat jouw doelstelling zou kunnen zijn. Een intakegesprek is veelal via (video)bellen.</p>
					<p>Voel je vrij om contact met me op te nemen als je vragen hebt of informatie wil. Via e-mail ben ik het beste bereikbaar.</p>
					<p><i>Op dit moment werk ik niet met mensen jonger dan 21 jaar of mensen met contra-indicaties. Ik kan je dan doorverwijzen naar een ervaren therapeut.</i></p>
				</div>
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
								<p class="subtitle">sandrapostma91@hotmail.com</p>
							</div>
						</div>
					</nav>
				</section>
			</div>
		</section>
		<!-- Footer -->
		<footer class="footer">
			<div class="container has-text-centered">
				<p class="has-text-grey">Sandra Postma <font-awesome-icon :icon="['far', 'copyright']" flip="horizontal"/> 2021</p>
				<p style="font-size: x-small;"><i><a class="has-text-grey" href="https://www.kotnik.si" target="_blank">Gemaakt door Denis Kotnik</a></i></p>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
  	name: 'App',
	data() {
		return {
			navbarItem: 'home'
		}
	},
	methods: {
		scrollTo(id) {
			this.navbarItem = id;
			document.getElementById(id).scrollIntoView({
				behavior: "smooth"
			});
		}
	}
}
</script>
