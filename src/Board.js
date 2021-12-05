import Square from './Square';
import Grid from '@mui/material/Grid';

function Board() {

    const createBoard = (boardSize) => {
        let minesBoard = [];
        for (let i = 0; i < boardSize; i++) {
            minesBoard.push({id: i, mine: false, value: 0});
        }
        return minesBoard;
    };

    const placeMines = (minesBoard, minesNumber) => {
        let minesCount = 0;
        while (minesCount < minesNumber) {
            let mineCoordinate = Math.floor(Math.random() * boardSize);
            minesBoard[mineCoordinate]['mine'] = true;
            minesCount++;
        }
    }

    const calculateBoardValues = () => {
        for (let i = 0; i < boardSize; i++) {
            if (board[i].mine === true) {
                calculateSurroundingFieldsValue(i);   
            }
        }
    };

    const calculateSurroundingFieldsValue = (fieldIndex) => {
        // upper row
        if ((fieldIndex-rowSize-1 >= 0) && (fieldIndex%rowSize-1 >= 0)) {
            board[fieldIndex-rowSize-1].value++; 
        }
        if (fieldIndex-rowSize >= 0) {
            board[fieldIndex-rowSize].value++; 
        }
        if ((fieldIndex-rowSize+1 >= 0) && (fieldIndex%rowSize+1 < rowSize)) {
            board[fieldIndex-rowSize+1].value++; 
        }
        // row of mines
        if (fieldIndex%rowSize-1 >= 0) {
            board[fieldIndex-1].value++; 
        }
        if (fieldIndex%rowSize+1 < rowSize) {
            board[fieldIndex+1].value++; 
        }
        // lower row
        if ((fieldIndex+rowSize-1 < boardSize) && (fieldIndex%rowSize-1 >= 0)) {
            board[fieldIndex+rowSize-1].value++; 
        }
        if (fieldIndex+rowSize < boardSize) {
            board[fieldIndex+rowSize].value++; 
        }  
        if ((fieldIndex+rowSize+1 < boardSize) && (fieldIndex%rowSize+1 < rowSize)) {
            board[fieldIndex+rowSize+1].value++; 
        }      

    };

    const boardSize = 25;
    const rowSize = Math.sqrt(boardSize);

    let board = createBoard(boardSize);
    const minesNum = 4;
    placeMines(board, minesNum);
    calculateBoardValues();

    console.log(board);

    return (
        <Grid
            width={Math.sqrt(boardSize)*20}
            >
            {board.map(item => {
                console.log(item);
                return <Square bomb={item.mine} value={item.value}/>
            })}
        </Grid>
    );
}

export default Board;