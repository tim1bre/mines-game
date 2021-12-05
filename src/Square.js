import React, { useState } from 'react';
import {SquareClickedBomb, SquareClickedNoBomb, SquareNotClicked} from "./Square.css"

function Square(props) {

    const [text, setText] = useState("");
    const [clicked, setClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setText(props.value);
    }

    const onContextMenu = (event) => {
        event.preventDefault();
        setRightClicked(true);
        return false;
    }

    return (
        <>
            <button
                className={clicked ? (props.bomb ? "SquareClickedBomb" : "SquareClickedNoBomb") : "SquareNotClicked"}
                style={{backgroundColor: rightClicked && (props.bomb ? 'yellow' : 'red')}}
                onClick={() => handleClick()}
                onContextMenu={(event) => onContextMenu(event)}
                >
                {text}
            </button>
        </>
    )
}

export default Square;