import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState();

	const fetchData = async () => {
		let db = await fetch("https://meme-api.herokuapp.com/gimme");
		db = await db.json();
    setData(db);
    console.log(db);
	};

	useEffect(fetchData, []);

	return (
		<>
			<div className="cont">
				{data ? <img src={data.url} /> : ""}
				{data ? <h3>{data.title}</h3> : ""}
				{data ? <h4>-by {data.author}</h4> : ""}
			</div>
			<button onClick={() => fetchData()}>Next</button>
		</>
	);
};

export default App;
