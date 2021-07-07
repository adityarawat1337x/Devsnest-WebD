import React from 'react'

const Box = ({ el,a,index }) => {
    return (
        <div style={{ backgroundColor: a === 1 ? el === 0 ? "black" : "white" : el === 0 ? "white":"black" , width: "40px", height: "40px" }}>
        </div>
    )
}

export default Box;
