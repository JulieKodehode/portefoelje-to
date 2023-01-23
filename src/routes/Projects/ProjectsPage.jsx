// Styles
import styles from "./layout.module.css";

// Assets
import Countdown from "../../assets/Projects/nedtellingTilJul.png";
import AdviceGeneratorApp from "../../assets/Projects/adviceGeneratorApp.png";

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>

			<section className={styles.projectGrid}>
				<div>
					<p className={styles.projectName}>Nedtelling til jul</p>
					<img src={Countdown} alt="a webpage counting down to christmas" />
					<section className={styles.photoText}>
						<a href="https://juliekodehode.github.io/countdown/" target="_blank" rel="noreferrer">
							page
						</a>
						<a href="https://github.com/JulieKodehode/countdown" target="_blank" rel="noreferrer">
							code
						</a>
					</section>
				</div>
				<div>
					<p className={styles.projectName}>Advice generator</p>
					<img src={AdviceGeneratorApp} alt="a webpage generating advices" />
					<section className={styles.photoText}>
						<a
							href="https://juliekodehode.github.io/advicegeneratorapp/"
							target="_blank"
							rel="noreferrer">
							page
						</a>
						<a
							href="https://github.com/JulieKodehode/advicegeneratorapp"
							target="_blank"
							rel="noreferrer">
							code
						</a>
					</section>
				</div>
				<div>
					<p className={styles.projectName}>Prosjekt C</p>
					{/* <img src={} alt="" /> */}
					<section className={styles.photoText}>
						<a href="#home">page</a>
						<a href="#home">code</a>
					</section>
				</div>
			</section>
		</main>
	);
};

export default ProjectPage;
