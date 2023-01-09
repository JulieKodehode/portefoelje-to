// Styles
import styles from "./layout.module.css";

// Assets
import portrait from "../../assets/portrett_portefoelje.JPG";

// Components
import ContactPage from "../../components/Contact/ContactPage";

const HomePage = () => {
	return (
		<main id="home" className={styles.homeMain}>
			<section className={styles.sectionLeft}>
				<img src={portrait} alt="Portrett" />
			</section>

			<section className={styles.sectionRight}>
				<h1 className={styles.titleHeading}>Julie Hauge</h1>
				<h3 className={styles.titleSHeading}>Frontend-utvikler</h3>
				<p>
					Jeg heter Julie, er 25 år og bor i Bergen. Begynte mitt kode eventyr Juni 2022, og begynte på
					KodeHode August 2022. Liker å lære nye ting og lærer nye ting fort. Frontend for meg er
					web-design, så jeg er spesielt interesert i å utvikle meg videre i CSS og design.
				</p>
				<ContactPage />
			</section>
		</main>
	);
};

export default HomePage;
