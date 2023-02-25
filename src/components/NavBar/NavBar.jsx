// Libraries
// import { NavLink } from "react-router-dom";

// Styles
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import styles from "./layout.module.css";

const NavBar = () => {
	return (
		<header className={styles.navHeader}>
			<section className={styles.headerBar}>
				<h1>JH</h1>
				<LightDarkMode />
			</section>
			<nav>
				<ul className={styles.navUl}>
					<li>
						<a href="#home">Hjem</a>
					</li>
					<li>
						<a href="#about">Om meg</a>
					</li>
					<li>
						<a href="#projects">Prosjekter</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
