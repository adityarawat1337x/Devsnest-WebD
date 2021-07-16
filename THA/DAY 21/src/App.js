import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Button, FormControl, TextField, Box } from "@material-ui/core/";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
	const [state, setstate] = useState([
		{ key: nanoid(), name: "Pizza", calorie: "56" },
	]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const add = (data) => {
		console.log(data);
		let tmp = state;
		data.key = nanoid();
		tmp.push(data);

		setstate(tmp);
	};

	return (
		<>
			<FormControl
				onSubmit={handleSubmit(add)}
				style={{ display: "flex", flexDirection: "column", width: "400px" }}
				component="div"
				color="secondary"
			>
				<TextField
					label="Food item"
					autoFocus={true}
					type="text"
					color="primary"
					{...register("name")}
				/>
				<TextField
					label="Calories"
					type="number"
					color="secondary"
					{...register("calorie")}
				/>
				<Button
					onClick={handleSubmit(add)}
					type="submit"
					size="small"
					variant="contained"
					color="primary"
				>
					Add
				</Button>
			</FormControl>
			<Box>
				{state.map((data) => {
					return (
						<div key={data.key}>
							<div>Food item: {data.name}</div>
							<div>Calories: {data.calorie}</div>
						</div>
					);
				})}
			</Box>
		</>
	);
};

export default App;
