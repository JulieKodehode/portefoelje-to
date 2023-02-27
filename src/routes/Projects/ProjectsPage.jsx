// Styles
import styles from "./layout.module.css";

// Assets
import Countdown from "../../assets/Projects/nedtellingTilJul.png";
import AdviceGeneratorApp from "../../assets/Projects/adviceGeneratorApp.png";
import Pokedex from "../../assets/Projects/pokedex.png";

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>
			<section className={styles.projectGrid}>
				{/* Project 1 */}
				<div className={styles.projectCard}>
					<p className={styles.projectName}>Nedtelling til jul</p>
					<img src={Countdown} alt="a webpage counting down to christmas" />
					{/* <p>
						En simpel nettside som viser nedtelling til jul, og har en lokal lagring for å skrive en
						hilsen
					</p> */}
					<a
						className={styles.linkStyle}
						href="https://juliekodehode.github.io/countdown/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className={styles.linkStyle}
						href="https://github.com/JulieKodehode/countdown"
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div>

				{/* Project 2 */}
				<div className={styles.projectCard}>
					<p className={styles.projectName}>Advice generator</p>
					<img src={AdviceGeneratorApp} alt="a webpage generating advices" />
					{/* <p>En simpel nettside som genererer råd og visdomsord ved trykk på en knapp</p> */}
					<a
						className={styles.linkStyle}
						href="https://juliekodehode.github.io/advicegeneratorapp/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className={styles.linkStyle}
						href="https://github.com/JulieKodehode/advicegeneratorapp"
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div>

				{/* Project 3 */}
				{/* <div className={styles.projectCard}>
					<p className={styles.projectName}>Pokedex</p>
					<img src={Pokedex} alt="a webpage showing pokemons" />
					<a
						className={styles.linkStyle}
						href=""
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className={styles.linkStyle}
						href=""
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div> */}
			</section>
		</main>
	);
};

export default ProjectPage;
