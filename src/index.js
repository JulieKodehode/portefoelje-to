// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Tests
import reportWebVitals from "./tests/reportWebVitals";

// Styles
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
