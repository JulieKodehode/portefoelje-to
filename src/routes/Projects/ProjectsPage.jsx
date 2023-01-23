// Styles
import styles from "./layout.module.css";

// Assets

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>

			<section className={styles.projectGrid}>
				<div>
					<p className={styles.projectName}>Prosjekt A</p>
					{/* <img src={} alt="" /> */}
					<p className={styles.photoText}>
						This project is xyz. <a href="#">page</a> and <a href="#">code</a>
					</p>
					{/* https://juliekodehode.github.io/countdown/ */}
				</div>
				<div>
					<p className={styles.projectName}>Prosjekt B</p>
					{/* <img src={} alt="" /> */}
					<p className={styles.photoText}>
						This project is xyz. <a href="#">page</a> and <a href="#">code</a>
					</p>
					{/* https://juliekodehode.github.io/moduleA_skyrimProject/ */}
				</div>
				<div>
					<p className={styles.projectName}>Prosjekt C</p>
					{/* <img src={} alt="" /> */}
					<p className={styles.photoText}>
						This project is xyz. <a href="#">page</a> and <a href="#">code</a>
					</p>
					{/* https://juliekodehode.github.io/moduleA_parallaxWebpage/ */}
				</div>

				{/* Carousel? */}
				{/* <div>
					<p>Prosjekt D</p>
				</div>
				<div>
					<p>Prosjekt E</p>
				</div>
				<div>
					<p>Prosjekt F</p>
				</div> */}
			</section>
		</main>
	);
};

export default ProjectPage;
