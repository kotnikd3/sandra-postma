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
						<h1 class="title">BUITENGEWOON-MENS</h1>
						<h2 class="subtitle">Lichaamsgerichte psychotherapie</h2>
						<div class="content">
							<p>Je bent bijzonder en uniek, en daarnaast ben je gewoon mens, net als anderen en deal je met varianten van dezelfde issues. Mens zijn gaat er voor mij over dat alles er mag zijn: van verdriet, boosheid, angst tot speelsheid, blijdschap en vreugde én om daarbij de pijn en het ongemak te ontvangen over dat het leven niet altijd is en gaat zo als we willen. De uitdaging is om alle delen van onszelf een plek te geven en om ze samen te laten werken voor een leven dat ons vervult. Daarvoor moeten we soms uit de comfortzone en hebben we soms hulp nodig</p>
							<p>Wil jij in beweging komen en op reis in jezelf? Meer in contact komen met je emoties? Ontdekken wie en waarvoor je hier bent? De volheid van het leven ervaren? Blijer en vrijer zijn met jezelf? Meer naar je lichaam luisteren? Dan kan lichaamsgerichte psychotherapie jou ondersteunen.</p>
						</div>
				 	</div>
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img src="./assets/sandra_4.jpg" style="width: 60%;" alt="Sandra Postma">
					</div>
				</div>
			</div>
		</section>
		<!-- Over mij -->
		<section class="section" id="over-mij">
			<div class="container">
				<div class="columns is-vcentered">
					<!-- Column -->
				 	<div class="column has-text-centered">
						<img src="./assets/sandra_2.jpg" alt="Sandra Postma">
					</div>
					<!-- Column -->
					<div class="column">
						<h4 class="title is-4">Over Mij</h4>
						<div class="content">
							<p>Mijn naam is Sandra en ik ben derdejaarsstudent Integrated Psychotherapy bij Bodymind Opleidingen. Ik geef onder supervisie van het opleidingsinstituut sessies lichaamsgerichte psychotherapie.</p>
							<p>Ik ben afgestudeerd als antropoloog en de mens in hoe hij of zij denkt, voelt en doet als individu of Groep heeft mij altijd gefascineerd. Ik heb veel reizen gemaakt, maar de reis in mijzelf vervult mij het meest en is eindeloos. Vier jaren geleden kwam ik voor het eerst in contact met lichaamswerk en volgde hierin allerlei trainingen bij de Omega Levensschool (Venwoude). Ik was erg onder de indruk van het werken met het lichaam en ik wist meteen dat ik lichaamsgericht therapeut wilde worden</p>
							<p>Om volop in het leven aanwezig te kunnen zijn heb ik ontdekt dat het belangrijkste voor mij is om thuis te zijn bij mezelf, verbonden te zijn met mijn lichaam, mijn emoties te omarmen en een zinvol leven te leiden. Dit geeft mij de basis om de ander te ontmoeten en in de wereld te zijn.</p>
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
					<p>Praten is een belangrijke manier om woorden te geven aan je gedachten of gevoelens en om te begrijpen. Maar, praten kan ook een manier zijn van het hoofd om niet te hoeven voelen. Het lichaam is een ingang naar je binnenwereld. Lichaamssignalen zoals de ademhaling, de hartslag of fysieke sensaties geven informatie over hoe het met je is. Door je bewust te worden van deze signalen kan je jezelf leren kennen in wat niet fijn is en waar je juist wel blij van wordt. Zo kan je beter voor jezelf zorgen en wordt je leven een stuk voller en mooier.</p>
					<p>Integrated psychotherapie is een holistische vorm van werken waarin zowel het lichaam als de geest een rol spelen. Ik werk met verschillende lichaamsgerichte methodes, zoals bio-energetica, karakteranalyse, bodydrama en ademwerk. De lichamelijke ervaring van sensaties en gewaarwordingen speelt een belangrijke rol in de sessies en daarnaast is er ruimte voor begrip en duiding.</p>
				</div>
			</div>
		</section>
		<!-- Sessies -->
		<section class="section" id="sessies">
			<div class="container">
				<h4 class="title is-4">Sessies</h4>
				<div class="content">
					<p>Ik geef onder supervisie van BodyMind sessies in lichaamsgerichte psychotherapie. Op deze manier krijg ik ervaring in het toepassen van de methodes en het werken met cliënten.</p>
					<p>Deze sessies duren één tot <b>anderhalf uur</b> en kosten <b>25 euro</b>. De sessies vinden plaats op de plek waar ik woon, dit is in Utrecht (Zuilen). Je bent welkomvoor een telefonisch/online of live kennismakingsgesprek van maximaal 20 minuten.</p>
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
								<p class="subtitle"><font-awesome-icon :icon="['fas', 'mobile-alt']"/></p>
								<p class="subtitle">+31 6 1180 3343</p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="subtitle"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/></p>
								<p class="subtitle">Utrecht (Zuilen)</p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="subtitle"><font-awesome-icon :icon="['far', 'envelope']"/></p>
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
