// Styles
import styles from "./layout.module.css";

// Assets
import portrait from "../../assets/portrett_portefoelje.JPG";

// Components
import ContactPage from "../../components/Contact/ContactPage";
import TitleName from "../../components/NameAnimation/NameAnimation";

const HomePage = () => {
	return (
		<main id="home" className={styles.homeMain}>
			<section className={styles.sectionLeft}>
				<img src={portrait} alt="Portrett" />
			</section>

			<section className={styles.sectionRight}>
				<TitleName />
				<h3 className={styles.titleSHeading}>Junior Fullstack-utvikler</h3>
				<ContactPage />
			</section>
		</main>
	);
};

export default HomePage;
