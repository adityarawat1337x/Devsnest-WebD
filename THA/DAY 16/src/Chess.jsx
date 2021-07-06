import React from "react";

const Chess = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
        board.push(<div className={`box`} />);
    }
    return (
        <div className="Board" id="board">
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
            <div className="row">{board}</div>
        </div>
    );
};

export default Chess;