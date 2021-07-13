import React from "react";

const Card = ({ name, calorie }) => {

    return (
        <div className="card" >
            <h1>{name}</h1>
            <h4>You have consumed {calorie} cals today</h4>
        </div>
    );
};

export default Card;