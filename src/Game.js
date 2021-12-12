import Board from './Board';
import MainText from './MainText';
import React, { useState } from 'react';

function Game(props) {

    const [mainText, setMainText] = useState("Start playing!");
        
    return (
        <>
            <MainText
                mainText={mainText}
                minesNum={props.minesNum}
                />
            <Board
                board={props.board}
                boardSize={props.boardSize}
                setMainText={setMainText}
                />
        </>
        );
}

export default Game;