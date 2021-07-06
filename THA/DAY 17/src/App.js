import React from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
	return (
		<>
			<h1>Calorie Read Only</h1>
			<div
				className="cont"
				style={{ "overflow-y": "scroll", width: "600px", height: "400px" }}
			>
				<Card name="Pizza" calorie="56" />
				<Card name="Burger" calorie="56" />
				<Card name="Coke" calorie="56" />
				<Card name="Browne" calorie="56" />
				<Card name="Pizza" calorie="56" />
			</div>
		</>
	);
};

export default App;
