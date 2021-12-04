import Square from './Square';
import Grid from '@mui/material/Grid';

function Board() {

    const boardSize = 25;
    const rowSize = Math.sqrt(boardSize);
    const minesNum = 1;

    const mines = []

    let minesCount = 0;
    while (minesCount < minesNum) {
        let mineCoordinate = Math.floor(Math.random() * boardSize);
        mines.push(mineCoordinate);
        minesCount++;
    }

    const handleBomb = (key) => {
        console.log("handleBomb");
        console.log(key);
        console.log(mines);
    };

    console.log(mines);

    const boardFields = [];
    for (let i = 0; i < boardSize; i++) {
        if (mines.includes(i)) {
            console.log("includes " + i);
            boardFields.push(
                <Square
                    bomb={true}
                    key={i}
                    index={i}
                    handleBomb={handleBomb}
                    />
                );
        } else {
            console.log("does not include" + i);
            boardFields.push(
                <Square
                    bomb={false}
                    key={i}
                    index={i}
                    />
                );
        }
        
    }

    //boardFields[0]
    
    

    return (
        <Grid
            width={Math.sqrt(boardSize)*20}
            >
            {boardFields}
        </Grid>
    );
}

export default Board;