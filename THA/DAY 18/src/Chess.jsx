import React from "react";
import Box from "./Box";


const Chess = () => {

    let arr = [0, 1, 0, 1, 0, 1, 0, 1];
    let x = 0, y=1;

    return (
        <div className="Board">
            {arr.map((el, index) => { return <Box el={el} a={x} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={y} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={x} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={y} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={x} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={y} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={x} index={index} /> })}
            {arr.map((el, index) => { return <Box el={el} a={y} index={index} /> })}
        </div>
    );
};

export default Chess;