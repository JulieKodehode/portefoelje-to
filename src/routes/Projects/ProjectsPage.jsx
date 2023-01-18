// Styles
import styles from "./layout.module.css";

// Assets
import Countdown from "../../assets/Projects/countdownProjectPhoto.png";
import Skyrim from "../../assets/Projects/skyrimProjectPhoto.png";
import Parallax from "../../assets/Projects/parallaxProjectPhoto.png";

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3>Mine prosjekter</h3>
				<p>Et lite kollektiv av mine prosjekter fra de siste 6 månedene på KodeHode</p>
			</section>

			<section className={styles.projectGrid}>
				<div>
					<p>Prosjekt A</p>
					<img src={Countdown} alt="photo of a website" />
					{/* https://juliekodehode.github.io/countdown/ */}
				</div>
				<div>
					<p>Prosjekt B</p>
					<img src={Skyrim} alt="photo of a website" />
					{/* https://juliekodehode.github.io/moduleA_skyrimProject/ */}
				</div>
				<div>
					<p>Prosjekt C</p>
					<img src={Parallax} alt="photo of a website" />
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
