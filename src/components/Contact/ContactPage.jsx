// Styles
import styles from "./layout.module.css";

const ContactPage = () => {
	return (
		<section className={styles.contactMain}>
			<section className={styles.contactSection}>
				{/* <p className={styles.contactTitle}>Kontakt</p> */}
				<p>
					Jeg søker praksiskplass som frontend-utvikler så kontakt meg ved interesse og ta en titt på
					mitt arbeid frem til nå for et innblikk på mine ferdigheter.
				</p>
				<ul>
					<li>
						<a href="https://github.com/JulieKodehode">
							<img
								className={styles.contactIcons}
								src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
								alt="github icon"
							/>
						</a>
					</li>
					<li>
						<a href="https://mail.google.com/">
							<img
								className={styles.contactIcons}
								src="https://cdn-icons-png.flaticon.com/512/2213/2213470.png"
								alt="gmail icon"
							/>
						</a>
					</li>
					<li>
						<a href="https://discord.com/users/Julie.kodehode#4768">
							<img
								className={styles.contactIcons}
								src="https://cdn-icons-png.flaticon.com/512/4945/4945914.png"
								alt="discord icon"
							/>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/julieisobelle/">
							<img
								className={styles.contactIcons}
								src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"
								alt="instagram icon"
							/>
						</a>
					</li>
				</ul>
			</section>
		</section>
	);
};

export default ContactPage;
