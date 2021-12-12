import Square from './Square';
import Grid from '@mui/material/Grid';
import React from 'react';

function Board(props) {

    //const [propagateList, setPropagateList] = useState([]);
    const {board, boardSize} = props;

    return (
        <Grid
            width={Math.sqrt(boardSize)*20}
            >
            {board.map(item => {
                return (
                    <Square
                        id={item.id}
                        key={item.id}
                        bomb={item.mine}
                        value={item.value}
                        propagate={item.propagate}
                        setMainText={props.setMainText}
                        />
                );
            })}
        </Grid>
    );
}

export default Board;