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

    const calculateValues = () => {
        for (let i = 0; i < boardSize; i++) {
            if (board[i].mine === true) {
                if (i-1 >= 0) {
                    board[i-1].value++; 
                }
                if (i%rowSize+1 < rowSize) {
                    board[i+1].value++; 
                }
                if (i-rowSize >= 0) {
                    board[i-rowSize].value++; 
                }
                if (i+rowSize < boardSize) {
                    board[i+rowSize].value++; 
                }       
            }
        }
    };

    const boardSize = 9;
    const rowSize = Math.sqrt(boardSize);

    let board = createBoard(boardSize);
    const minesNum = 2;
    placeMines(board, minesNum);
    calculateValues();

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