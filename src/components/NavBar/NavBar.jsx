// Styles
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./styles.css";

const NavBar = () => {
	return (
		<header id="navigation" className="navHeader">
			<a href="#home" class="anchorOff">
				<h1 className="logo">JH</h1>
			</a>
			<nav>
				<ul className="navUl">
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
			<ThemeToggle />
		</header>
	);
};

export default NavBar;
