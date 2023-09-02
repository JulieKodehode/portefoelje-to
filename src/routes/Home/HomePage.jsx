// Styles
import "./styles.css";

// Assets
import portrait from "../../assets/new_portrait.jpg";

// Components
import ContactPage from "../../components/Contact/ContactPage";
import TitleName from "../../components/NameAnimation/NameAnimation";

const HomePage = () => {
	return (
		<main id="home" className="homeMain">
			<section className="sectionLeft">
				<img src={portrait} alt="Portrett av meg." />
			</section>
			<section className="sectionRight">
				<TitleName />
				<h3 className="titleSubHeading">
					Junior Fullstack-utvikler <span class="linebreak">&</span> Faglig veileder i webutvikling
				</h3>
				{/* <ContactPage /> */}
			</section>
			<section>
				<div>
					<a href="#navigation">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 1024 1024"
							height="2em"
							width="2em"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
						</svg>
					</a>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
