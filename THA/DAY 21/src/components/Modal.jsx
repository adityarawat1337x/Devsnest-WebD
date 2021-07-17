import React from 'react'
import { useForm } from "react-hook-form";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    Dialog
} from "@material-ui/core/";


const Modal = ({ add, def, type, handleClose }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    console.log("this is def", def);

    if (!def[0]) return (<></>);
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={def[0]} >
            <FormControl
                style={{ display: "flex", flexDirection: "column", width: "400px" , padding:"20px"}}
                component="div"
                color="secondary"
            ><TextField
                    label="Food item"
                    autoFocus={true}
                    type="text"
                    color="primary"
                    defaultValue={def[2].name}
                    {...register("name")}
                />
                <TextField
                    label="Calories"
                    type="number"
                    color="secondary"
                    defaultValue={def[2].calorie}
                    {...register("calorie")}
                />
                <Button
                    onClick={handleSubmit((data) => add(data, def[2].key, def[1]))}
                    type="submit"
                    size="small"
                    variant="contained"
                    color="primary"
                >
                    {type}
                </Button></FormControl>
        </Dialog>
    )
}

export default Modal
