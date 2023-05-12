// Styles
import "./styles.css"

// Assets
import Countdown from "../../assets/Projects/nedtellingTilJul.png";
import AdviceGeneratorApp from "../../assets/Projects/adviceGeneratorApp.png";
import StatsPreviewCard from "../../assets/Projects/StatsPreviewCard.png";

const ProjectPage = () => {
	return (
		<main id="projects" className="projectMain">
			<section>
				<h3 className="projectTitle">Mine prosjekter</h3>
				<p>En liten samling av mine prosjekter fra de siste seks månedene på KodeHode</p>
			</section>
			<section className="projectGrid">
				{/* Project 1 */}
				<div className="projectCardAlgae">
					<p className="projectName">Nedtelling til jul</p>
					<img src={Countdown} alt="a webpage counting down to christmas" />
					{/* <p>Description</p> */}
					<a
						className="linkStyle"
						href="https://juliekodehode.github.io/countdown/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className="linkStyle"
						href="https://github.com/JulieKodehode/countdown"
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div>

				{/* Project 2 */}
				<div className="projectCardYellow">
					<p className="projectName">Advice generator</p>
					<img src={AdviceGeneratorApp} alt="a webpage generating advices" />
					{/* <p>Description</p> */}
					<a
						className="linkStyle"
						href="https://juliekodehode.github.io/advicegeneratorapp/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className="linkStyle"
						href="https://github.com/JulieKodehode/advicegeneratorapp"
						target="_blank"
						rel="noreferrer">
						kode
					</a>
				</div>

				{/* Project 3 */}
				<div className="projectCardOrange">
					<p className="projectName">Stats Preview Card</p>
					<img src={StatsPreviewCard} alt="" />
					{/* <p>Description</p> */}
					<a
						className="linkStyle"
						href="https://juliekodehode.github.io/statspreviewcard/"
						target="_blank"
						rel="noreferrer">
						nettside
					</a>
					<a
						className="linkStyle"
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
