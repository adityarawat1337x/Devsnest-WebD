import React from "react";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    CardContent,
} from "@material-ui/core/";
import { useForm } from "react-hook-form";
import useStyles from "../styles";


const Form = ({ del, add, edit, state }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    return (
        <FormControl
            onSubmit={handleSubmit(add)}
            style={{ display: "flex", flexDirection: "column", width: "400px" }}
            component="div"
            color="secondary"
        >  {console.log("rendered form : ", state)}
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
    )
}

export default Form
