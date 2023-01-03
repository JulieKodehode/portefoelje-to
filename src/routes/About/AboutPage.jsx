// Styles
import styles from "./layout.module.css";

const AboutPage = () => {
	return (
		<main className={styles.aboutMain}>
			<section className={styles.aboutSection}>
				<h3 className={styles.aboutTitle}>Mitt navn er Julie</h3>
				<p>
					{/* Pitch fra en 21st time */}
					Jeg går på kurs hos Kodehode. Programmering for meg er kreativitet, problemløsning og en evig
					utvikling. Frontend er fascinerende. Det er visuelt tilfredsstillende, og viser kun en front
					for noe mye større bak. Jeg liker å game såkalte RPG på PC, men har også en månedlig
					sammenkomst med venner hvor vi spiller Dungeons and Dragons. <br /> <br />
					Jeg har også en stor forkjærlighet for The Elder Scrolls spillserien, og har fullført
					hovedhistorien i Skyrim mer enn en håndfull ganger med like mye entusiasme hver gang. Jeg liker
					fantasybøker med mytiske kreasjoner, krig og udødelig kjærlighet, og har en dedikert Narnia
					tatovering.
				</p>
			</section>

			<section className={styles.aboutSkills}>
				<h3 className={styles.aboutTitle}>Mine ferdigheter</h3>
				<table>
					{/* This gotta change somehow */}
					<tbody>
						<tr>
							<td>HTML</td>
							<td>⭐⭐⭐⭐</td>
						</tr>
						<tr>
							<td>CSS</td>
							<td>⭐⭐⭐</td>
						</tr>
						<tr>
							<td>JS</td>
							<td>⭐⭐</td>
						</tr>
						<tr>
							<td>REACT</td>
							<td>⭐⭐</td>
						</tr>
						<tr>
							<td>FIGMA</td>
							<td>⭐⭐⭐</td>
						</tr>
						<tr>
							<td>GITHUB</td>
							<td>⭐⭐⭐⭐</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
};

export default AboutPage;
