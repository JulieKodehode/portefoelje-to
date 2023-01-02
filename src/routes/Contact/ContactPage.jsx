// Styles
import styles from "./layout.module.css";

const ContactPage = () => {
	return (
		<main className={styles.contactMain}>
			<section className={styles.contactSection}>
				<h3>Kontakt meg</h3>
				<p>
					Jeg søker praksiskplass som frontend-utvikler så kontakt meg ved interesse og ta en titt på
					mitt arbeid frem til nå for et innblikk på mine ferdigheter.
				</p>
				<ul>
					<li>
						Github
						<br />
						<br />
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
							alt="github icon"
						/>
					</li>
					<li>
						Gmail
						<br />
						<br />
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/2213/2213470.png"
							alt="gmail icon"
						/>
					</li>
					<li>
						Linkedin
						<br />
						<br />
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"
							alt="linkedin icon"
						/>
					</li>
					<li>
						Instagram
						<br />
						<br />
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
							alt="instagram icon"
						/>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default ContactPage;
