import React, { useState } from 'react';
import {SquareClickedBomb, SquareClickedNoBomb, SquareNotClicked} from "./Square.css"

function Square(props) {

    const [text, setText] = useState("");
    const [clicked, setClicked] = useState(false);

    const porpagateBomb = () => {
        console.log(props.index);
        props.handleBomb(props.index);
    }

    const handleClick = () => {
        if (props.bomb === true) {
            console.log(props.index + ": bomb");
            setText("x");
            porpagateBomb(props.key);
        } else {
            console.log(props.index + ": no bomb");
        }
        setClicked(true);
        console.log(clicked);
    }

    

    return (
        <>
            <button
                className={clicked ? (props.bomb ? "SquareClickedBomb" : "SquareClickedNoBomb") : "SquareNotClicked"}
                onClick={() => handleClick()}
                >
                {text}
            </button>
        </>
    )
}

export default Square;