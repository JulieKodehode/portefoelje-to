// Styles
import styles from "./layout.module.css";

// Assets
import portrait from "../../assets/portrett_portefoelje.JPG";

const HomePage = () => {
	return (
		<main className={styles.homeMain}>
			<section className={styles.sectionLeft}>
				<img src={portrait} alt="Portrett" />
			</section>

			<section className={styles.sectionRight}>
				<h1>Julie</h1>
				<h3>Frontend-utvikler</h3>
				<p>
					{/* Edit this (taken from github) */}
					Jeg heter Julie, er 25 år og bor i Bergen. Begynte mitt kode eventyr Juni 2022, og begynte på
					KodeHode August 2022. Liker å lære nye ting og lærer nye ting fort. Fritiden går til gaming,
					boklesing og koding.
				</p>
			</section>
		</main>
	);
};

export default HomePage;
