// Libraries
import React from "react";
import { useState } from "react";

// Styles
import "../NameAnimation/NameAnimation.css";

const TitleName = () => {
	const [isChange, setIsChange] = useState(true);

	// Function on what happens when onClick is triggered
	const NameAnimation = () => {
		console.log("I'm activated");
		setIsChange(!isChange);
	};

	return (
		<div>
			<h1 className={isChange ? "titleHeading" : "titleAnimation"}>
				Julie Hauge
				<button onClick={NameAnimation} className="suspiciousDot">
					.
				</button>
			</h1>
		</div>
	);
};

export default TitleName;
