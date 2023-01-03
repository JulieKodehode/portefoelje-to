// Styles
import styles from "./layout.module.css";

const ContactPage = () => {
	return (
		<section className={styles.contactMain}>
			<section className={styles.contactSection}>
				<h3 className={styles.contactTitle}>Kontakt</h3>
				<p className={styles.ContactText}>
					Jeg søker praksiskplass som frontend-utvikler så kontakt meg ved interesse og ta en titt på
					mitt arbeid frem til nå for et innblikk på mine ferdigheter.
				</p>
				<ul>
					<li>
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
							alt="github icon"
						/>
					</li>
					<li>
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/2213/2213470.png"
							alt="gmail icon"
						/>
					</li>
					<li>
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"
							alt="linkedin icon"
						/>
					</li>
					<li>
						<img
							className={styles.contactIcons}
							src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
							alt="instagram icon"
						/>
					</li>
				</ul>
			</section>
		</section>
	);
};

export default ContactPage;
