// Libraries
// import { NavLink } from "react-router-dom";

// Styles
// import styles from "./layout.module.css";

const NavBar = () => {
	return (
		<header>
			<h1>JH</h1>
			<nav>
				<ul>
					<li>
						{/* <NavLink title="Link to HomePage" to="/"> */}
						Hjem
						{/* </NavLink> */}
					</li>
					<li>
						{/* <NavLink title="Link to AboutPage" to="/About"> */}
						Om meg
						{/* </NavLink> */}
					</li>
					<li>
						{/* <NavLink title="Link to ProjectPage" to="/Projects"> */}
						Prosjekter
						{/* </NavLink> */}
					</li>
					<li>
						{/* <NavLink title="Link to ContactPage" to="/Contact"> */}
						Kontakt
						{/* </NavLink> */}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
