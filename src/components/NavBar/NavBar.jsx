// Styles
import "./styles.css";

const NavBar = () => {
	return (
		<header className="navHeader">
			<h1 className="logo">JH</h1>
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
		</header>
	);
};

export default NavBar;
