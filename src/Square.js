import React, { useState } from 'react';
import {SquareClickedBomb, SquareClickedNoBomb, SquareNotClicked} from "./Square.css"

function Square(props) {

    const [text, setText] = useState("");
    const [clicked, setClicked] = useState(false);

    const porpagateBomb = () => {
        // console.log(props.index);
        props.handleBomb(props.index);
    }

    const handleClick = () => {
        setClicked(true);
        setText(props.value);
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