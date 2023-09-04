// Styles
import "./styles.css";

const ContactPage = () => {
	return (
		<section className="contactMain">
			<section className="contactSection">
				{/* <p className={styles.contactTitle}>Kontakt</p> */}
				{/* <p>
					Jeg søker praksiskplass som frontend-utvikler så kontakt meg ved interesse, og ta en titt på
					mitt arbeid frem til nå for et innblikk på mine ferdigheter.
				</p> */}

				<ul className="iconList">
					<div className="socialIcons">
						<li>
							<a href="https://github.com/JulieKodehode">
								<svg
									className="contactIcons"
									stroke="#f4a261"
									fill="#f4a261"
									stroke-width="0"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://mail.google.com/">
								<svg
									className="contactIcons"
									stroke="#f4a261"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://discord.com/users/Julie.kodehode#4768">
								<svg
									className="contactIcons"
									stroke="#f4a261"
									fill="#f4a261"
									stroke-width="0"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/julieisobelle/">
								<svg
									className="contactIcons"
									stroke="#f4a261"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									xmlns="http://www.w3.org/2000/svg">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							</a>
						</li>
					</div>

					{/* <div className={styles.cvIcon}>
						<li>
							<p>Last ned CV</p>
							<a href="#home">
								<img
									className={styles.contactIcons}
									src="https://cdn-icons-png.flaticon.com/512/942/942799.png"
									alt="cv icon"
								/>
							</a>
						</li>
					</div> */}
				</ul>
			</section>
		</section>
	);
};

export default ContactPage;
