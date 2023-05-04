// Libraries
// import { NavLink } from "react-router-dom";

// Styles
import styles from "./layout.module.css";

const NavBar = () => {
	return (
		<header className={styles.navHeader}>
			<h1>JH</h1>
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
