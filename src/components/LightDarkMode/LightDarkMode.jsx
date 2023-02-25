// Libraries
import React, { useState, useEffect } from "react";

// Styles
import "../LightDarkMode/LightDarkMode.css";

const LightDarkMode = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	// Toggle event that changes between light and dark mode
	const toggleTheme = () => {
		if (theme === "lightMode") {
			setTheme("darkMode");
		} else {
			setTheme("lightMode");
		}
	};

	// Local storage to save what color mode is selected
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	return (
		<div className={"toggleButton"}>
			<button onClick={toggleTheme}>Change Theme</button>
		</div>
	);
};

export default LightDarkMode;
