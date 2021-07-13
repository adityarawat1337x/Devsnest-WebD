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
				<Card name="Burger" calorie="64" />
				<Card name="Coke" calorie="200" />
				<Card name="Brownie" calorie="353" />
				<Card name="Fried Rice" calorie="35" />
				<Card name="Dumplings" calorie="34" />
			</div>
		</>
	);
};

export default App;
