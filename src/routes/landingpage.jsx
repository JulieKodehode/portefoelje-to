// Libraries
// import { Outlet } from "react-router-dom";

// Styles
import "../styles/basic.css";
import "../styles/colors.css";
import "../styles/font.css";
import "../styles/space.css";
import "./layout.module.css";

// Components
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import HomePage from "./Home/HomePage";
import ProjectPage from "./Projects/ProjectsPage";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const LandingPage = () => {
	return (
		<>
			{/* <Outlet /> */}
			<NavBar />
			<HomePage />
			<AboutPage />
			<ProjectPage />
			<ContactPage />
			<Footer />
		</>
	);
};

export default LandingPage;
