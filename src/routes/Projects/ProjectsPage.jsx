// Styles
import styles from "./layout.module.css";

// Assets
import Countdown from "../../assets/Projects/nedtellingTilJul.png";
import AdviceGeneratorApp from "../../assets/Projects/adviceGeneratorApp.png";
import StatsPreviewCard from "../../assets/Projects/StatsPreviewCard.png";

const ProjectPage = () => {
	return (
		<main id="projects" className={styles.projectMain}>
			<section>
				<h3 className={styles.projectTitle}>Mine prosjekter</h3>
				<p>En liten samling av mine prosjekter fra de siste seks månedene på KodeHode</p>
			</section>
			<section className={styles.projectGrid}>
				{/* Project 1 */}
				<div className={styles.projectCardAlgae}>
					<p className={styles.projectName}>Nedtelling til jul</p>
					<img src={Countdown} alt="a webpage counting down to christmas" />
					{/* <p>Description</p> */}
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
				<div className={styles.projectCardYellow}>
					<p className={styles.projectName}>Advice generator</p>
					<img src={AdviceGeneratorApp} alt="a webpage generating advices" />
					{/* <p>Description</p> */}
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
				<div className={styles.projectCardOrange}>
					<p className={styles.projectName}>Stats Preview Card</p>
					<img src={StatsPreviewCard} alt="" />
					{/* <p>Description</p> */}
					<a
						className={styles.linkStyle}
						href="https://juliekodehode.github.io/statspreviewcard/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className={styles.linkStyle}
						href="https://github.com/JulieKodehode/statspreviewcard"
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div>
			</section>
		</main>
	);
};

export default ProjectPage;
