import React, { useState } from 'react';
import {SquareClickedBomb, SquareClickedNoBomb, SquareNotClicked} from "./Square.css"

function Square(props) {

    const [text, setText] = useState("");
    const [clicked, setClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setText(props.value);
        let mainText;
        if(props.bomb === false) {
            mainText = "Nice! No mines!";
            // console.log(props);
            // props.propagateLeftClick(props.id);
        } else {
            mainText = "It's a bomb! You lost!";
        }
        props.setMainText(mainText);
    }

    const onContextMenu = (event) => {
        event.preventDefault();
        setRightClicked(true);
        let mainText;
        if(props.bomb === true) {
            mainText = "Nice! You got a mine! ";
        } else {
            mainText = "Wrong guess! That's not a mine!"
        }
        props.setMainText(mainText);
        return false;
    }

    return (
        <>
            <button
                className={(clicked || props.propagate) ? (props.bomb ? "SquareClickedBomb" : "SquareClickedNoBomb") : "SquareNotClicked"}
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