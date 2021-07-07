import React from 'react'

const Box = ({ el,index }) => {
    return (
        <div style={{ backgroundColor: el === 0 ? "black" : "white" , width: "40px", height: "40px" }}>
        </div>
    )
}

export default Box;
