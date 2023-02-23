// Styles
import styles from "./layout.module.css";

// Assets
import Countdown from "../../assets/Projects/nedtellingTilJul.png";
import AdviceGeneratorApp from "../../assets/Projects/adviceGeneratorApp.png";
import Carousel from "../../components/Carousel/Carosuel";

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>

			{/* <section className={styles.projectGrid}> */}
			<section className={styles.projectCarousel}>
				<button>Previous</button>
				<section className={styles.overflow}>
					<div className={styles.projectDisplay}>
						<p className={styles.projectTitle}>Nedtelling til jul</p>
						<div>{/* Carousel */}</div>
						<p>Beskrivelse xyz</p>
						<p className={styles.projectLinks}>
							<a href="" target="_blank" rel="noreferrer">
								Nettside
							</a>
							&
							<a href="" target="_blank" rel="noreferrer">
								Koden
							</a>
						</p>
					</div>

					<div className={styles.projectDisplay}>
						<p className={styles.projectTitle}>Nedtelling til jul</p>
						<div>{/* Carousel */}</div>
						<p>Beskrivelse xyz</p>
						<p className={styles.projectLinks}>
							<a href="" target="_blank" rel="noreferrer">
								Nettside
							</a>
							&
							<a href="" target="_blank" rel="noreferrer">
								Koden
							</a>
						</p>
					</div>

					<div className={styles.projectDisplay}>
						<p className={styles.projectTitle}>Nedtelling til jul</p>
						<div>{/* Carousel */}</div>
						<p>Beskrivelse xyz</p>
						<p className={styles.projectLinks}>
							<a href="" target="_blank" rel="noreferrer">
								Nettside
							</a>
							&
							<a href="" target="_blank" rel="noreferrer">
								Koden
							</a>
						</p>
					</div>
				</section>
				<button>Next</button>
			</section>
			<Carousel />
		</main>
	);
};

export default ProjectPage;
