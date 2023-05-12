// Libraries

// Styles
import "../styles/basic.css";
import "../styles/colors.css";
import "../styles/font.css";
import "../styles/space.css";

// Components
import AboutPage from "./About/AboutPage";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Projects/ProjectsPage";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const LandingPage = () => {
	return (
		<>
			<NavBar />
			<HomePage />
			<AboutPage />
			<ProjectPage />
			<Footer />
		</>
	);
};

export default LandingPage;
