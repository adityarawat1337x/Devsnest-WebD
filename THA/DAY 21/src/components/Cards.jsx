import React from "react";
import useStyles from "../styles";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    CardContent,
} from "@material-ui/core/";


const Cards = ({ del, edit, state }) => {
    const classes = useStyles();

    return (
        <main className={classes.break}>
            {console.log("rendered card : ", state)}
            {state.map((data) => {
                return (
                    <Card key={data.key}>
                        <CardContent className={classes.card}>
                            <Typography variant="h6">Food item: {data.name}</Typography>
                            <Typography variant="h6">Calories: {data.calorie}</Typography>
                            <Button
                                onClick={() => del(data.key)}
                                size="small"
                                variant="contained"
                                className={classes.del}
                            >
                                Delete
                            </Button>
                            <Button
                                onClick={() => edit(data.key)}
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
        </div>
    );
};

export default Cards;
