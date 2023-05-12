// Styles
import "./styles.css"

// Assets
import portrait from "../../assets/portrett_portefoelje.JPG";

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
				<h3 className="titleSubHeading">Junior Fullstack-utvikler</h3>
				<ContactPage />
			</section>
		</main>
	);
};

export default HomePage;
