// Styles
import styles from "./layout.module.css";

const AboutPage = () => {
	return (
		<main id="about" className={styles.aboutMain}>
			<section className={styles.aboutSection}>
				<h3 className={styles.aboutTitle}>Mitt navn er Julie</h3>
				{/* Introduction me */}
				<p>
					Jeg heter Julie, er 25 år og bor i Bergen. Begynte mitt kode eventyr Juni 2022, og begynte på
					KodeHode August 2022. Liker å lære nye ting og lærer nye ting fort. Frontend for meg er
					web-design, så jeg er spesielt interesert i å utvikle meg videre i CSS og design.
				</p>
				{/* Deeper in programming*/}
				<p>
					Frontend er fascinerende og for meg er det kreativitet, problemløsning og en evig utvikling.
					Det er visuelt tilfredsstillende, og viser kun en front for noe mye større bak. Jeg liker å
					jobbe med detaljer, og å gi detaljer en personelighet så det er mer enn ord på en side.
				</p>

				{/* Deeper in personal */}
				<p>
					Jeg liker å game såkalte RPG på PC, men har også en månedlig sammenkomst med venner hvor vi
					spiller Dungeons and Dragons. Jeg har også en stor forkjærlighet for The Elder Scrolls
					spillserien, og har fullført hovedhistorien i Skyrim mer enn en håndfull ganger med like mye
					entusiasme hver gang. Jeg liker fantasybøker med mytiske kreasjoner, krig og udødelig
					kjærlighet, og har en dedikert Narnia tatovering.
				</p>
			</section>

			<section className={styles.aboutSkills}>
				<h3 className={styles.aboutTitle}>Mine ferdigheter</h3>
				<img
					src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18200943.jpg"
					alt="tag-cloud-example"
				/>
			</section>
		</main>
	);
};

export default AboutPage;
