import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
	Button,
	FormControl,
	TextField,
	Card,
	Typography,
	CardContent,
} from "@material-ui/core/";
import { useForm } from "react-hook-form";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles();

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

	const del = (key) => {
		let tmp = state.filter((mt) => mt.key !== key)
		setstate(tmp);
	};

	const edit = (data) => {
		console.log(data);
		
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
			<main className={classes.break}>
				{state.map((data) => {
					return (
						<Card key={data.key} {...register("key")}>
							<CardContent className={classes.card}>
								<Typography variant="h6">Food item: {data.name}</Typography>
								<Typography variant="h6">Calories: {data.calorie}</Typography>
								<Button
									onClick={()=>del(data.key)}
									size="small"
									variant="contained"
									className={classes.del}
								>
									Delete
								</Button>
								<Button
									onClick={()=>edit(data.key)}
									size="small"
									variant="contained"
									className={classes.edit}
								>
									Edit
								</Button>
							</CardContent>
						</Card>
					);
				})}
			</main>
		</>
	);
};

export default App;
