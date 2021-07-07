import React from "react";
import Box from "./Box";


const Chess = () => {

    let arr = [];
    for (let i = 0; i < 64; i++)
        arr.push(i%2);
    
    return (
        <div className="Board">
            {arr.map((el, index) => { return <Box el={el} index={index}/>})}
        </div>
    );
};

export default Chess;