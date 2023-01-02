// Styles
import styles from "./layout.module.css";

const ProjectPage = () => {
	return (
		<main className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>

			<section className={styles.projectGrid}>
				<div>
					<p>Prosjekt A</p>
				</div>
				<div>
					<p>Prosjekt B</p>
				</div>
				<div>
					<p>Prosjekt C</p>
				</div>
				<div>
					<p>Prosjekt D</p>
				</div>
				<div>
					<p>Prosjekt E</p>
				</div>
				<div>
					<p>Prosjekt F</p>
				</div>
			</section>
		</main>
	);
};

export default ProjectPage;
